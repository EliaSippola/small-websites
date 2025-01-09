import { FaHeart, FaHeartBroken } from "react-icons/fa";

const Button = ({ icon, callback }) => {
    return (
        <div className={`button ${icon == "faHeart" ? "bg-green" : "bg-red"}`} onClick={callback}>
            {icon == "faHeart" ? 
            <FaHeart /> :
            icon == "faHeartBroken" ? 
            <FaHeartBroken /> :
            <></>}
        </div>
    )
}

export default Button;