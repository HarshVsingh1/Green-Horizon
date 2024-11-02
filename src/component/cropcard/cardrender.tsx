import pepper from '../../assets/pepper.jpg'
import tomato from '../../assets/tomato.jpg'
import potato from '../../assets/potato.jpg'
import ActionAreaCard from './cropcard'

export default function CropCardRender() {

  const data =   [
        {  
          "image":  tomato ,
          "name": "Tomato",
          "description": "A versatile crop rich in vitamins C and K, known for its juicy red fruit. Tomatoes thrive in warm, sunny climates with well-drained soil and regular watering. Ideal for fresh salads, sauces, and more."
        },
        {  
          "image": pepper ,
          "name": "Pepper (Bell)",
          "description": "Vibrant and crunchy, bell peppers come in various colors, adding sweetness and color to dishes. They require full sunlight and consistent moisture to flourish and are perfect for stir-fries, salads, and stuffing."
        },
        {
          "image" : potato,
          "name": "Potato",
          "description": "A staple root vegetable known for its adaptability, the potato provides essential carbohydrates. Grows best in cool weather with moist, well-drained soil. Potatoes are foundational in countless dishes worldwide."
        }
      ]
      
    return (  
      <div>
         <div className=' bg-black font-[roboto]  text-5xl px-48  pt-14 text-green-600' >
         OUR  SUPPORTED CROPS
        </div>
        <div className="flex  justify-evenly bg-black py-24 flex-wrap gap-4"> 
       
       {data.map((item, index) => (
         <ActionAreaCard className='bg-black text-white' key={index} data={item} />
       ))}
     </div>
      </div>
      
    )
}