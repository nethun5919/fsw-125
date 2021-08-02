

var p2 = document.createElement("li");
newp2.textContent = 'document'
var list = document.getElementById("List");
list.appendChild(p2);


var h1 = document.createElement("h1");                        
var text = document.createTextNode("The making of a website.");    
h1.append(text);                                           
document.body.appendChild(h1);


var paragraph = document.createElement("P");                        
var text = document.createTextNode("key languages to know when making a website.");    
paragraph.append(text);                                           
document.body.appendChild(paragraph);


var x = document.getElementById("myFooter").innerHTML;
  document.getElementById("demo").innerHTML = x;
