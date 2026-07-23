import { MediaResults } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonProgressBar, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Photo from '../Photo';
import sparkles from '../images/sparkles.svg'
import lightbulb from '../images/lightbulb.svg'

interface PrevState // State from the previous page
{
    photo: Photo, 
    color: string, 
    style: string, 
}

// Matches the corresponding JSON in the inference server
interface InferenceResponse
{
    image: string,
}

const GenerateDesignPage: React.FC = () => {

  const location = useLocation()
  const history = useHistory()
  const prevState: PrevState = location.state as PrevState
  const inferenceURL = "http://localhost:8000/inference"

  const [inferenceResponse, setInferenceResponse] = useState<InferenceResponse>();

  function constructPrompt(prevState: PrevState): string
  {
      return ("Reimagine this room in a " 
                + prevState.style 
                + " style " 
                + " with a " 
                + prevState.color 
                + " color scheme"
            )
  }

  async function inference(prompt: string, photo: Photo)
  {
      return fetch(inferenceURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            image_data: photo.data,
            image_type: photo.type,
            user_prompt: prompt 
        })
      })
  }

  useEffect (() => {
    
    // Generate Prompt
    let prompt = constructPrompt(prevState)

    // Run inference
    inference(prompt, prevState.photo).then((response:Response) => 
    {
      // Deserialize JSON response
      response.json().then((inferenceResponse: InferenceResponse) => 
      {
        // Navigate to results page
        let inferencePhoto = new Photo(inferenceResponse!.image, "png") // Inference server always returns PNG
        history.push( '/results', 
        {
          originalImage: prevState.photo, 
          inferenceImage: inferencePhoto
        })
     })
    }); 

  }, [])

  return (
    <>

    {/* Page Contents */}
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref='/home'></IonBackButton>
          </IonButtons>
          <IonTitle> Generating Your Design </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {/* Content */}
        <div style={{display : 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%'}}>

          <div style={{width: '95%', height: '100%', display: 'flex', flexDirection: 'column', alignItems : 'center', justifyContent: 'space-evenly'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img src={sparkles} style={{width : '50px', height: '50px', backgroundColor: 'white', marginTop: '10px'}}/>
              <b>AI is designing your perfect room...</b>
              <p> This may take a few moments </p>  
            </div>

            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <IonProgressBar type="indeterminate" color="medium"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', borderWidth: '1px', borderStyle: 'solid', boxShadow: '0px 0px 2px 0px lightgray', borderColor: 'lightgray', borderRadius: '8px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'whitesmoke', color: 'black'}}>
              <img src={lightbulb} style={{width: '25px', height: '25px', marginRight: '20px'}}/>
              <b style={{marginRight: '5px'}}>Tip:</b>
              <span>More details you provide = better results!</span>
            </div>
          </div>
        </div>

        

        
      </IonContent>
    </IonPage>
    
    </>
  );
}; 

export default GenerateDesignPage;