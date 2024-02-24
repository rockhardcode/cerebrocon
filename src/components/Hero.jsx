import "./HeroStyles.css"
import homeImg from "../assets/home2.jpg"
function Hero() {
    return (
        <>
        <div className="hero">
            <div className="hero-image-container" >
            <img className="hero-image" alt="HerpImg" src={homeImg}/>
            <div className="image-desc"><div className="desc-container">
                <h1>CerebroCon</h1><h4>7TH JOINT NATIONAL CONFERENCE ON CEREBRAL PALSY DISEASES UNDER THE AEGIS OF THE NATIONAL COLLEGE OF BRAIN PHYSICIAN(INDIA)</h4></div></div>
            </div>
        </div>
        </>
    )
}
export default Hero