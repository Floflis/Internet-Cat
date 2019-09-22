/* Only displays enter button if input haves valid text > */
var flght = document.getElementById("flght");

const input = document.querySelector('input')

input.addEventListener('input', evt => {
  const value = input.value
  
  if (!value) {
    input.dataset.state = ''
    flght.style.display = "none";
  }
  
  const trimmed = value.trim()
  
  if (trimmed) {
    flght.style.display = "block";
    input.dataset.state = 'valid'
  } else {
    flght.style.display = "none";
    input.dataset.state = 'invalid'
  }
})
/* < */

/* get text from input > */
        function getInputValue(){

            // Selecting the input element and get its value 

            var inputVal = document.getElementById("input").value;

            

            // Displaying the value

            alert(inputVal);

        }
/* < */

/* If input haves valid text and it is submitted, update iframe URL with input's text > */
function required()
{
var empt = document.forms["urlsubmit"]["urltext"].value;
if (empt == "")
{
alert("Please input a Value");
}
else 
{
document.getElementById('browserframe').src = inputVal;
}
}
/* < */

/* knows if iframe has been loaded > */
function frameload(){
 alert("iframe loaded")
}
/* < */