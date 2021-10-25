const TextElement = document.querySelector('input[name=title]');
const SelectElement = document.querySelector('select[name=priority]');
const ButtonElement = document.querySelector('button[name=save]');

const TableTodo = document.getElementById('table_todo');
const TableTodoing = document.getElementById('table_doing');
const TableDone = document.getElementById('table_done');

const PRIORITY = {
	normal: '일반',
	high: '높음',
	low: '낮음',
}

ButtonElement.addEventListener('click', () => {
	const contents = TextElement.value;
	const priority = SelectElement.value;
	
	// 테스크가 추가되니까.
	addTask(priority, contents);
	// 테스크가 추가된 이후에 상황
	reset();
});

function reset() {
	TextElement.value = '';
	SelectElement.value = 'normal';
};

function addTask(priority, contents) {
	const date = new Date();
	// console.log('TASK CREATE!!', {priority:PRIORITY[priority], contents, date});

	const tr = document.createElement('tr');
	
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');
	const td4 = document.createElement('td');
	
	const checkBoxElement = document.createElement('input');
	checkBoxElement.type = 'checkbox';
	td1.appendChild(checkBoxElement);
	
	td2.innerText = PRIORITY[priority];
	td3.innerText = contents;
	td4.innerText = date.toLocaleString();
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	
	// 고유한 ID값을 줄 수 있을 까?
	// 왜 리액트에서 고유한 ID값을 어떻게 쓰는지?
	
	
	TableTodo.children[1].appendChild(tr);
	
	
}