function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Gust");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}
myFunction();


function msg () {
  let msgSend = document.getElementById("msgSend");
  
  msgSend.addEventListener("click", function (){
    const msgInput = document.getElementById("msgInput");
    const messageText = msgInput.value.trim();

    if (messageText !== "") { // Only add message if it's not empty
      const newDiv = document.createElement("div");
      newDiv.classList.add("right", "message");
      newDiv.textContent = messageText;
      document.getElementById("msg").appendChild(newDiv);
    } else {
      removeLastEmptyMessage();
    }

    msgInput.value = "";
  });

  function removeLastEmptyMessage() {
    const msgContainer = document.getElementById("msg");
    const messages = msgContainer.getElementsByClassName("message");
    const lastMessage = messages[messages.length - 1];
    
    if (lastMessage && lastMessage.textContent.trim() === "") {
      msgContainer.removeChild(lastMessage);
    }
  }
}
msg();





// **************** This Code Script created by ChatGPT ********************
// function msg() {
//   let msgSend = document.getElementById("msgSend");
//   msgSend.addEventListener("click", function() {
//     const msgInput = document.getElementById("msgInput");
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("right", "message"); // Use add() method to add multiple classes
    // newDiv.textContent = msgInput.value; // Use textContent instead of innerHTML for plain text
    // document.getElementById("msg").appendChild(newDiv);
    // msgInput.value = "";
    // removeLastEmptyMessage();
//   });
// function removeLastEmptyMessage() {
//   const msgContainer = document.getElementById("msg");
//   const messages = msgContainer.getElementsByClassName("message");
//   const lastMessage = messages[messages.length - 1];
//   if (lastMessage && lastMessage.textContent.trim() === "") {
//     msgContainer.removeChild(lastMessage);
//   }
// }
// }
// msg(); // Call the function to enable the functionality
// *****************************************************************************