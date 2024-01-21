import './Empty.css';
import clipboard from '../../assets/clipboard.svg'

const Empty = () => {
	return (
		<div className={'empty'}>
			<img src={clipboard} alt="clipboard" />
			<div className={'empty-text'}>
				<span className={'empty-text_bold'}>У вас немає завдань</span>
				Створюйте та виконуйте завдання
			</div>
		</div>
	)
}
export default Empty