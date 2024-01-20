import './Button.css';
import { FaRegTrashCan } from "react-icons/fa6";
import plus from "../../../assets/plus.svg"

const Button = ({ children, onClick, type }) => {
	switch (type) {
		case "delete": {
			return (<FaRegTrashCan onClick={onClick} className={'button_delete'} />)
		}
		default: {
			return (
				<button onClick={onClick} className={'button'}>
					{children}
					<img src={plus} alt="plus" />
				</button>)
		}
	}
}
export default Button