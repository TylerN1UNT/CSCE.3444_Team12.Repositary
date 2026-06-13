import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

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
        <div style={{display: 'flex' , flexDirection : 'column', alignItems: 'center', width: '100vw', height: '100vh'}}>

            <img style={{width : '95%', height: '40%', backgroundColor: 'yellow', marginTop: '10px'}}/>


            <div style={{display : 'flex', flexDirection : 'column', width : '30%'}}>
              
              <h1 style={{fontWeight : 'bold'}}> Redesign your space with AI</h1>
              <p>Upload a photo of your room and let AI create stunning designs for you.</p>
              
              <IonButton color="dark" routerLink='/upload'>
                Upload Room Photo
              </IonButton>

              <IonButton color="light" routerLink='/upload'> Start Designing </IonButton>
            </div>
        </div>


        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default DesignPreferencesPage;