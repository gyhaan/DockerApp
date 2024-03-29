Overview
The To Do App is a simple web application designed to help users manage their tasks. It allows users to add, mark as completed, and delete tasks. The application is built using HTML, CSS, and JavaScript, and it stores tasks in the browser's local storage.

Running the Application Locally
To run the To Do App locally, follow these steps:

Clone the Repository: Clone this repository to your local machine.
Open the HTML File: Navigate to the directory where you cloned the repository and open the index.html file in your web browser.
Building and Running with Docker
To build and run the To Do App using Docker, follow these steps:

Build the Docker Image: Navigate to the directory containing the Dockerfile and run the following command to build the Docker image:
docker build -t todo-app .
Run the Docker Container: After the image is built, run the following command to start a container using the image:
docker run -p 80:80 todo-app
This command maps port 80 on your machine to port 80 on the container, allowing you to access the application via http://localhost in your web browser.

Assumptions and Decisions
Local Storage for Tasks: The application uses the browser's local storage to persist tasks. This decision was made to keep the application simple and avoid server-side storage requirements.
Static HTML, CSS, and JavaScript: The application is built using static HTML, CSS, and JavaScript files. This approach was chosen for simplicity and to avoid the need for a backend server.
Docker for Deployment: The Dockerfile is included to simplify deployment. This decision was made to ensure the application can be easily run in various environments without manual setup.
Contributing
Contributions to the To Do App are welcome. Please feel free to submit pull requests or open issues on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.
