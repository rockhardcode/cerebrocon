import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import "../components/HeroStyles.css"
import Welcome from "../components/Welcome"
import Registration from "../components/Registration"

function Home () {

    
    return (
        <>
        <Navbar/>
        <Hero/>
        <Welcome/>
        <Registration/>
        </>
    )
    }
    export default Home