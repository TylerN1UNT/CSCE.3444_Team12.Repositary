import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonInput, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

const DesignPreferencesPage: React.FC = () => {
  return (
    <>

    {/* Menu Contents */}
    <IonMenu contentId="home-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu>

    {/* Page Contents */}
    <IonPage id="home-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large"> Home </IonTitle>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {/* Content */}
        <div style={{display : 'inline'}}>
              <b> Describe your dream room </b>
              <span>(optional)</span>
        </div>

        <IonInput placeholder='E.g. a cozy modern living room with earth tones, wooden furniture, and plants...'/>

        <b> Choose style </b>
        <div style={{display: 'flex', flexDirection : 'row', width : '100%', justifyContent : 'space-evenly'}}>
            <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
            <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
            <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
            <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
            <img style={{height: '50px', width : '50px', background : 'yellow'}}/>
        </div>

        <span> Color mood (optional) </span>
        <div style={{display: 'flex', flexDirection : 'row', width : '100%', justifyContent : 'start'}}>
          <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'white', marginRight: '20px'}}/>
          <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'lightgrey', marginRight: '20px'}}/>
          <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'darkgrey', marginRight: '20px'}}/>
          <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'gray', marginRight: '20px'}}/>
          <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'black', marginRight: '20px'}}/>
        </div>
        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default DesignPreferencesPage;