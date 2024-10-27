import result from '../../assets/check.png'
import camera from '../../assets/camera.png'
import ai from '../../assets/ai-assistant.png'
import {easeIn, easeInOut, easeOut, motion, useInView} from 'framer-motion'
import { useRef } from 'react'
export default function WorkSection() {
       const ref = useRef(null)
       const inView = useInView(ref,{once : false})
       const variant = {
              visible : {opacity : 1 , y : 0 , transition : {ease : easeOut , duration : 1 }},
              hidden : {opacity : 0 , y : 100}
       }
    return <div> 
        <div className='flex items-center justify-center flex-col bg-black' >
             
        <motion.div ref={ref} variants={variant} initial='hidden' animate={inView?'visible':''} className="text-8xl cinzel-bold-header bg-black text-white"  > <span className="text-lime-600" >Empowering</span> Your Vision</motion.div>
         <motion.div ref={ref} variants={variant} initial='hidden' animate={inView?'visible':''} className="text-8xl cinzel-bold-header bg-black text-white" >Enhancing Your <span className="text-lime-600" > Growth </span> </motion.div>
        
        </div>
            
             <div className="text-white bg-black font-[aghartibold] py-24 px-28 " >
             
                <div className='flex items-center justify-evenly py-10' >
               
                      <div className='flex items-center justify-center gap-5 w-1/2 ' > 
                               <div>
                                      <img className='h-24' src={camera} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl font-[roboto] " >
                                Snap a Clear Leaf Image
                                </div>
                                 <motion.div 
                                     initial={{ opacity: 0.5, y: 50 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     transition={{
                                       delay: 0.3,
                                       duration: 0.8,
                                       ease: "easeInOut",
                                     }}
                                 className="text-xl font-[Abel]" >
                                                 Ensure the leaf is fully visible and well-lit. A clear image helps our AI accurately analyze and detect any signs of disease.
                                </motion.div>
                        </div>
                        
                         
                      </div>
                      <div className='flex items-center justify-center gap-5 w-1/2' > 
                               <div>
                                      <img className='h-24' src={ai} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl font-[roboto]" >
                                Upload to Our Platform
                                </div>
                                 <motion.div 
                                   initial={{ opacity: 0.5, y: 50 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{
                                     delay: 0.3,
                                     duration: 0.8,
                                     ease: "easeInOut",
                                   }}
                                 className="text-xl font-[Abel]" >
                                                  Click "Upload" to submit your leaf image. Our easy-to-use interface makes it simple to send the photo for analysis with just one click.
                                </motion.div>
                        </div>
                        
                         
                      </div>
                </div> 
                <br></br>
                <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-width="0.5" />
                </svg>

                <br></br>
                <div className='flex items-center justify-evenly py-10' >
               
                      <div className='flex items-center justify-center gap-5 w-1/2' > 
                               <div>
                                      <img className='h-24' src={result} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl font-[roboto] " >
                                Receive Instant Results
                                </div>
                                 <motion.div
                                   initial={{ opacity: 0.5, y: 50 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{
                                     delay: 0.3,
                                     duration: 0.8,
                                     ease: "easeInOut",
                                   }}
                                 className="text-xl font-[Abel]" >
                                                  In seconds, our AI scans your image and identifies potential diseases. You’ll receive a detailed report with insights on the detected issue.
                                 </motion.div>
                        </div>
                        
                         
                      </div>
                      <div className='flex items-center justify-center gap-5 w-1/2' > 
                               <div>
                                      <img className='h-24' src={ai} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl font-[roboto]" >
                                Follow Suggested Actions
                                </div>
                                 <motion.div 
                                  initial={{ opacity: 0.5, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                  }}
                                 className="text-xl font-[Abel]" >
                                                    Each result includes care instructions and treatment tips tailored to the disease. Take action and keep your plants healthy!
                                 </motion.div>
                        </div>
                        
                         
                      </div>
                </div> 
                <br></br>
                <div className='px-20' >
                <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-width="0.5" />
                </svg>
                </div>
                
               
                
                
             </div>
            
             
    </div>
}