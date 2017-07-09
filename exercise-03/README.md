# Exercise 03 - Creating your first REST API

## Story

- As a user, I want to retrieve a list of customers with their respective mobile numbers

## UAC

- Data should come from a REST API with an endpoint of `${host}/api/customers`
- Endpoint should use the verb `GET`
- Endpoint should return with status `200 (OK)`

## Assumptions

- We will be using MOCK DATA for our content
- You can find the data in ./mocks/data.json

## Data

```
[
  { 
    "id": 1,
    "first_name": "Osmond",
    "last_name": "Fomichkin",
    "mobile_number": "776-71-0556"
   },
   {
      // more data here
   },
   ...
]
```

## Tech Approach

1. Initialize your package by running `npm init`
2. Install Express Framework (express) `npm install --save express`
3. Install body-parser `npm install --save body-parser`
4. Import customer data `./mocks/data.json`
5. Create a route for `/api/customers` that returns the `customers`
6. Listen to `${host}:9999`

## Accessing your API

1. Open your browser and navigate to http://localhost:9999/api/customers
2. You should get a response with:
```
[{"id":1,"first_name":"Cacilia","last_name":"Batrip","mobile_number":"967-33-9426"},{"id":2,"first_name":"Peyter","last_name":"Cheales","mobile_number":"335-14-4632"},{"id":3,"first_name":"Marketa","last_name":"Siege","mobile_number":"213-87-6459"},{"id":4,"first_name":"Suzanne","last_name":"Gudeman","mobile_number":"714-76-5768"},{"id":5,"first_name":"Kristi","last_name":"Fryd","mobile_number":"133-94-5823"},{"id":6,"first_name":"Ring","last_name":"Haggata","mobile_number":"959-70-4994"},{"id":7,"first_name":"Vidovic","last_name":"Whinray","mobile_number":"311-22-2896"},{"id":8,"first_name":"Drucie","last_name":"Bigham","mobile_number":"357-82-3938"},{"id":9,"first_name":"Dorian","last_name":"Lochrie","mobile_number":"642-70-5150"},{"id":10,"first_name":"Osmund","last_name":"Fomichkin","mobile_number":"776-71-0556"},{"id":11,"first_name":"Mona","last_name":"Barnsley","mobile_number":"291-12-2810"},{"id":12,"first_name":"Sylvia","last_name":"Barkus","mobile_number":"558-33-5357"},{"id":13,"first_name":"Hugues","last_name":"Binner","mobile_number":"699-57-8067"},{"id":14,"first_name":"Euell","last_name":"Dener","mobile_number":"166-52-4585"},{"id":15,"first_name":"Emogene","last_name":"Dawe","mobile_number":"111-88-0229"},{"id":16,"first_name":"Zahara","last_name":"Landells","mobile_number":"413-66-5919"},{"id":17,"first_name":"Frederigo","last_name":"Pamphilon","mobile_number":"891-74-7212"},{"id":18,"first_name":"Richard","last_name":"Kneale","mobile_number":"358-85-8237"},{"id":19,"first_name":"Penny","last_name":"Dennitts","mobile_number":"764-30-4705"},{"id":20,"first_name":"Mortimer","last_name":"Ruddell","mobile_number":"378-98-4696"}]
```

## Accessing your API with a different PORT

1. Run `export PORT=8888`
2. Run `node main.js`
3. Navigate to `http://localhost:8888`
4. You should get the same response as above