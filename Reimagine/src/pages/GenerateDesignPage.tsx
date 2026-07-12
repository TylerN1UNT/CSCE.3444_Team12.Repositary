import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonProgressBar, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const GenerateDesignPage: React.FC = () => {
  
  const [additionalPreferences, setDesignStyle] = useState('');
  
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