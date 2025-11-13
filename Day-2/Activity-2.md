# Activity 2 - P5.js and ✨ vibe coding ✨

## Let's import P5.js

P5 is a javascipt port of an older graphical programming tool called Processing. It's also probably the single most popular library used for generative art.

To get started, add this to the very top of your HTML file, between the `<head>` tags.

`<script src="https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/p5.min.js"></script>`

And add this between the `<body>` tags

`<script src="sketch.js"></script>`

And finally, save the contents of `sketch.js` to the same folder as your website

## Shapes, Colours, Movement

There are two components to a P5 sketch, most of what we'll be doing in in the `draw()` function

In there, try adding some shapes. A simplest one is `rect()`

```
rect(30, 20, 55, 55);
// rect(x-position, y-position, width, height)
```

You can change the outline and the fill colour with

```
stroke(0, 0, 0);
fill(255, 0, 0);
```
Try looking at the p5 documentation, and using shapes and colours to draw something

You can also make things move and change colour

```
Let's write this together
```

## Mouse Input

P5 sketches can be interactive in a lot of ways, but a popular one is mouse input. 

Try adding this to your sketch


```
rect(mouseX, mouseY, 55, 55);
```

One of the biggest differences between P5 and normal web interactions, if P5 can't easily detect clicks. What kind of function could we write to hide a shape when it's clicked on?

```
Let's write this together
```

## Using data in P5

You can also use data that we fetched this morning in P5!

Try storing something from the weather API in a variable

```
let currentTemp;
```
And then inside your getWeather function, after the request has completed 

```
currentTemp = await response.json().current.temperature_2m;
```

And then in your P5 sketch

```
    if (currentTemp) {
      text(currentTemp, 50, 50);
    }
```
Try to make something happen in your sketch conditionally based on the weather

## You can style and position the P5 canvas, just like any other element

Try applying some style rules either to elements with `canvas` type, or to elements with `id` of `defaultCanvas`

Try

```
canvas {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
}
```




