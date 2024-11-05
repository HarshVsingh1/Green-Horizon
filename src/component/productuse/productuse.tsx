import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from "axios";
import {  useEffect, useState } from "react";


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
}); 

const ddd =  [
    {
      "name": "Pepper__bell___Bacterial_spot",
      "symptoms": "Water-soaked spots on leaves, turning dark with a yellow halo; lesions may also appear on fruits.",
      "treatment": [
        "Apply copper-based fungicides early in the season.",
        "Ensure proper spacing for good air circulation.",
        "Remove and destroy infected plant debris.",
        "Avoid overhead watering to prevent leaf moisture."
      ]
    },
    {
      "name": "Pepper__bell___healthy",
      "symptoms": "No disease present.",
      "treatment": [
        "Maintain regular watering and fertilizer schedules.",
        "Monitor for early signs of disease or pests.",
        "Rotate crops to prevent soilborne diseases."
      ]
    },
    {
      "name": "Potato___Early_blight",
      "symptoms": "Dark brown spots with concentric rings on older leaves, yellowing around spots.",
      "treatment": [
        "Apply fungicides containing chlorothalonil or mancozeb.",
        "Rotate crops to prevent pathogen buildup in soil.",
        "Remove and destroy infected foliage.",
        "Avoid overhead watering to keep foliage dry."
      ]
    },
    {
      "name": "Potato___Late_blight",
      "symptoms": "Large, irregular water-soaked lesions on leaves and stems; white fungal growth may appear on the underside of leaves.",
      "treatment": [
        "Apply fungicides such as chlorothalonil, mancozeb, or copper-based products.",
        "Space plants for proper airflow and avoid wetting the leaves.",
        "Remove and destroy infected plants immediately.",
        "Practice crop rotation with non-host plants."
      ]
    },
    {
      "name": "Potato___healthy",
      "symptoms": "No disease present.",
      "treatment": [
        "Maintain well-drained soil and monitor for early signs of blight or pests.",
        "Rotate crops yearly to reduce disease risks.",
        "Mulch to prevent weeds and conserve moisture."
      ]
    },
    {
      "name": "Tomato_Bacterial_spot",
      "symptoms": "Small, dark water-soaked spots on leaves and fruits; lesions may appear sunken.",
      "treatment": [
        "Use copper-based sprays early in the season.",
        "Avoid handling plants when wet to reduce bacterial spread.",
        "Use drip irrigation instead of overhead watering.",
        "Remove and dispose of infected plant materials."
      ]
    },
    {
      "name": "Tomato_Early_blight",
      "symptoms": "Dark, circular lesions with concentric rings on lower, older leaves; leaf yellowing and defoliation.",
      "treatment": [
        "Apply fungicides containing chlorothalonil or mancozeb.",
        "Prune lower branches for better air circulation.",
        "Mulch soil to reduce spore splash.",
        "Practice crop rotation."
      ]
    },
    {
      "name": "Tomato_Late_blight",
      "symptoms": "Water-soaked, dark lesions on leaves, stems, and fruits; white fungal growth on the undersides of leaves.",
      "treatment": [
        "Apply copper-based fungicides and act promptly if symptoms appear.",
        "Remove affected leaves and stems.",
        "Avoid watering late in the day to reduce humidity.",
        "Destroy infected plants away from the garden."
      ]
    },
    {
      "name": "Tomato_Leaf_Mold",
      "symptoms": "Yellow spots on upper leaf surfaces, with a velvety, moldy appearance on the underside.",
      "treatment": [
        "Prune plants to increase air circulation.",
        "Use sulfur-based fungicides as a preventive measure.",
        "Reduce humidity by watering plants at the soil level.",
        "Avoid overcrowding plants."
      ]
    },
    {
      "name": "Tomato_Septoria_leaf_spot",
      "symptoms": "Small, circular spots with dark borders on leaves, often starting on lower leaves.",
      "treatment": [
        "Apply fungicides containing chlorothalonil or mancozeb.",
        "Remove affected leaves and maintain garden hygiene.",
        "Space plants to ensure good airflow.",
        "Avoid overhead watering and wetting the foliage."
      ]
    },
    {
      "name": "Tomato_Spider_mites_Two_spotted_spider_mite",
      "symptoms": "Fine webbing on plants, stippling on leaves, and possible leaf yellowing or bronzing.",
      "treatment": [
        "Spray with insecticidal soap or neem oil to control mites.",
        "Increase humidity around plants, as mites thrive in dry conditions.",
        "Remove severely infested leaves.",
        "Introduce natural predators like ladybugs or predatory mites if feasible."
      ]
    },
    {
      "name": "Tomato__Target_Spot",
      "symptoms": "Dark brown lesions on leaves with concentric rings, lesions on stems and fruits.",
      "treatment": [
        "Use fungicides like chlorothalonil or mancozeb.",
        "Prune lower leaves to improve air circulation.",
        "Avoid leaf wetting and ensure well-drained soil.",
        "Practice crop rotation to reduce pathogen presence in soil."
      ]
    },
    {
      "name": "Tomato__Tomato_YellowLeaf__Curl_Virus",
      "symptoms": "Curling and yellowing of leaves, stunted growth, reduced fruit production.",
      "treatment": [
        "Control whiteflies, which spread the virus, using insecticidal soap or neem oil.",
        "Remove and destroy infected plants to prevent spread.",
        "Use virus-resistant tomato varieties.",
        "Keep weeds under control to minimize virus-carrying insects."
      ]
    },
    {
      "name": "Tomato__Tomato_mosaic_virus",
      "symptoms": "Mottling and mosaic pattern on leaves, leaf curl, and reduced plant vigor.",
      "treatment": [
        "Remove infected plants and practice crop rotation.",
        "Sterilize tools and avoid handling plants when wet.",
        "Plant resistant varieties and control aphids that spread the virus.",
        "Avoid smoking near tomatoes as the virus can spread via tobacco."
      ]
    },
    {
      "name": "Tomato_healthy",
      "symptoms": "No disease present.",
      "treatment": [
        "Regularly inspect plants for early signs of pests or disease.",
        "Prune to maintain good airflow and encourage growth.",
        "Fertilize as needed to promote fruiting and healthy foliage."
      ]
    }
  ]



