# Coding for Curators Day 2

## Housekeeping

- What operating systems do we have?
- What browsers?
- Does everyone have VSCode?

## Let's open a Command Line



## Where is Data Stored?

We'll look at a few places data can be stored, and their implications for websites. 




### Let's talk about HTTP requests

There are three types of HTTP requests, each with a canonical purpose

- GET
- POST
- PUT
- DELETE

### Send some data with a POST request


```
async function submitMessage() {
    // the rest of your code here
    const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
    })
}
```

Note this function is *async*


### Running a very simple server

1. Install node and npm from https://nodejs.org/en/download

2. Open a terminal in vscode

    ```npm i```

    ```npm run start```
