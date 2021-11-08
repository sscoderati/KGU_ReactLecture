import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, content, date, handleDeleteNote, handleUpdateNote }) => {
	return (
	<div className = 'note'>
		<span>{content}</span>
		<div className='note-footer'>
			<small>{date}</small>
			<MdDeleteForever 
				onClick={() => handleDeleteNote(id)} 
				className='delete-icon' 
				size='1.3em' 
			/>	
		</div>
	</div>
	);
}

export default Note;