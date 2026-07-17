import { MediaResults } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonProgressBar, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import {  refreshOutline, optionsOutline, heartOutline, downloadOutline} from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Photo from '../Photo';

interface PrevState // State from the previous page
{
    originalImage: Photo, 
    inferenceImage: Photo 
}

const ResultPage: React.FC = () => {

  const location = useLocation()
  const history = useHistory()
  const prevState: PrevState = location.state as PrevState

  function createDataURL(photo: Photo): string
  {
      return `data:image/${photo.type};base64,${photo.data}`;
  }

  return (
    <>
  {/* NOTE: This is first draft, however, the next item on the TODO List is to find the bugs breaking the code......*/}

    {/* Page Contents */}
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons>
            <IonBackButton text="" defaultHref='/home'></IonBackButton>
          </IonButtons>

          {/* TODO: Get this to be in the middle of the toolbar */}
          <IonTitle> Your AI Design </IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={heartOutline}/>
            </IonButton> 

            <IonButton>
              <IonIcon icon={downloadOutline}/>
            </IonButton>
          </IonButtons>
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
  
        {/* Before / After Images */}

        {/* NOTE: For testing purposes the Before Image has a temporary background of yellow and After Image has a temporary background color of Blue */}

        <div style={{display: "flex", flexDirection: "row", gap: "10px",justifyContent: "center", marginTop: "20px"}}>
          <div>
            <img src={ createDataURL(prevState.originalImage) } style={{width:"160px", height:"220px",  objectFit:"cover", borderRadius:"8px", backgroundColor: 'yellow'}} />
            <p style={{textAlign:"center"}}>
              Original Room
            </p>
          </div>
          <div>
            <img src={ createDataURL(prevState.inferenceImage) } style={{width:"160px", height:"220px", objectFit:"cover", borderRadius:"8px", backgroundColor: 'blue'}} />
            <p style={{textAlign:"center"}}>
              AI Designed Room
            </p>
          </div>
        </div> 

        {/* Action Buttons */}
        
        <div style={{display:"flex", justifyContent:"center", gap:"10px", marginTop:"30px"}}>
          <IonButton fill="outline">
            <IonIcon slot="start" icon={refreshOutline} />
            Regenerate
          </IonButton>
          <IonButton fill="outline">
            <IonIcon slot="start" icon={optionsOutline} />
            Edit Preferences
          </IonButton>
        </div>
        
        <div style={{display:"flex", justifyContent:"center", gap:"10px", marginTop:"15px"}}>
          <IonButton>
            <IonIcon slot="start" icon={heartOutline} />
            Save
          </IonButton>
          <IonButton>
            <IonIcon slot="start" icon={downloadOutline} />
            Download
          </IonButton>
        </div>

        

        <p style={{textAlign:"center", marginTop:"25px", color:"gray"}}>
          Not satisfied? Regenerate or adjust your preferences.
        </p>
        
               
      </IonContent>
    </IonPage>
    
    </>
  );
}; 

export default ResultPage;