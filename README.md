# Fetch API

[JSON placeholder](https://jsonplaceholder.typicode.com/) is a free online REST API that you can use whenever you need some fake data. It is great for testing and prototyping.


1. make a fetch request to the following url: `https://jsonplaceholder.typicode.com/posts`
    a. in your own words explain what is happening in background.
    b. console.log the response and observe the properties carefully.
    c. console.log the response status and explain what it means.
2. make a fetch request to following url: `https://jsonplaceholder.typicode.com/posts/1`
    a. transform the response into json format.
    b. print out the data in console.
3. make a fetch request to following url: `https://jsonplaceholder.typicode.com/posts/1/comments`
    a. transform the response into json format.
    b. print out the data in console.
    c. how are these comments related to the post with id 1?
4. make a fetch request to the following url: `https://jsonplaceholder.typicode.com/posts`
    a. render the data in the DOM.
    b. each post should be displayed in a card.
    c. each card should have a title, body.
5. add button to each card with the text "comments".
    a. when the button is clicked, make a fetch request to the comments endpoint.
    b. render the comments in the DOM.

