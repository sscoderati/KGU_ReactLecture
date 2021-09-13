const textArea = document.getElementById("text");
const changeWord = document.getElementById("changed-word");
const targetWord = document.getElementById("target-word");
const submit = document.getElementById("submit");
const result = document.getElementById("new-text");
const clear = document.getElementById("clear");
const clipboard = document.getElementById("clipboard");

function changeTextFunc(text, target, word){

	const changedText = text.replaceAll(target, word);
	return changedText
	
}


const onClickSubmit = (e) => {
	const text = textArea.value
	const word = changeWord.value
	const target = targetWord.value
	
	result.value = changeTextFunc(text, target, word)
}
const onClickClear = (e) => {
	textArea.value = ""
	result.value = ""
}
const onClickClipboard = (e) => {
	result.select();
	document.execCommand('copy');
}

submit.addEventListener('click', onClickSubmit);
clear.addEventListener('click', onClickClear);
clipboard.addEventListener('click', onClickClipboard);