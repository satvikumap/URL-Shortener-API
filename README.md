
# URL Shortener API

This project is a simple URL shortener service that allows users to shorten URLs, redirect them to the original URLs, and view usage statistics. The application is built using **Node.js**, **Express.js**, and **MongoDB**.

## Endpoints

### 1. **POST /shorten**
- **Description**: Accepts a URL and returns a shortened URL.
- **Request Body**: 
  ```json
  {
    "url": "https://example.com"
  }

### 2. **GET /:shortId**
- **Description**: Redirects the user to the original URL when    accessed with the shortId.
- **Example**:: GET /abcd1234 will redirect to the original URL that corresponds to this shortId.
Response: Redirects the user to the original URL.

### 3. **:GET /stats/:shortId**:
- **Description:** Returns the usage statistics for a specific short URL.
- **Response**:
    ```json
    {
        "clicks": 15,
        "Timestamp": "2024-11-26T10:30:00.000Z"
    }

## **Database**

The service uses MongoDB to store data about the URLs:

- originalUrl: The original URL provided by the user.
- shortId: A unique identifier generated for the shortened URL.
- clicks: The number of times the shortened URL has been accessed.
- lastAccessed: The timestamp of when the shortened URL was last accessed.

## **Features**

- URL Validation: The service ensures that the provided URL is valid.
- Error Handling: The API returns appropriate error responses for missing or invalid data.
- Short URL Generation: A unique shortId is generated for each URL.
- Usage Tracking: Tracks the number of clicks for each shortened URL and the timestamp of the last access.
- Rate Limiting: Implements rate limiting to allow a fixed number of requests per client (100 requests per minute).