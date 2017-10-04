# MESSAGE BOARD PROJECT - Koa attempted...

The task: Build an anonymous message board on Node on the backend, with a simple front-end.

## How to Run
* Clone or download this repo to your local machine.
* Navigate to the project folder in your terminal.
* Run **npm install** to install the dependencies used for this project.
* Type **npm start**, and then navigate to http://localhost:3000 to see the app in the browser
* To run the test suite, run **npm test**

### Technologies Used
* Node.js
* Koa
* Pug
* MongoDB & Mongoose
* Mocha & Zombie

### Lessons Learned
* I attempted this challenge using Koa rather than Express, because I built a similar application using Express in the past. This was challenging because it was a new technology, and in the timeframe, it was difficult to fully understand
* The Message Schema was not being linked to the messageController and I have yet to resolve this issue. At the moment, the message is hard coded so that the same message is always stored into the DB. This is a key issue which I need to look at. Whilst attempting to debug, I realised that creating a new Message Object, only an id was being stored and no message data was being returned.
* Crucially setting up a test database at the beginning of the project allowed my tests to run relatively smoothly.
* Async / Await are vital to how Koa works, and it made me think alot more about how these work - not just in this application, but more generally as well.

### To Do
* Enable User to input a message.
* Amend the checkboxes so a counter can be used to track how many likes or dislikes each comment gets.
* Flash errors for when no input or route not found.
