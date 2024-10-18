
HikVision HTTP Event Listener with Real-Time Speech Announcements

Overview

This application is a real-time HTTP event listener designed to integrate with HikVision facial recognition systems or any other access control devices that send HTTP events. Upon receiving an event containing access control data, the application processes the information and announces the recognized individual’s name using speech synthesis. This system is ideal for environments where real-time event processing and audio notifications are critical, such as in office buildings, security checkpoints, or other controlled access areas.

Key Features

	•	Real-Time HTTP Event Processing: The app continuously listens for HTTP POST requests containing event logs (such as facial recognition data) and processes them instantly.
	•	Speech Synthesis Announcements: Once an event is processed, the system announces the recognized individual’s name in Spanish, using a pre-configured voice. The application is optimized to minimize delays between recognition and speech output.
	•	Optimized for Speed: The application is designed to reduce delays in event processing and speech output by preloading speech synthesis components, ensuring instantaneous voice feedback upon recognition.
	•	Cross-Platform Support: Built with Electron, this application is compatible with Windows, macOS, and Linux systems.
	•	Scalable and Modular Design: The software can be easily adapted for various access control systems, making it flexible for different security setups.

How It Works

	1.	Event Listening: The application listens for HTTP POST requests sent from a facial recognition system or access control device to a predefined endpoint.
	2.	Data Processing: The received event data is parsed to extract relevant information such as the person’s name and employee number.
	3.	Voice Announcement: The application then uses the say library to audibly announce the person’s name in Spanish, ensuring that individuals are recognized both visually and audibly.
	4.	Real-Time Updates: The status of the event processing and server status is displayed on the user interface, allowing easy monitoring of events.

Installation

	1.	Clone the repository:

git clone https://github.com/yourusername/hikvision-event-listener.git


	2.	Navigate to the project folder:

cd hikvision-event-listener


	3.	Install the dependencies:

npm install


	4.	Start the application:

npm start



Configuration

	•	Server Configuration: The default server listens on IP 192.168.0.22 and port 3000. You can modify these values in the index.js file.
	•	Speech Voice Configuration: By default, the application uses the Microsoft Helena Desktop voice for Spanish announcements. You can change the voice by modifying the say.speak() method in the index.js file.

Dependencies

	•	Node.js: JavaScript runtime environment.
	•	Electron: Framework for building cross-platform desktop apps.
	•	Formidable: For parsing incoming HTTP POST request data.
	•	Say.js: For implementing speech synthesis (text-to-speech functionality).

Future Improvements

	•	Multi-language Support: Expanding to support different languages and voices.
	•	Database Integration: Storing and retrieving access logs from a database for more detailed monitoring and reporting.
	•	Real-Time Dashboard: Enhancing the UI to show a live feed of recognized individuals and events.

Feel free to adjust this as needed based on any other customizations or features you want to highlight in your application! Let me know if you need further modifications!
