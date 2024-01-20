import './Checkbox.css';
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Checkbox = ({ onClick, complete }) => {
	return (
		<div>
			{
				complete ? <RiCheckboxCircleFill size={22} className={'checked'} /> : <RiCheckboxBlankCircleLine size={22} className={'unchecked'} />
			}
		</div>

	)
}
export default Checkbox