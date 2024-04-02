// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


//TODO
// a <p> with red text that says “Hey I’m red!”
//https://www.w3schools.com/js/js_htmldom_nodes.asp
const para = document.createElement("p");
const node = document.createTextNode("Hey Im red!");
para.appendChild(node);

const element = document.getElementById("container");
element.appendChild(para);
para.style.color = 'red';

// an <h3> with blue text that says “I’m a blue h3!”
const blueHeading3 = document.createElement('h3');
blueHeading3.textContent = "Im a blue h3!";
blueHeading3.style.color = 'blue';
container.appendChild(blueHeading3);

// a <div> with a black border and pink background color 
const beautifulDiv = document.createElement("div");
beautifulDiv.style.border = '8px solid black';
beautifulDiv.style.background = 'pink';
container.appendChild(beautifulDiv);

// with the following elements inside of it:
// another <h1> that says “I’m in a div”
const heading1 = document.createElement('h1');
heading1.textContent = 'Im in a div';
beautifulDiv.appendChild(heading1);
//lmao got this reversed, fixed now

// a <p> that says “ME TOO!”
const paraInDiv = document.createElement('p');
paraInDiv.textContent= 'ME TOO!!!';
beautifulDiv.appendChild(paraInDiv);
// Hint for this one: after creating the <div> 
// with createElement, append the <h1> and <p> to it 
// before adding it to the container.