console.log("js file loaded")

function outputDemo()
{
let output = document.getElementById("myText").value

  console.log(output);

  alert(output);

  document.getElementById("output").innerHTML = "You entered: " + output;

}
