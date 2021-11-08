import { useState } from "react";

const AddNote = ({handleAddNote}) => {
	const [noteText, setNoteText] = useState('');

	const chatacterLimit = 250;

	const handleChange = (e) => {
		if(chatacterLimit - e.target.value.length >= 0){
			setNoteText(e.target.value);
		}
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0){
		handleAddNote(noteText);
		setNoteText('');
		}
	}
	return (
	<div className='note new'>
		<textarea
			rows='8'
			cols='10'
			placeholder="Type to add a note...."
			value={noteText}
			onChange= {handleChange}
		></textarea>
		<div className='note-footer'>
			<small>{chatacterLimit - noteText.length} Remaining...</small>
			<button className='save' onClick= {handleSaveClick}>Save</button>
		</div>
	</div>
	);
};

export default AddNote;