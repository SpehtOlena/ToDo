import './Checkbox.css';
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Checkbox = ({ onClick, complete }) => {
	return (
		<div onClick={onClick}>
			{
				complete ? <RiCheckboxBlankCircleLine size={22} className={'unchecked'} /> : <RiCheckboxCircleFill size={22} className={'checked'} />
			}
		</div>

	)
}
export default Checkbox