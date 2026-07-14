import { MediaResults } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonProgressBar, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

interface PrevState // State from the previous page
{
    photo: MediaResults | null, 
    color: string, 
    style: string, 
}

const GenerateDesignPage: React.FC = () => {

  const location = useLocation()
  const history = useHistory()
  const prevState: PrevState = location.state as PrevState | undefined
  const photo = prevState?.photo ?? null
  const inferenceURL = "localhost:8080/inference"

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

  async function inference(prompt: string, photo: MediaResults)
  {
      // return await fetch(inferenceURL, {
      //   method: "POST",
      //   headers: {"Content-Type": "application/json"},
      //   body: JSON.stringify({
      //     // INSERT DATA HERE (REFERENCE THE TEST API CALL)
      //   })
      // })

      // [DEBUG ONLY] Return a fake base64 string corresponding to a right arrow svg
      
      return `
  
      PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBT
      VkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xz
      IC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAy
      NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRo
      IGQ9Ik0xMCA3TDE1IDEyTDEwIDE3IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41
      IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3Zn
      Pg==

      `
  }

  useEffect (() => {
    
    // // Null Check: 

    if (!photo || !prevState ) {
      console.error("ERROR - No data available");
      return;
    }

    // Question - should this be an async function? 
    // Algorithm:

    // // 1) Create prompt string from prevstate
     let prompt = constructPrompt(prevState)
    
    // // 2) Fetch result image via inference server (use fetch API)
     const response = inference(prompt, photo) // TODO: Add null checks

    // // 3) Navigate to results page (new page) and pass the base64 output string there

     history.push( '/results', { image: response }); 

    //TODO Create the results Page 
  }, [prevState, photo, history])

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
            
            <img style={{width : '50px', height: '50px', backgroundColor: 'yellow', marginTop: '10px'}}/>
            <b>AI is designing your perfect room...</b>
            <p> This may take a few moments </p>
            
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <IonProgressBar value={.5} color="medium"/>
              <span>50%</span>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', borderWidth: '1px', borderStyle: 'solid', boxShadow: '0px 0px 2px 0px lightgray', borderColor: 'lightgray', borderRadius: '8px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'whitesmoke', color: 'black'}}>
              <img style={{width: '25px', height: '25px', backgroundColor: 'yellow', marginRight: '20px', marginLeft: '20px'}}/>
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