// --- SPA Section Switching ---
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// --- Registration/Login Logic ---
// ...existing code...

// --- Place your questions array here ---
const questions = [
  // ---------------- HTML (30) ----------------
  { category: "HTML", question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyper>"], correct: 0 },
  { category: "HTML", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"], correct: 0 },
  { category: "HTML", question: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
  { category: "HTML", question: "Which tag inserts a line break?", options: ["<break>", "<br>", "<lb>", "<line>"], correct: 1 },
  { category: "HTML", question: "What is the correct HTML for adding a background color?", options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>", "<bgcolor>yellow</bgcolor>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to display an image?", options: ["<img>", "<image>", "<src>", "<pic>"], correct: 0 },
  { category: "HTML", question: "How do you create an ordered list?", options: ["<ul>", "<ol>", "<list>", "<dl>"], correct: 1 },
  { category: "HTML", question: "Which attribute is used to provide an alternate text for an image?", options: ["title", "alt", "src", "longdesc"], correct: 1 },
  { category: "HTML", question: "Which tag is used to define a table row?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 1 },
  { category: "HTML", question: "Which tag is used to make text bold?", options: ["<b>", "<bold>", "<strong>", "<em>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a numbered list?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correct: 1 },
  { category: "HTML", question: "Which tag is used to create a dropdown list?", options: ["<input type='dropdown'>", "<dropdown>", "<select>", "<list>"], correct: 2 },
  { category: "HTML", question: "Which tag is used to create a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a text area?", options: ["<input type='textarea'>", "<textarea>", "<input type='text'>", "<text>"], correct: 1 },
  { category: "HTML", question: "Which tag is used to create a table cell?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a table header?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 2 },
  { category: "HTML", question: "Which tag is used to create a form?", options: ["<form>", "<input>", "<fieldset>", "<submit>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a horizontal rule?", options: ["<hr>", "<line>", "<rule>", "<horizontal>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a comment?", options: ["<!-- comment -->", "// comment", "<comment>", "# comment"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a meta tag?", options: ["<meta>", "<head>", "<meta-data>", "<data>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a link to an external CSS file?", options: ["<link>", "<style>", "<css>", "<script>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a paragraph?", options: ["<p>", "<para>", "<paragraph>", "<text>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a list item?", options: ["<li>", "<ul>", "<ol>", "<item>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a definition list?", options: ["<dl>", "<ul>", "<ol>", "<list>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a definition term?", options: ["<dt>", "<dd>", "<dl>", "<term>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a definition description?", options: ["<dd>", "<dt>", "<dl>", "<desc>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a superscript text?", options: ["<sup>", "<sub>", "<super>", "<script>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a subscript text?", options: ["<sub>", "<sup>", "<subscript>", "<script>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a blockquote?", options: ["<blockquote>", "<quote>", "<bq>", "<block>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a navigation link?", options: ["<nav>", "<navigation>", "<link>", "<menu>"], correct: 0 },

  // ---------------- CSS (30) ----------------
  { category: "CSS", question: "Which CSS property changes the text color?", options: ["font-style", "color", "background-color", "text-align"], correct: 1 },
  { category: "CSS", question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correct: 0 },
  { category: "CSS", question: "Which property is used to change the background color?", options: ["color", "background-color", "bgcolor", "background"], correct: 1 },
  { category: "CSS", question: "How do you make all <p> elements bold?", options: ["p {font-weight: bold;}", "p {text-style: bold;}", "p {font: bold;}", "p {style: bold;}"], correct: 0 },
  { category: "CSS", question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], correct: 2 },
  { category: "CSS", question: "How do you add a comment in CSS?", options: ["// this is a comment", "<!-- this is a comment -->", "/* this is a comment */", "** this is a comment **"], correct: 2 },
  { category: "CSS", question: "Which property is used to change the left margin of an element?", options: ["margin-left", "padding-left", "indent", "margin"], correct: 0 },
  { category: "CSS", question: "How do you select all elements with class 'test'?", options: [".test", "#test", "*test", "test"], correct: 0 },
  { category: "CSS", question: "Which property is used to underline text?", options: ["text-decoration", "underline", "font-decoration", "decoration"], correct: 0 },
  { category: "CSS", question: "Which value of position property makes the element relative to its first positioned ancestor?", options: ["fixed", "absolute", "relative", "static"], correct: 1 },
  { category: "CSS", question: "Which property is used to set the spacing between lines of text?", options: ["line-height", "letter-spacing", "word-spacing", "spacing"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the font of an element?", options: ["font-family", "font-style", "font-weight", "font-size"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the width of an element?", options: ["width", "size", "element-width", "max-width"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the height of an element?", options: ["height", "size", "element-height", "max-height"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the border of an element?", options: ["border", "border-style", "border-width", "border-color"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the padding of an element?", options: ["padding", "margin", "spacing", "border"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the margin of an element?", options: ["margin", "padding", "spacing", "border"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the display of an element?", options: ["display", "visibility", "show", "block"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the float of an element?", options: ["float", "position", "align", "display"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the clear of an element?", options: ["clear", "float", "position", "display"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the overflow of an element?", options: ["overflow", "flow", "display", "visible"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the visibility of an element?", options: ["visibility", "display", "show", "hidden"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the z-index of an element?", options: ["z-index", "index", "z", "layer"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the opacity of an element?", options: ["opacity", "transparent", "alpha", "visibility"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the cursor of an element?", options: ["cursor", "pointer", "mouse", "hand"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the transition of an element?", options: ["transition", "animate", "move", "effect"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the transform of an element?", options: ["transform", "scale", "rotate", "skew"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the animation of an element?", options: ["animation", "animate", "move", "effect"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the box-shadow of an element?", options: ["box-shadow", "shadow", "drop-shadow", "shadow-box"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the text-shadow of an element?", options: ["text-shadow", "shadow", "drop-shadow", "shadow-text"], correct: 0 },

  // ---------------- JavaScript (30) ----------------
  { category: "JavaScript", question: "Which is the correct way to declare a JavaScript variable?", options: ["var myVar;", "variable myVar;", "v myVar;", "int myVar;"], correct: 0 },
  { category: "JavaScript", question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], correct: 2 },
  { category: "JavaScript", question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "create myFunction()", "def myFunction()"], correct: 0 },
  { category: "JavaScript", question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"], correct: 1 },
  { category: "JavaScript", question: "How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"], correct: 1 },
  { category: "JavaScript", question: "How does a WHILE loop start?", options: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "while (i++ <= 10)"], correct: 1 },
  { category: "JavaScript", question: "How can you add a comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "' This is a comment", "** This is a comment **"], correct: 0 },
  { category: "JavaScript", question: "Which operator is used to assign a value to a variable?", options: ["*", "-", "=", "x"], correct: 2 },
  { category: "JavaScript", question: "What is the correct way to write a JavaScript array?", options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"], correct: 1 },
  { category: "JavaScript", question: "How do you round the number 7.25 to the nearest integer?", options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"], correct: 0 },
  { category: "JavaScript", question: "How do you write a single-line comment in JavaScript?", options: ["// comment", "<!-- comment -->", "# comment", "' comment"], correct: 0 },
  { category: "JavaScript", question: "How do you write a multi-line comment in JavaScript?", options: ["/* comment */", "// comment //", "<!-- comment -->", "# comment #"], correct: 0 },
  { category: "JavaScript", question: "Which event occurs when the user clicks on an HTML element?", options: ["onchange", "onmouseclick", "onmouseover", "onclick"], correct: 3 },
  { category: "JavaScript", question: "How do you declare a JavaScript object?", options: ["var obj = {name:'John', age:30};", "var obj = (name:'John', age:30);", "var obj = [name:'John', age:30];", "var obj = 'name':'John', 'age':30;"], correct: 0 },
  { category: "JavaScript", question: "Which method adds a new element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
  { category: "JavaScript", question: "Which method removes the last element from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correct: 0 },
  { category: "JavaScript", question: "Which method joins two or more arrays?", options: ["concat()", "join()", "merge()", "add()"], correct: 0 },
  { category: "JavaScript", question: "Which method returns the length of an array?", options: ["length", "size", "count", "total"], correct: 0 },
  { category: "JavaScript", question: "Which method sorts the elements of an array?", options: ["sort()", "order()", "arrange()", "align()"], correct: 0 },
  { category: "JavaScript", question: "Which method reverses the order of the elements in an array?", options: ["reverse()", "invert()", "flip()", "turn()"], correct: 0 },
  { category: "JavaScript", question: "Which method returns the first index at which a given element can be found in the array?", options: ["indexOf()", "find()", "search()", "locate()"], correct: 0 },
  { category: "JavaScript", question: "Which method removes the first element from an array?", options: ["shift()", "pop()", "push()", "unshift()"], correct: 0 },
  { category: "JavaScript", question: "Which method adds one or more elements to the beginning of an array?", options: ["unshift()", "push()", "pop()", "shift()"], correct: 0 },
  { category: "JavaScript", question: "Which method returns a shallow copy of a portion of an array?", options: ["slice()", "splice()", "copy()", "cut()"], correct: 0 },
  { category: "JavaScript", question: "Which method changes the contents of an array by removing or replacing existing elements and/or adding new elements?", options: ["splice()", "slice()", "change()", "edit()"], correct: 0 },
  { category: "JavaScript", question: "Which method executes a provided function once for each array element?", options: ["forEach()", "each()", "every()", "map()"], correct: 0 },
  { category: "JavaScript", question: "Which method creates a new array with the results of calling a provided function on every element?", options: ["map()", "forEach()", "every()", "filter()"], correct: 0 },
  { category: "JavaScript", question: "Which method tests whether at least one element in the array passes the test implemented by the provided function?", options: ["some()", "every()", "test()", "check()"], correct: 0 },
  { category: "JavaScript", question: "Which method tests whether all elements in the array pass the test implemented by the provided function?", options: ["every()", "some()", "test()", "check()"], correct: 0 }
];


// --- Category Selection & Quiz Logic ---
// ...rest of your code...

// --- Registration/Login Logic ---
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}
document.getElementById('btnRegister').onclick = function() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pass = document.getElementById('regPass').value;
  const regMsg = document.getElementById('regMsg');
  regMsg.textContent = '';
  if (!name || !email || !pass) { regMsg.textContent = 'Please fill all fields.'; return; }
  if (pass.length < 4) { regMsg.textContent = 'Password must be at least 4 characters.'; return; }
  let users = getUsers();
  if (users.find(u => u.email === email)) { regMsg.textContent = 'Email already registered.'; return; }
  users.push({ name, email, pass });
  saveUsers(users);
  regMsg.textContent = 'Registration successful! Please login.';
  setTimeout(() => { showSection('sec-auth'); regMsg.textContent = ''; }, 1000);
};
document.getElementById('btnLogin').onclick = function() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;
  const loginMsg = document.getElementById('loginMsg');
  loginMsg.textContent = '';
  let users = getUsers();
  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) { loginMsg.textContent = 'Invalid email or password.'; return; }
  localStorage.setItem('currentUser', JSON.stringify(user));
  showSection('sec-category');
};
document.getElementById('showRegisterBtn').onclick = function() {
  document.getElementById('regMsg').textContent = '';
  document.getElementById('loginMsg').textContent = '';
};
document.getElementById('showLoginBtn').onclick = function() {
  document.getElementById('regMsg').textContent = '';
  document.getElementById('loginMsg').textContent = '';
};

// --- 30 Questions with Category ---
const question = [
  // ---------------- HTML (30) ----------------
  { category: "HTML", question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyper>"], correct: 0 },
  { category: "HTML", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"], correct: 0 },
  { category: "HTML", question: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
  { category: "HTML", question: "Which tag inserts a line break?", options: ["<break>", "<br>", "<lb>", "<line>"], correct: 1 },
  { category: "HTML", question: "What is the correct HTML for adding a background color?", options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>", "<bgcolor>yellow</bgcolor>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to display an image?", options: ["<img>", "<image>", "<src>", "<pic>"], correct: 0 },
  { category: "HTML", question: "How do you create an ordered list?", options: ["<ul>", "<ol>", "<list>", "<dl>"], correct: 1 },
  { category: "HTML", question: "Which attribute is used to provide an alternate text for an image?", options: ["title", "alt", "src", "longdesc"], correct: 1 },
  { category: "HTML", question: "Which tag is used to define a table row?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 1 },
  { category: "HTML", question: "Which tag is used to make text bold?", options: ["<b>", "<bold>", "<strong>", "<em>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a numbered list?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correct: 1 },
  { category: "HTML", question: "Which tag is used to create a dropdown list?", options: ["<input type='dropdown'>", "<dropdown>", "<select>", "<list>"], correct: 2 },
  { category: "HTML", question: "Which tag is used to create a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a text area?", options: ["<input type='textarea'>", "<textarea>", "<input type='text'>", "<text>"], correct: 1 },
  { category: "HTML", question: "Which tag is used to create a table cell?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a table header?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 2 },
  { category: "HTML", question: "Which tag is used to create a form?", options: ["<form>", "<input>", "<fieldset>", "<submit>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a horizontal rule?", options: ["<hr>", "<line>", "<rule>", "<horizontal>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a comment?", options: ["<!-- comment -->", "// comment", "<comment>", "# comment"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a meta tag?", options: ["<meta>", "<head>", "<meta-data>", "<data>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a link to an external CSS file?", options: ["<link>", "<style>", "<css>", "<script>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a paragraph?", options: ["<p>", "<para>", "<paragraph>", "<text>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a list item?", options: ["<li>", "<ul>", "<ol>", "<item>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a definition list?", options: ["<dl>", "<ul>", "<ol>", "<list>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a definition term?", options: ["<dt>", "<dd>", "<dl>", "<term>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a definition description?", options: ["<dd>", "<dt>", "<dl>", "<desc>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a superscript text?", options: ["<sup>", "<sub>", "<super>", "<script>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a subscript text?", options: ["<sub>", "<sup>", "<subscript>", "<script>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a blockquote?", options: ["<blockquote>", "<quote>", "<bq>", "<block>"], correct: 0 },
  { category: "HTML", question: "Which tag is used to create a navigation link?", options: ["<nav>", "<navigation>", "<link>", "<menu>"], correct: 0 },

  // ---------------- CSS (30) ----------------
  { category: "CSS", question: "Which CSS property changes the text color?", options: ["font-style", "color", "background-color", "text-align"], correct: 1 },
  { category: "CSS", question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correct: 0 },
  { category: "CSS", question: "Which property is used to change the background color?", options: ["color", "background-color", "bgcolor", "background"], correct: 1 },
  { category: "CSS", question: "How do you make all <p> elements bold?", options: ["p {font-weight: bold;}", "p {text-style: bold;}", "p {font: bold;}", "p {style: bold;}"], correct: 0 },
  { category: "CSS", question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], correct: 2 },
  { category: "CSS", question: "How do you add a comment in CSS?", options: ["// this is a comment", "<!-- this is a comment -->", "/* this is a comment */", "** this is a comment **"], correct: 2 },
  { category: "CSS", question: "Which property is used to change the left margin of an element?", options: ["margin-left", "padding-left", "indent", "margin"], correct: 0 },
  { category: "CSS", question: "How do you select all elements with class 'test'?", options: [".test", "#test", "*test", "test"], correct: 0 },
  { category: "CSS", question: "Which property is used to underline text?", options: ["text-decoration", "underline", "font-decoration", "decoration"], correct: 0 },
  { category: "CSS", question: "Which value of position property makes the element relative to its first positioned ancestor?", options: ["fixed", "absolute", "relative", "static"], correct: 1 },
  { category: "CSS", question: "Which property is used to set the spacing between lines of text?", options: ["line-height", "letter-spacing", "word-spacing", "spacing"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the font of an element?", options: ["font-family", "font-style", "font-weight", "font-size"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the width of an element?", options: ["width", "size", "element-width", "max-width"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the height of an element?", options: ["height", "size", "element-height", "max-height"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the border of an element?", options: ["border", "border-style", "border-width", "border-color"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the padding of an element?", options: ["padding", "margin", "spacing", "border"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the margin of an element?", options: ["margin", "padding", "spacing", "border"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the display of an element?", options: ["display", "visibility", "show", "block"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the float of an element?", options: ["float", "position", "align", "display"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the clear of an element?", options: ["clear", "float", "position", "display"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the overflow of an element?", options: ["overflow", "flow", "display", "visible"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the visibility of an element?", options: ["visibility", "display", "show", "hidden"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the z-index of an element?", options: ["z-index", "index", "z", "layer"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the opacity of an element?", options: ["opacity", "transparent", "alpha", "visibility"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the cursor of an element?", options: ["cursor", "pointer", "mouse", "hand"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the transition of an element?", options: ["transition", "animate", "move", "effect"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the transform of an element?", options: ["transform", "scale", "rotate", "skew"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the animation of an element?", options: ["animation", "animate", "move", "effect"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the box-shadow of an element?", options: ["box-shadow", "shadow", "drop-shadow", "shadow-box"], correct: 0 },
  { category: "CSS", question: "Which property is used to set the text-shadow of an element?", options: ["text-shadow", "shadow", "drop-shadow", "shadow-text"], correct: 0 },

  // ---------------- JavaScript (30) ----------------
  { category: "JavaScript", question: "Which is the correct way to declare a JavaScript variable?", options: ["var myVar;", "variable myVar;", "v myVar;", "int myVar;"], correct: 0 },
  { category: "JavaScript", question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], correct: 2 },
  { category: "JavaScript", question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "create myFunction()", "def myFunction()"], correct: 0 },
  { category: "JavaScript", question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"], correct: 1 },
  { category: "JavaScript", question: "How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"], correct: 1 },
  { category: "JavaScript", question: "How does a WHILE loop start?", options: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "while (i++ <= 10)"], correct: 1 },
  { category: "JavaScript", question: "How can you add a comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "' This is a comment", "** This is a comment **"], correct: 0 },
  { category: "JavaScript", question: "Which operator is used to assign a value to a variable?", options: ["*", "-", "=", "x"], correct: 2 },
  { category: "JavaScript", question: "What is the correct way to write a JavaScript array?", options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"], correct: 1 },
  { category: "JavaScript", question: "How do you round the number 7.25 to the nearest integer?", options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"], correct: 0 },
  { category: "JavaScript", question: "How do you write a single-line comment in JavaScript?", options: ["// comment", "<!-- comment -->", "# comment", "' comment"], correct: 0 },
  { category: "JavaScript", question: "How do you write a multi-line comment in JavaScript?", options: ["/* comment */", "// comment //", "<!-- comment -->", "# comment #"], correct: 0 },
  { category: "JavaScript", question: "Which event occurs when the user clicks on an HTML element?", options: ["onchange", "onmouseclick", "onmouseover", "onclick"], correct: 3 },
  { category: "JavaScript", question: "How do you declare a JavaScript object?", options: ["var obj = {name:'John', age:30};", "var obj = (name:'John', age:30);", "var obj = [name:'John', age:30];", "var obj = 'name':'John', 'age':30;"], correct: 0 },
  { category: "JavaScript", question: "Which method adds a new element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
  { category: "JavaScript", question: "Which method removes the last element from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correct: 0 },
  { category: "JavaScript", question: "Which method joins two or more arrays?", options: ["concat()", "join()", "merge()", "add()"], correct: 0 },
  { category: "JavaScript", question: "Which method returns the length of an array?", options: ["length", "size", "count", "total"], correct: 0 },
  { category: "JavaScript", question: "Which method sorts the elements of an array?", options: ["sort()", "order()", "arrange()", "align()"], correct: 0 },
  { category: "JavaScript", question: "Which method reverses the order of the elements in an array?", options: ["reverse()", "invert()", "flip()", "turn()"], correct: 0 },
  { category: "JavaScript", question: "Which method returns the first index at which a given element can be found in the array?", options: ["indexOf()", "find()", "search()", "locate()"], correct: 0 },
  { category: "JavaScript", question: "Which method removes the first element from an array?", options: ["shift()", "pop()", "push()", "unshift()"], correct: 0 },
  { category: "JavaScript", question: "Which method adds one or more elements to the beginning of an array?", options: ["unshift()", "push()", "pop()", "shift()"], correct: 0 },
  { category: "JavaScript", question: "Which method returns a shallow copy of a portion of an array?", options: ["slice()", "splice()", "copy()", "cut()"], correct: 0 },
  { category: "JavaScript", question: "Which method changes the contents of an array by removing or replacing existing elements and/or adding new elements?", options: ["splice()", "slice()", "change()", "edit()"], correct: 0 },
  { category: "JavaScript", question: "Which method executes a provided function once for each array element?", options: ["forEach()", "each()", "every()", "map()"], correct: 0 },
  { category: "JavaScript", question: "Which method creates a new array with the results of calling a provided function on every element?", options: ["map()", "forEach()", "every()", "filter()"], correct: 0 },
  { category: "JavaScript", question: "Which method tests whether at least one element in the array passes the test implemented by the provided function?", options: ["some()", "every()", "test()", "check()"], correct: 0 },
  { category: "JavaScript", question: "Which method tests whether all elements in the array pass the test implemented by the provided function?", options: ["every()", "some()", "test()", "check()"], correct: 0 }
];

// --- Category Selection & Rules Overlay ---
let quizQuestions = [];
let quizCategory = '';
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let timer = null;
let timePerQuestion = 15;
let timeLeft = timePerQuestion;
let totalTime = 0;
let pendingCategory = '';

function showRules(category) {
  pendingCategory = category;
  document.getElementById('rulesOverlay').style.display = 'flex';
}
document.getElementById('rulesAccept').onclick = function() {
  document.getElementById('rulesOverlay').style.display = 'none';
  startQuizCategory(pendingCategory);
};
document.getElementById('rulesCancel').onclick = function() {
  document.getElementById('rulesOverlay').style.display = 'none';
  pendingCategory = '';
};

function startQuizCategory(category) {
  quizCategory = category;
  if (category === 'All') {
    quizQuestions = questions.slice().sort(() => 0.5 - Math.random()).slice(0, 30);
  } else {
    quizQuestions = questions.filter(q => q.category === category);
    if (quizQuestions.length > 10) {
      quizQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    }
  }
  currentQuestion = 0;
  userAnswers = Array(quizQuestions.length).fill(-1);
  score = 0;
  timeLeft = timePerQuestion;
  totalTime = 0;
  showQuizQuestion(currentQuestion);
}
// --- Show One Question At A Time ---
function showQuizQuestion(idx) {
  showSection('sec-quiz');
  const quizQuestionsDiv = document.getElementById('quizQuestions');
  quizQuestionsDiv.innerHTML = '';
  const q = quizQuestions[idx];
  const block = document.createElement('div');
  block.className = 'question-block';
  block.innerHTML = `<div><b>Q${idx+1} of ${quizQuestions.length} (${q.category}):</b> ${q.question}</div>`;
  q.options.forEach((opt, oidx) => {
    block.innerHTML += `
      <label class="option-label">
        <input type="radio" name="q${idx}" value="${oidx}" ${userAnswers[idx] === oidx ? "checked" : ""} style="margin-right:8px;">
        ${opt}
      </label>
    `;
  });
  quizQuestionsDiv.appendChild(block);

  // --- Timer UI ---
  let timerDiv = document.getElementById('timerDiv');
  if (!timerDiv) {
    timerDiv = document.createElement('div');
    timerDiv.id = 'timerDiv';
    timerDiv.style = "font-weight:bold;margin-bottom:10px;color:#4ade80;";
    quizQuestionsDiv.prepend(timerDiv);
  }
  timerDiv.textContent = `Time left: ${timeLeft}s`;

  // --- Listen for answer ---
  quizQuestionsDiv.querySelectorAll('input[type=radio]').forEach(input => {
    input.onchange = function() {
      userAnswers[idx] = parseInt(this.value);
      clearInterval(timer);
      setTimeout(nextQuestion, 400);
    };
  });

  // --- Start timer ---
  clearInterval(timer);
  timerDiv.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000); // 1000ms = 1 second per tick
}
// --- Next Question or Submit ---
function nextQuestion() {
  totalTime += (timePerQuestion - timeLeft);
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    timeLeft = timePerQuestion;
    showQuizQuestion(currentQuestion);
  } else {
    submitQuiz();
  }
}

// --- Submit Quiz ---
function submitQuiz() {
  clearInterval(timer);
  score = 0;
  for (let i = 0; i < quizQuestions.length; i++) {
    if (userAnswers[i] === quizQuestions[i].correct) score++;
  }
  showSummary(score, userAnswers);
}

// --- Show Summary ---
function showSummary(score, userAnswers) {
  showSection('sec-result');
  document.getElementById('summaryScore').textContent = score;
  document.getElementById('summaryTime').textContent = (totalTime + timeLeft) + 's';
  const summaryList = document.getElementById('summaryList');
  summaryList.innerHTML = '';
  quizQuestions.forEach((q, i) => {
    let html = `<div class="question-block"><div><b>Q${i+1} (${q.category}):</b> ${q.question}</div>`;
    q.options.forEach((opt, oidx) => {
      let cls = "";
      if (oidx === q.correct) cls += " correct";
      if (oidx === userAnswers[i]) cls += " user";
      if (userAnswers[i] !== q.correct && oidx === userAnswers[i]) cls += " wrong";
      html += `<label class="option-label${cls}">${opt}`;
      if (oidx === q.correct) html += " <span style='font-size:0.9em;'>(Correct)</span>";
      if (oidx === userAnswers[i] && oidx !== q.correct) html += " <span style='font-size:0.9em;'>(Your answer)</span>";
      html += `</label>`;
    });
    html += `</div>`;
    summaryList.innerHTML += html;
  });
}

// --- Quiz Form Submit (for manual submit) ---
document.getElementById('quizForm').onsubmit = function(e) {
  e.preventDefault();
  submitQuiz();
};

// --- Back to Login ---
document.getElementById('backDashBtn').onclick = function() {
  showSection('sec-auth');
  quizQuestions = [];
  quizCategory = '';
  currentQuestion = 0;
  userAnswers = [];
  score = 0;
  timeLeft = timePerQuestion;
  totalTime = 0;
};

// --- On Load: Show Auth ---
showSection('sec-auth');
