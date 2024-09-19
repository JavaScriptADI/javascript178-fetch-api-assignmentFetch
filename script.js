// Assignment 1
// make a fetch request to the following url: https://jsonplaceholder.typicode.com/posts a. in your own words explain what is happening in background. b. console.log the response and observe the properties carefully. c. console.log the response status and explain what it means.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        console.log(response);
        console.log(response.status);
    })

    //response status shows if the fetch request was successful or not, in this case status is 200 - success


// Assignment 2
// make a fetch request to following url: https://jsonplaceholder.typicode.com/posts/1 a. transform the response into json format. b. print out the data in console.

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })


// Assignment 3
// make a fetch request to following url: https://jsonplaceholder.typicode.com/posts/1/comments a. transform the response into json format. b. print out the data in console. c. how are these comments related to the post with id 1?

fetch("https://jsonplaceholder.typicode.com/posts/1/comments ")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

// b. postId

// Assignment 4
// make a fetch request to the following url: https://jsonplaceholder.typicode.com/posts a. render the data in the DOM. b. each post should be displayed in a card. c. each card should have a title, body.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {

        const box = document.getElementById("box");
        box.style.display = "flex";
        box.style.flexWrap = "wrap";

        box.innerHTML = "";

        data.forEach(post => {
            const card = document.createElement("article");
            card.style.width = "280px";
            card.style.border = "2px solid black";
            card.style.textAlign = "center";
            
            const title = document.createElement("h2");
            title.textContent = post.title;

            const body = document.createElement("p");
            body.textContent = post.body
            body.style.color = "blue";

            card.appendChild(title);
            card.appendChild(body);

            box.appendChild(card);
        })
    })


// Assignment 5
// add button to each card with the text "comments". a. when the button is clicked, make a fetch request to the comments endpoint. b. render the comments in the DOM.