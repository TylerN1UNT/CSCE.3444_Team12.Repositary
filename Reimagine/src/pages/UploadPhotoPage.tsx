import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import "./UploadPhotoPage.css"

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
            <div id="content-div">
    
                <div id="image-upload-div">
                  
                  <img style={{width: '50px', height: '50px', backgroundColor: 'yellow'}}/>
                  <p>Upload a clear photo of your room</p>
                  <IonButton color="light"> Choose Photo </IonButton>
                  
                </div>

                <div id="controls-div">

                  <div className="input-div">
                    <span>Room Type</span>
                    <IonList>
                      <IonItem>
                        <IonSelect placeholder="Favorite Fruit" interface="popover">
                          <IonSelectOption value="apple">Apple</IonSelectOption>
                          <IonSelectOption value="banana">Banana</IonSelectOption>
                          <IonSelectOption value="orange">Orange</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonList>
                  </div>
      
                  <div className="input-div">
                    <span>Design Style (Optional)</span>
                    <IonList>
                      <IonItem>
                        <IonSelect placeholder="Favorite Fruit" interface="popover">
                          <IonSelectOption value="apple">Apple</IonSelectOption>
                          <IonSelectOption value="banana">Banana</IonSelectOption>
                          <IonSelectOption value="orange">Orange</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonList>
                  </div>
      
                  <IonButton color="dark">
                    Next
                  </IonButton>
                </div>

                <span>You can customize more later</span>
                <IonButton> Next </IonButton>

            </div>

        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default UploadPhotoPage;
