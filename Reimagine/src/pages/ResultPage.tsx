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

const ResultPage: React.FC = () => {

  const location = useLocation()
  const history = useHistory()
  const prevState: PrevState = location.state as PrevState

  return (
    <>


    {/* Page Contents */}
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons>
            <IonBackButton text="" defaultHref='/home'></IonBackButton>
          </IonButtons>
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

        <div style={{display: "flex", flexDirection: "row", gap: "10px",justifyContent: "center", marginTop: "20px"}}>
          <div>
            <img src={ prevState.photo ? prevState.photo.webPath: "" } style={{width:"160px", height:"220px",  objectFit:"cover", borderRadius:"8px"}} />
            <p style={{textAlign:"center"}}>
              Original Room
            </p>
          </div>
          <div>
            <img src={prevState.generatedImage} style={{width:"160px", height:"220px", objectFit:"cover", borderRadius:"8px" }} />
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