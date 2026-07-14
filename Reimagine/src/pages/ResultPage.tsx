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
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref='/home'></IonBackButton>
          </IonButtons>
          <IonTitle> Generating Your Design </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1> RESULT PAGE </h1>
        <h2> TODO: IMPLEMENT </h2>
      </IonContent>
    </IonPage>
    
    </>
  );
}; 

export default ResultPage;