import logo from '../../assets/greenHorizonlogo.png'
export default function Navbar() {
    return (
        <div className='flex justify-between items-center px-4 py-2' >
                <div>
                       <img className='w-44' src={logo} alt='logo' />
                </div>
                <div className='flex mx-auto space-x-8 cursor-pointer' >
                         <div>Home</div>
                         <div>About</div>
                         <div>Services</div>
                         <div>How it works</div>
                         
                </div>
                <div className='w-44 flex justify-center cursor-pointer ' >
                         <div  >Contact us</div>    
                </div> 
        </div>
    )
}