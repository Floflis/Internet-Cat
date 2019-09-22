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

        function getInputValue(){

            // Selecting the input element and get its value 

            var inputVal = document.getElementById("input").value;

            

            // Displaying the value

            alert(inputVal);

        }

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