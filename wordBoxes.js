var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  console.log("==handleNewWordsEnter() Called")
  var text = event.currentTarget.value
  console.log("--Text entered: ", text)
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
    console.log("--allWords: ", allWords)
  currentWord = 0;
}

var wordsInput = document.getElementById('words-input') 
//wordsInput.addEventListener('input', handleNewWordsEntered) for assign 3
wordsInput.addEventListener('change', handleNewWordsEntered)

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}

function computeHighlight() {
var select = document.getElementById('every-nth-select')
var userSelection = parsInt(select.value)
if ((currentWord+1)%userSelection===0){

  var radioButtons = document.querySelector('input[name="highlight-color"]:checked')
  console.log("==radioButtons: ", radioButtons)
  return radioButtons.value
} else {
  return false
}
}

function handleButtonClick (event){
console.log('==A button was clicked')
var word = allWords[currentWord]
console.log("==Word: ", word)
if (word){
  var wordElem = generateWordElem(word, 'blue')
  console.log("==wordElem: ", wordElem)

var container = event.currentTarget.parentNode.parentNode
var wordsContainer = container.querySelector('.words-container')
wordsContainer.appendChild(wordElem)
  currentWord = (currentWord+1) % allWords.length
}
}

var buttons = document.getElementsByClassName('add-word-button')
 for (i=0; i<buttons.length; i++)
 buttons[i].addEventListener('click', handleButtonClick)