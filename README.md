# HNG12 StageZero Task API (Node.js)
![image](https://github.com/user-attachments/assets/a5e70dcd-d67a-472d-8ac0-6ac7e82bcba6)

![image](https://github.com/user-attachments/assets/c7f5a76b-b86a-46eb-947a-aef453801364)

![image](https://github.com/user-attachments/assets/a5550073-e44c-45e8-a4fd-8da4db513f7e)

This is a simple public API built with Node.js and Express.js that returns basic information in JSON format.

It fulfils the requirements for the HNG Stage Zero Task.

## Project Description
The API provides the following information:

My registered email address (used to register on the HNG12 Slack workspace).

Returns the current DateTime as an ISO 8601 formatted timestamp.

GitHub URL https://github.com/tomolaoke/HNG12StageZeroTask

## Setup Instructions:
Prerequisites

Node.js (v18 or higher) installed on your machine.

npm (Node Package Manager) or yarn.


Steps to Run the Project Locally


Clone the Repository:

git clone https://github.com/tomolaoke/HNG12StageZeroTask.git

cd HNG12StageZeroTask


Install Dependencies:

npm install

Run the Server:

npm start

Test the API:

Open in your browser or use Postman.

Access the API at:

GET http://localhost:3000/


## API Endpoint
- **URL**: `https://hng12stagezerotask.onrender.com/`
- **Method**: `GET`

## Request Format
No parameters or body required.
Response (200 OK):

## Response Format
```json
{
    "email": "tommola.oke@gmail.com",
    "current_datetime": "2025-01-29T22:19:45.496Z",
    "github_url": "https://github.com/tomolaoke/HNG12StageZeroTask"
}
```

## Example Usage
Using JavaScript (Fetch API):
```javascript
fetch('https://hng12stagezerotask.onrender.com/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
## Backlinks:

- [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)

## Deployment

This API is deployed on Render. You can access it at:

URL: https://hng12stagezerotask.onrender.com/

## License

This project is licensed under the MIT License.

## Author

Tomola Oke

Email: tommola.oke@gmail.com

GitHub: tomolaoke
