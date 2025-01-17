import Button from "./Button";

const Footer = () => {

    const handleFaHeart = () => {
        console.log("heart");
    }

    const handleFaHeartBroken = () => {
        console.log("brokenheart");
    }

    return (
        <div className="footer">
            <Button icon="faHeart" callback={handleFaHeart} />
            <Button icon="faHeartBroken" callback={handleFaHeartBroken} />
        </div>
    )
}

export default Footer;