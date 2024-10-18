const { app, BrowserWindow, ipcMain } = require('electron');
const http = require('http');
const formidable = require('formidable');


// Declare variables for the server and the main window
let mainWindow;
let server;
let isListening = false;

// Fixed values for IP, PORT, and URL
const ipAddress = '192.168.166.81';
const port = 3000;
const url = '/event';

// Function to create the Electron window
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
}

// Function to send data to the renderer process
function sendDataToRenderer(channel, data) {
    if (mainWindow && mainWindow.webContents) {
        mainWindow.webContents.send(channel, data);
    } else {
        console.error('mainWindow is not defined or webContents is not ready!');
    }
}



// Function to start the HTTP server
function startServer() {
    if (isListening) return;  // Prevent starting the server if it's already running

    server = http.createServer((req, res) => {
        if (req.method === 'POST' && req.url === url) {  // Use dynamic URL
            const form = new formidable.IncomingForm();

            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.error('Error parsing form data:', err);
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Event processed' }));
                    return;
                }

                console.log('Received form-data:', fields);  // Log the form-data
                
                const eventLogArray = fields.event_log;
                if (!eventLogArray || eventLogArray.length === 0) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Event processed' }));
                }

                const eventDataString = eventLogArray[0];

                try {
                    const parsedEventData = JSON.parse(eventDataString);

                    if (!parsedEventData || !parsedEventData.AccessControllerEvent) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        return res.end(JSON.stringify({ message: 'Event processed' }));
                    }

                    const { name, employeeNoString } = parsedEventData.AccessControllerEvent;

                    if (name && employeeNoString) {
                        // Send data to the renderer and speak the name
                        sendDataToRenderer('display-event', { name, employeeNoString });
          
                        
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Event processed' }));
                    } else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Event processed' }));
                    }
                } catch (error) {
                    console.error('Error parsing event data:', error);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Event processed' }));
                }
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    });

    server.listen(port, ipAddress, () => {
        isListening = true;
        console.log(`Server started at http://${ipAddress}:${port}${url}`);
        sendDataToRenderer('server-status', { status: 'started', ip: ipAddress, port: port, url: url });
    });
}

// Start the Electron app and server automatically
app.whenReady().then(() => {
    createWindow();
    startServer();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});