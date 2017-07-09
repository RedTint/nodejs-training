# Exercise 04 - Accessing Route Parameters

## Story

- As a user, I want to retrieve a specific customer from our data store

## UAC

- Data should come from a REST API with an endpoint of `${host}/api/customers/{id}`
- Endpoint should use the verb `GET`
- Endpoint should return with status `200 (OK)`

## Assumptions

- We will be using MOCK DATA for our content
- You can find the data in ./mocks/data.json

## Data

```
{ 
  "id": 1,
  "first_name": "Osmond",
  "last_name": "Fomichkin",
  "mobile_number": "776-71-0556"
}
```

## Tech Approach

1. Create a route for `/api/customers/:id`
2. Get customer from array of customers with `id === {id}`
  a. Note: Make sure to cast `id` to `int`
3. Set status to `200 (OK)`
4. Return customer
5. Listen to `${host}:9999`

## Test Plan

1. Run `npm install`
2. Run `node main.js`
3. Open your browser and navigate to http://localhost:9999/api/customers/1
4. You should get a response similar to:

```
{
  "id": 1,
  "first_name": "Cacilia",
  "last_name": "Batrip",
  "mobile_number": "967-33-9426"
}
```
