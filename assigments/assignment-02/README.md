# Assignment 02 - Component-based and layered architecture

### Story

Tech Story: 
- Create a authentication component that receives a username and password and responds with a FAKE token
- Once logged in, return the user details

### Assumptions
- List of users are just mock data (create from mockaroo)
- User details are just mock data
- User token is related to logged in user

### User Acceptance Criteria (UAC)
- Demo that I can call /authenticate and be able to receive my token
- Demo that I can use my token to get my /users/:token (user details)

### Tips
- You can set a new property using `users['token'] = newToken`;
