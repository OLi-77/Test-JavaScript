var user; 
 {
   user = prompt("Enter your username", "unnamed");
if(user) alert("Your Name: "+user);
else alert("Hello!  \n It would be a pleasure to ñ \n meet you");
}
document.write("Hello  "+user+"<br>");
document.write("This text was created by "); 
document.write("JavaScript");
var b; 
b=confirm("Do you want to \n change your name?");
 if(b==true)
 {
   user2 = prompt("Enter your username", "unnamed");
if(user2) alert("Your name: "+user2);
else alert("Hello!  \n It would be a pleasure to ñ \n meet you");
document.write("<br>"+"Hello  "+user2+"<br>");
document.write("This text was created by "); 
document.write("JavaScript");
}
 // Close the thread directed to the document
document.close();