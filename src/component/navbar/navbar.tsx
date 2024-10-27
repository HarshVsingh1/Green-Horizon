import logo from '../../assets/greenHorizonlogo.png'
export default function Navbar() {
    return (
        <div className='flex justify-between items-center px-28 py-2 bg-black text-white' >
                <div>
                       <img className='w-48' src={logo} alt='logo' />
                </div>
                <div className='flex mx-auto space-x-8 cursor-pointe ' >
                         <div>Home</div>
                         <div>About</div>
                         <div>Services</div>
                         <div>How it works</div>
                         
                </div>
                <div className='w-44 flex justify-end cursor-pointer ' >
                         <div  >Contact us</div>    
                </div> 
        </div>
    )
}