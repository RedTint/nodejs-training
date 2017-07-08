# Exercise 02 - Accessing your Environment Variables


### Environment Variables
In most Node.js applications, configuration such as:

- Port number used
- Amazon Web Services SECRET KEYS
- Database username / password
- OTHER sensitive information

are set in the Environment Variables.

To do this in Unix-based run:

```
export MY_VARIABLE=123456
```

and in Windows, run:

```
set MY_VARIABLE=123456
```

### Accessing Environment Variables in Node


You can access your environment variables via `process.env.<identifier>`;

```
// Print MY_VARIABLE
console.log(process.env.MY_VARIABLE);
```
