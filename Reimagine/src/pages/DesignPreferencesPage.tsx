import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const DesignPreferencesPage: React.FC = () => {
  
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
          <IonTitle> Design Preferences </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%', width: '100%'}}>

          {/* Content */}
          <div style={{display : 'inline'}}>
                <b> Describe your dream room </b>
                <span>(optional)</span>
          </div>

          <IonInput placeholder='E.g. a cozy modern living room with earth tones, wooden furniture, and plants...'/>

          <b> Choose style </b>
          <div style={{display: 'flex', flexDirection : 'row', width : '100%', justifyContent : 'space-evenly'}}>
              
              <IonButton fill="clear">
                <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
              </IonButton>

              <IonButton fill="clear">
                <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
              </IonButton>

              <IonButton fill="clear">
                <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
              </IonButton>

              <IonButton fill="clear">
                <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
              </IonButton>

              <IonButton fill="clear">
                <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
              </IonButton>
              
          </div>

          <span> Color mood (optional) </span>
          <div style={{display: 'flex', flexDirection : 'row', width : '100%', justifyContent : 'start'}}>
          <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'silver', marginRight: '20px'}}/>
            <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'white', marginRight: '20px'}}/>
            <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'lightgrey', marginRight: '20px'}}/>
            <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'darkgrey', marginRight: '20px'}}/>
            <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'gray', marginRight: '20px'}}/>
            <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'black', marginRight: '20px'}}/>
          </div>

          <div style={{display : 'inline'}}>
                <b> Additional Preferences </b>
                <span>(optional)</span>
          </div>

          <IonList>
            <IonItem>
              <IonSelect 
                placeholder="Favorite Fruit" 
                interface="action-sheet"
                value={additionalPreferences}
                onIonChange={e => setDesignStyle(e.detail.value)}
              >
                <IonSelectOption value="apple">Apple</IonSelectOption>
                <IonSelectOption value="banana">Banana</IonSelectOption>
                <IonSelectOption value="orange">Orange</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          <IonButton color="dark" expand='full' routerLink='/generating-design'> Generate Design </IonButton>
        </div>
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default DesignPreferencesPage;