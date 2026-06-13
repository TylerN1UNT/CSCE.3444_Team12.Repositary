import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import "./UploadPhotoPage.css"
import "./ClickPassthrough.css"
import { useState } from 'react';

const UploadPhotoPage: React.FC = () => {
  const [roomType, setRoomType] = useState('');
  const [designStyle, setDesignStyle] = useState('');

  return (
    <>
    
        {/* Page Contents */}
        <IonPage>

          <IonContent fullscreen>
    
            {/* Content */}
            <IonButton color="primary"> Choose Photo </IonButton>

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
                        <IonSelect 
                          placeholder="Favorite Fruit" 
                          interface="action-sheet"
                          value={roomType}
                          onIonChange={e => setRoomType(e.detail.value)}
                        >
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
                        <IonSelect placeholder="Favorite Fruit" interface="action-sheet">
                          <IonSelectOption value="apple">Apple</IonSelectOption>
                          <IonSelectOption value="banana">Banana</IonSelectOption>
                          <IonSelectOption value="orange">Orange</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonList>
                  </div>
      
                  <span>You can customize more later</span>

                  <IonButton color="dark" routerLink='/design-preferences'>Next</IonButton>
                </div>
            </div>

        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default UploadPhotoPage;
