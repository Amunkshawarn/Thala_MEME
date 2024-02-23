function checkInputLength() {
  const userInput = document.getElementById('userInput').value;
  const errorMessage = document.getElementById('errorMessage');

  if (userInput.trim().length === 0) {
    errorMessage.textContent = 'Please enter text.';
    errorMessage.style.color = 'red';
  } else if (userInput.length === 7 || calculateSum(userInput) === 7) { // Check if length is 7 or sum is 7
    const videoPopup = document.getElementById('videoPopup');
    const video = document.getElementById('video');
    const textPopup = document.getElementById('textPopup');

    videoPopup.style.display = 'block';
    textPopup.style.display = 'block';
    video.play();

    errorMessage.textContent = ''; 
  } else {
    errorMessage.textContent = 'Input length should be 7 characters or sum of numerical values should be 7.';
    errorMessage.style.color = 'red';
  }
}

// Function to calculate the sum of numerical values of characters
function calculateSum(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(parseInt(input[i]))) {
      sum += parseInt(input[i]);
    }
  }
  return sum;
}
