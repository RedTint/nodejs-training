# Exercise 14 - Create JWT Implementation

### References
- https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/
- http://jonathanmh.com/example-json-web-tokens-vanilla-javascript/

### Tech Story
- Create a login page that returns a JWT token
- Create a JWT Secured endpoint

### Assumptions
- /login uses mock data of username/passwrd
- /get-products returns mock data

### Tech Approach
- /login - checks username and password
- /get-products checks JWT Token before returning data

### UAC
- Demo that you can call /login and return JWT Token
- Demo that you can't access /get-products without JWT token
- Demo that you can /get-products if JWT token is correct