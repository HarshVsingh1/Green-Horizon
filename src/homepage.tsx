import CropCardRender from "./component/cropcard/cardrender";
import Footer from "./component/footer/footer";
import Herosection from "./component/hero-section/herosection";
import WorkSection from "./component/how-it-works/howitworksection";
import Navbar from "./component/navbar/navbar";
import ProductUse from "./component/productuse/productuse";


export default function Homepage() {
    return (
        <div>

            <div>
                <Navbar></Navbar> 
               
            </div>
            <div className="py-40 bg-black " >
            <Herosection></Herosection>
            </div>
            <div  >
                {/* <WorkingSection></WorkingSection> */}
                <WorkSection></WorkSection>
            </div>
            <div>
                <ProductUse></ProductUse>
            </div>
            <div>
                {/* <SupportSection></SupportSection> */}
                <CropCardRender></CropCardRender>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}