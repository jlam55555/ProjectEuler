var links = function(name, id, answerName) {
  // create head element
  document.querySelector("html").appendChild(document.createElement("head"));
  
  // create and set title to name
  var title = document.createElement("title")
  title.innerHTML = name;
  document.querySelector("head").appendChild(title);
  
  // get answer
  var answer = "<div id='answer'>Answer (<code>" + answerName + "</code>): <span id='realAnswer'>" + eval(answerName) + "</span></div>";
  
  // get time
  var elapsed = "<span id='elapsed'>" + Math.floor((t2-t1)*100)/100 + "ms</span>";
  
  // get code
  var code = document.querySelector("script#script").innerHTML.replace(/var t[12].+?\n/g, "");
  var codeBlock = "<pre id='script'><code>" + code + "</code></pre>";
  
  // get description
  var description = "<div id='description'><h1>Description</h1>" + document.querySelector("body").innerHTML.match(/~([\s\S]+?)~/)[1].replace(/\n/g, "<br /><br />") + "</div>";
  
  // get notes
  var notes = "<div id='notesContainer'><h1>Notes</h1><ul id='notes'><li>" + document.querySelector("body").innerHTML.match(/#[\s\S]+?#/g).join("</li><li>").replace(/#/g, "") + "</li></ul></div>";
  
  // get CSS
  var dependencies = '<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/default.min.css" />';
  dependencies += '<link rel="stylesheet" type="text/css" href="res/euler.css" />';
  dependencies += '<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Oxygen:400,700" />';
  
  // create links
  var links = '<div id="top">' + elapsed + '<a href="https://projecteuler.net/problem=' + id + '">See the question on ProjectEuler</a> | <a href="index.php">Return to Listing</a></div>';
  
  // create links
  var linksString = links + codeBlock + "<div id='container'>" + answer + description + notes + "</div>" + dependencies;
  
  // append to document
  document.querySelector("body").innerHTML = linksString;
  
  // load highlighting script
  var highlightScript = document.createElement("script");
  highlightScript.src = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js";
  highlightScript.type = "text/javascript";
  highlightScript.onload = function() {
    hljs.initHighlighting();
  };
  document.querySelector("head").appendChild(highlightScript);
  
  console.log("Answer: " + eval(answerName));
  console.log("Elapsed Time: " + Math.floor((t2-t1)*100)/100 + "ms");
};