interface responseType {
   name : string ,
   symptoms : string ,
   treatment : string[]
}

interface resultType {
  class : string ,
  class_id : number ,
  confidence : number
}


export default function ProductUse() {

    const [base64Image,setImage] = useState<string>()
    const [result,setResult] = useState<resultType | null >(null)
    const [loading, setLoading] = useState(false);
    const [response , setResponse ] = useState<responseType >()
    
    const apiKey = "nhlnwpW2OchoU26ETf0G";

 
          
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
 



    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files[0]) {
        const file = files[0];
       
        const reader = new FileReader();
  
        reader.onloadend = async () => {
          const base64String = reader.result as string;
           setImage(base64String)
         
          const urlEncodedData = new URLSearchParams();
          urlEncodedData.append("image", base64String);
  
          try {
            const response = await axios({
              method: "POST",
              url: API_BASE_URL,
              params: { api_key: apiKey },
              data: base64String, 
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
          });
            setResult(response.data.predictions[0])
            console.log("hi")

            setLoading(true)
            console.log(response.data.predictions[0])
          } catch (error) {
            console.error("Error:", error);
            // setResult("Error fetching result");
          }
        };
        reader.readAsDataURL(file); 
      }
    };

    useEffect(() => {
      if (result && result.class) {
          const match = ddd.find((Element) => {
              const normalizedClass = result.class.toLowerCase().replace(/_+/g, '_');
              const normalizedName = Element.name.toLowerCase().replace(/_+/g, '_');
              return normalizedClass === normalizedName;
          });
  
          if (match) {
              setResponse(match);
          } else {
              console.error("No match found for class:", result.class);
              // Optionally set response to an empty object or default values
              setResponse({ name: 'Unknown', symptoms: 'No information available.', treatment: [] });
          }
      }
  }, [result]);
  

    return (
        <div className="bg-black flex justify-center items-center text-white" >
                   
                   <div className="border-white  " >
                   <Button
                   sx={{
                    backgroundColor : 'green'
                   }}
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={(event) => handleFileChange(event)}
    multiple
  />
</Button>
<div className="h-96 border-white border w-96 rounded-md flex justify-center items-center" >
  <img src={base64Image} />
</div>
                   </div>
                   <div className="flex flex-col justify-between h-[25rem] mx-10 " >   
                                <div>
                                <div className="font-[roboto] text-xl  border-white" >
                                        RESULT
                                       </div>
                                       <div>
                                         {loading && result?.class}
                                       </div>
            
                                </div>
                                <div>
                                    <div className="font-[roboto] text-xl  border-white" >
                                      Accuracy
                                    </div>
                                    <div>
                                      <div>{loading ? 'Loading...' : result ? (result.confidence * 100).toFixed(2) + '%' : 'N/A'}</div>
                                    </div>
                                    
                              </div>
                                <div>
                                <div className="font-[roboto] text-xl  border-white" >
                                        SYMPTOMS
                                       </div>
                                       <div>
                                       {loading && response?.symptoms}
                                       </div>
            
                                </div>
                                
                                <div>
                                <div className="font-[roboto] text-xl  border-white" >
                                        TREATMENT
                                       </div>
                                       <div>
                                       {loading && response?.treatment ? (
                                              response.treatment.map((text, index) => (
                                                <p key={index}>{text}</p>
                                              ))
                                            ) : (
                                              <p>No treatment information available.</p>
                                            )}
                                       </div>
            
                                </div>
                       
                   </div>
        </div>
    )
}