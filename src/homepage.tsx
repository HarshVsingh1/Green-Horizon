import Herosection from "./component/hero-section/herosection";
import Navbar from "./component/navbar/navbar";


export default function Homepage() {
    return (
        <div>

            <div>
                <Navbar></Navbar> 
                <Herosection></Herosection>
            </div>
        </div>
    )
}