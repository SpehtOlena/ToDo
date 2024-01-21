import './Task.css';
import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox.js';
import Button from '../Button/Button.js';

const Task = ({ task, removeTask, handleComplete }) => {
	const [complete, setComplete] = useState(true);
	const handleClick = () => {
		setComplete(!complete);
		const check = (task.complete) = complete;
		handleComplete(check)
	}
	return (
		<div className={'task'} key={task.id}>
			<Checkbox onClick={handleClick} complete={complete} />
			<p className={complete ? 'uncompleted' : 'completed'}>{task.text}</p>
			<Button type={'delete'} onClick={() => removeTask(task)} />
		</div>
	)
}
export default Task
