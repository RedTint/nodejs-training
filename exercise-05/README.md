# Exercise 05 - Saving Data via HTTP POST

## Story

- As a user, I want to save a customer’s data

## UAC

- Data should be stored by posting to `${host}/api/customers`
- Endpoint should accept verb `POST`
- Endpoint should return with status `201 (Created)`

## Assumptions

- We will be using MOCK DATA for our content
- You can find the data in ./mocks/data.json

## Tech Approach

1. Create a route for POSTing to `/api/customers`
2. Receive data from `request.body`
3. Append data to customer list
4. Respond with status `201 (Created)`

## Test Plan

1. Run `npm install`
2. Run `node main.js`
3. Using POSTMAN, POST to http://localhost:9999/api/customers with data:
```
{
	"id": 21,
	"first_name": "NodeJs",
	"last_name": "Rocks",
	"mobile_number": "0917-700-8103"
}
```
4. You should receive a response with `201 (Created)`