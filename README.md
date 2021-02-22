# meevajobs-newsletter-service
This project consists of an API and a service. The API allows you to subscribe and unsubscribe from a newsletter service. While, the service sends newsletters to subscribers.

The API was written in Node.js while the service was written in Laravel. 

### Laravel Setup

The setup for this follows the default Laravel setup. Since the queue manager runs on redis ensure to have a redis server is running and connect it to the server using the appropriate authentication details.

Also ensure that you have a queue worker running by running 

``php artisan queue:work``

### Node.js Setup
Clone this repo and run the command

`npm install`

To run the app on your local machine, copy the contents of the ``.env.example`` file into a file name ``.env.develop `` and fill up the environment fields as required. Then run the command

`npm run start:dev`

This will start the app in development mode.


Alternatively, copy the contents of the ``.env.example`` file into a ``.env`` file and fill up the environment fields as required. Then run the command

``npm start``

This will start the app in development mode

### Running Tests 
To run tests copy the contents of the ``.env.example`` file into a ``.env.testing`` file and fill up the environment fields as required. Then run the command
``npm test``
