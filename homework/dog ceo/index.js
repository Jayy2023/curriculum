
const output = document.querySelector('#output');
const btn = document.querySelector('button');
const thePrompt = document.getElementById('prompt');
btn.onclick = handleClick;
output.onclick = handleSelection;

function handleSelection(e){
  const breed = e.target.getAttribute('data-breed');
  if(breed){
    giveFeedback(breed === answer);
  }
 
}



let breeds = [];
let answer = "";


function setRandomAnswer(){
  answer = breeds[Math.floor(Math.random() * breeds.length)]
  const prompt = document.createElement('div');
  prompt.innerText = `Which image shows the ${answer} breed?`
  prompt.style.color = "white";
  thePrompt.append(prompt)

}
function giveFeedback(isCorrect){
  const feedback = document.createElement('div');
  const message = isCorrect ? "Correct" : "Not Correct";
  feedback.innerText = `That is ${message}`
  thePrompt.append(feedback);
  
}

  async function handleClick(){
    for( let image = 0; image < 4; image++){
    const url =  await fetch("")
      .then(response => response.json())
     .then (data => data.message)
        const image = document.createElement('img');
        image.src = url;
        output.appendChild(image);
        image.setAttribute('data-breed', 'breed');
        breeds.push(url.split("/")[4]);
        // window.prompt('Select breed');
    }
    const dogImagesElement = document.getElementById('dog-images');
    const scoreElement = document.getElementById('score');
    let score = 0;
    
    function getDogs() {
      fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => {
          const dogImages = data.message;
          dogImagesElement.innerHTML = '';
          dogImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            dogImagesElement.appendChild(imgElement);
          });
        })
        .catch(error => {
          console.error('Error fetching dogs:', error);
          alert('Error fetching dogs. Please try again later.');
        });
    }
    
    function guessBreed(event) {
      const target = event.target;
      const breed = target.alt.split(' ')[0];
      const guess = prompt(`What breed is this dog? (${breed})`).toLowerCase();
      if (guess === breed.toLowerCase()) {
        score++;
        scoreElement.textContent = score;
        alert('Correct!');
      } else {
        alert(`Incorrect. The breed is ${breed}.`);
      }
    }
    
    const getDogsButton = document.getElementById('get-dogs-btn');
    getDogsButton.addEventListener('click', getDogs);
    
    dogImagesElement.addEventListener('click', guessBreed);
    
   }
  console.log(breeds)
   setRandomAnswer();




    
  

  
 




