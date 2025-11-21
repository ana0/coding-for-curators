# Activity 1 - Data sources and APIs

## Let's open a Command Line

The easiest way to do this on Mac is to open search and type "Terminal"

Here's a cheatsheet of quick terminal commands

| Explanation | Command | 
| -------- | -------- | 
| Print "hello world" to the screen    | `echo "hello world"`  | 
| Print the name of the current user account    | `whoami`  | 
| Print working directory (directory=a folder)   | `pwd`  | 
| Make a directory called files    | `mkdir files`  | 
| List the contents of the current directory    | `ls`  | 
| List the contents of the current directory, including hidden files and their metadata    | `ls -la`  | 
| Change directory to files (enter the "files" directory you just made)    | `cd files`  | 
| Go back up a directory (to where you just were)    | `cd ..`  | 
| Change directory to files   | `cd files`  | 
| Create a file called file.txt (or update the timestamp of file.txt if it already exists)   | `touch file.txt`  | 
| Clear the terminal  | `clear`  | 

The one we are mostly going to be using today is 

```python -m http.server```

Depending on your OS, you may need `python3 -m http.server` instead.

Now open Chrome and go to http://localhost:8000/

Let's briefly also observe the magic of ✨ index.html ✨

## Where is Data Stored?

We'll look at a few places data can be stored, and their implications for websites. 

- localstorage
- our own API
- third party APIs

### Localstorage

If you didn't do it yesterday, try pushing the submit button on your form a few times, and build up a queue of messages. Then refresh the page. Why is that happening? 

One of the easiest places to store data is localstorage. The browser actually has a small storage built in. Let's open up dev tools are look at it

To store a message there, add `localStorage.setItem("message", message);` to the end of your `submitMessage` function.

Try it out and refresh the page. Look at it in devtools and see that it's still there. 

To display it, let's add a bit of code that will run when we load the page. Right at the top, add:

```
    form = document.getElementById("form");
    messageContainer = document.createElement("p")
    messageContainer.innerHTML = localStorage.message;
    form.appendChild(messageContainer);
```

But we have a few problems. Try opening this page up in an incognito window. 

We need to use control flow to check if a message exists in localstorage, and only display one if it does. 

```
Let's write it together
```

But we still have a few problems. One of them is that we can only store one message at a time. And the other is that we can't see the same messages in different browsers. 

The first one we can solve with localstorage. How might we do it?

The second we are only going to be able to solve with an API and external database.

### HTTP requests

There are three types of HTTP requests, each with a canonical purpose

- GET (used for READING data)
- POST (used for CREATING data)
- PUT (used for UPDATING data)
- DELETE (used for DELETING data)

You will sometimes hear the term "CRUD", and it stands for CREATE, READ, UPDATE, DELETE. 

### Running a very simple server

1. Install node and npm from https://nodejs.org/en/download

2. Open a terminal and make a folder for your new api

   ```mkdir api```
   
   Now `cd api` and `touch package.json` and `touch index.js`

3. Open the api folder you just made in Vscode. Go to https://github.com/ana0/coding-for-curators/tree/main/Day-2/api and copy the contents of package.json and index.js into the files you just made.

4. Back in terminal, install the dependencies

    ```npm i```

5. Start the api

    ```npm run start```

Notice what port it's running on. What do you see when you go to this port at localhost in the browser? What about the database?

Let's take a minute to read the code.

### Read some data with a GET request

This is a GET request using the browser's built in fetch tool. Try putting this at the top of javascript after the first `<script>` tag. 

```
    async function getMessages() {
        const response = await fetch("http://localhost:3000/messages", {
            method: "GET",
        })
        console.log(await response.json())

        // we'll write the rest together
    }

    getMessages(); 
```

Let's re-write our page so it displays all the messages from here instead of the localstorage code.

### Send some data with a POST request

Now let's try a POST request. We'll send messages from our form to our local API. 

Note this function has become *async*

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

### Using a third-party API

There are all kinds of places online to get data from, and most of them will have an API. For today, we are going to look at the weather

```
    async function getWeather() {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?" + new URLSearchParams({
            latitude: 47.5584,
            longitude: 7.5733,
            current: "temperature_2m",
        }).toString(), {
            method: "GET",
        })

        // try adding it the results to your webpage somewhere!
    }

    getWeather();
```

Here are the full docs: https://open-meteo.com/en/docs

Success! That's the end of our first coding activity
