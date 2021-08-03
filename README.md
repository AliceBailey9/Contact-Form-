# Getting Started with Alice's Contact Form

The aim of this project was to create a contact form that upon submittion will save and send an email to a chosen address with the details inputted in the form. Data from this contact form is saved to a "Contact information" collection in Firebase Cloud Firestore. Each form is saved as a document within this collection, with the users name being saved as the document id (as the database gets larger it will be better to change to firebase generated id's incase people have the same full names).

### ` How to use this project`

To run this project you will first need to fork and clone this repository and then run npm install. The devDependencies include Jest, React, Firebase, Emailjs and Chart.js.

To run this application run `npm start`.

This project includes a testing suite in utils.test.js for the form validation functions in utils.js. To run these tests please run `npm test`.

Personal firestore configuration keys and email.js access tokens are in files that have been gitignored.

### `Things to add in the future`

- More styling across all components
- Storing user keys in an .env file
- Creating more flexible email validation function (more complex regex). Or if this was going to be on a larger scale maybe using an external API source such as mailgun or ZeroBounce to check emails are correct.
- Making the content box go onto multiple lines
