import './Page.css';
import { useState } from 'react';
import Input from '../UI/Input/Input.js';
import Button from '../UI/Button/Button.js';
import Task from '../UI/Task/Task.js';
import Empty from '../Empty/Empty.js'

const Page = () => {
	const [inputValue, setInputValue] = useState();
	const [todos, setTodos] = useState([]);
	const handleChange = (e) => {
		setInputValue(e.target.value)
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue && inputValue.trim()) {
			setTodos([...todos, { id: Date.now(), text: inputValue, complete: false }])
			setInputValue('')
		} return null
	};
	const handleComplete = (todo_completed) => {
		setTodos(todos.filter(complete => complete !== todo_completed))
		console.log(todos);
	};
	const removeTask = (todoId) => {
		setTodos(todos.filter(id => id !== todoId))
	}
	return (
		<div className={'page-container'}>
			<div className={'input-container'}>
				<Input type={'text'} placeholder={'Введіть ваше завдання'} value={inputValue} onChange={handleChange} />
				<Button onClick={handleSubmit} children={'Добавити'} />
			</div>
			<div className={'statistic-container'}>
				<p className={'info'}>Всього завдань  <span className={'number'}>{todos.length}</span></p>
				<p className={'info_complete'}>Виконано  <span className={'number'}>
					{todos.filter(item => item.complete === true).length} з {todos.length}
				</span>
				</p>
			</div>
			<div className='task-container'>
				{
					todos.map((item) => (
						<Task task={item} key={item.id} handleComplete={handleComplete} removeTask={removeTask} />
					))
				}
				{
					todos.length === 0 && (<Empty />)
				}
			</div>
		</div>
	)
}
export default Page