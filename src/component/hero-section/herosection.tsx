import { Button } from '@mui/material'
import BannerImg from './../../assets/herosectionimage.jpg'

export default function Herosection() {
    return (
        <div className='flex justify-between px-28 font-[roboto] bg-black text-white ' >
            <div>
                     <div className='text-6xl ' >
                     Revolutionize Plant Health with <br /> AI-Powered Disease Detection
                     </div>
                     <div className='text-xl mt-14' >
                     Our advanced AI technology detects plant diseases through leaf images, <br /> helping you ensure healthier crops and higher yields.
                     </div>
                     <div className='my-14 flex gap-10' >
                     <Button variant="contained">Join now</Button>
                     <Button variant="outlined">Contact us</Button>
                     </div>
            </div>
            <div>
                <img className='h-[500px]' src={BannerImg} alt='bannerImage' />
            </div>
           
        </div>
    )
}