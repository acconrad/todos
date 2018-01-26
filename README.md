# todos
A simple Todo list app in HTML, CSS and vanilla JavaScript

## How it works

The UI components are housed within the `index.html` file. The interactivity is spawned from `app.js`, where the logic for the app sits.

### The Revealing Module Pattern

The basis for organizing the JavaScript is based on the [Revealing Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript). This isolates the functionality into an object so we don't expose it globally, unless we want it to, which is only the case for the `init()` function. By using this pattern, we can create a basic MVC architecture. Since we are using an Immediately Invoked Function Expression, you may notice we import `document` and `localStorage`. The jQuery source code does this as well, and we do this to prevent someone from corrupting the program by isolating how we use core globals like `document`. By importing it through the IIFE and changing the variable name, we prevent the variable from being accidentally overwritten within the MVC object.

### Model

The model is simply the `todos` variable. Since we can easily conceptualize a todo list as an array of objects, we require nothing excessive like creating a class-like object.

### View

Vanilla MVC has an interface that requires two functions on the view: `init()` and `render()`. 

#### `init()`

As the name implies, it handles initializing events, which include adding todo items and composing the email content.

#### `render()`

This is the recurring function called by both `init()` to set the initial view state, as well as the controller functions to update the view UI when model data changes.

### Controller

The controller is the bread and butter of where our logic operates in the application. If we think of the view and model as two isolated objects, the controller is the intermediary that has the ability to talk between the two objects. The controller is based off of a simple CRUD (Create, Read, Update, Delete) protocol, with an `init()` function to grab the data and kick off the view rendering, as well as a `toString()` utility function for turning the JSON data into something human-readable.

## Questions?

This was an exercise for me to create a basic design pattern for MVC on vanilla JavaScript without frameworks. It's a good reference point for me on new company projects, but if you have questions, feel free to write up an Issue or send me an email at **acconrad [at] protonmail [dot] com**.
