HTTP Event Listener with Real-Time Speech Announcements

Overview

This application is a real-time HTTP event listener designed to integrate with access control systems, such as facial recognition cameras. Upon receiving an HTTP POST request containing access event data, the application processes the information and announces the recognized individual’s name using speech synthesis. The application is optimized for environments requiring quick response times, making it ideal for access control and security systems.

Features

	•	Real-time HTTP Event Listening: The app listens for HTTP POST events from external sources, such as facial recognition cameras.
	•	Speech Synthesis Integration: The system uses a pre-configured voice to announce the name of the recognized individual in Spanish, providing a clear audio indication of the person at the access point.
	•	Modular Design: The application is built with scalability in mind, allowing it to integrate easily with different access control systems.
	•	Optimized Response Times: The application includes preloading techniques to minimize the delay between the event trigger and the voice announcement.

How It Works

	1.	HTTP Event Reception: The application runs an HTTP server, which listens for POST requests from connected devices (e.g., cameras or sensors). The event data includes key information like the person’s name and employee number.
	2.	Event Processing: Upon receiving an event, the application parses the event data and extracts the relevant information.
	3.	Voice Announcement: Using the Node.js say library, the system announces the person’s name in Spanish through speech synthesis.
	4.	System Notifications: The UI provides visual updates regarding the status of the server (e.g., whether it is running) and the latest event data.

Technologies Used

	•	Electron: Provides the cross-platform desktop app framework.
	•	Node.js & Express: Used to handle HTTP requests and responses.
	•	Formidable: For parsing incoming form data in the POST requests.
	•	Say: Node.js library for text-to-speech synthesis.
	•	JavaScript (Frontend): For handling UI updates and rendering the server’s status and event data.
