// Exercise 02 - Accessing Environment Variables

if (!process.env.MY_VARIABLE) {

    console.log('MY_VARIABLE is not set');

} else {

    console.log('MY_VARIABLE contains ' + process.env.MY_VARIABLE);

}
