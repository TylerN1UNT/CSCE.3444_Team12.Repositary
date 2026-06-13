import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import DropdownMenu from '../components/DropdownMenu';

const UploadPhotoPage: React.FC = () => {
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
    
                <div style={{
                    display : 'flex', 
                    flexDirection : 'column', 
                    width : '95%', 
                    alignItems : 'center',
                    backgroundColor : 'lightgray',
                    borderStyle : 'dashed',
                    borderWidth : '2px',
                    borderColor : 'gray',
                    borderRadius : '8px',
                    marginTop : '5px'
                  }}>
                  
                  <img style={{width: '50px', height: '50px', backgroundColor: 'yellow'}}/>
                  <p>Upload a clear photo of your room</p>
                  <IonButton color="light"> Choose Photo </IonButton>
                  
                </div>
    
                <h2> Room Type</h2>
                <DropdownMenu label="Select Room Type"></DropdownMenu>
    
                <h2>Design Style (Optional)</h2>
                <DropdownMenu label="Select Style"></DropdownMenu>
    
                <IonButton color="dark">
                  Next
                </IonButton>
    
            </div>
        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default UploadPhotoPage;
