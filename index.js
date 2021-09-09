const textArea = document.getElementById("text");
const changeWord = document.getElementById("changed-word");
const targetWord = document.getElementById("target-word");
const submit = document.getElementById("submit");
const result = document.getElementById("new-text");

function changeTextFunc(text, word, target){

	const changedText = text.replaceAll(word, target);
	return changedText
	
}


const onClickSubmit = (e) => {
	const text = textArea.value
	const word = changeWord.value
	const target = targetWord.value
	
	result.value = changeTextFunc(text, word, target)
}

submit.addEventListener('click', onClickSubmit);