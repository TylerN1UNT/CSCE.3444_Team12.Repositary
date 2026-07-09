import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import "./UploadPhotoPage.css"
import "./ClickPassthrough.css"
import { Camera, MediaResults, MediaTypeSelection } from '@capacitor/camera';
import { useState } from 'react';
import { useHistory } from 'react-router';

const UploadPhotoPage: React.FC = () => {
  const [roomType, setRoomType] = useState('');
  const [designStyle, setDesignStyle] = useState('');

  const history = useHistory()
  const [photo, setPhoto] = useState<MediaResults | null>(null);

  async function selectPhoto()
  {
    setPhoto(await Camera.chooseFromGallery({
      mediaType: MediaTypeSelection.Photo,
      allowMultipleSelection: false,
      includeMetadata: false
    }))
  }

  function nextPage()
  {
      history.push("/design-preferences", { photo })
  }

  return (
    <>
    
        {/* Page Contents */}
        <IonPage>

          <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                  <IonBackButton text="" defaultHref='/home'></IonBackButton>
                </IonButtons>
                <IonTitle> Upload Photo </IonTitle>
              </IonToolbar>
            </IonHeader>

          <IonContent fullscreen>
    
            {/* Content */}

            <div id="content-div">
    
                <div id="image-upload-div">
                  
                  <img style={{width: '50px', height: '50px', backgroundColor: 'yellow'}}/>
                  <p>Upload a clear photo of your room</p>
                  <IonButton color="light" onClick={selectPhoto}> Choose Photo </IonButton>
                  
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
                        <IonSelect 
                          placeholder="Favorite Fruit" 
                          interface="action-sheet"
                          value={designStyle}
                          onIonChange={e => setDesignStyle(e.detail.value)}
                        >
                          <IonSelectOption value="apple">Apple</IonSelectOption>
                          <IonSelectOption value="banana">Banana</IonSelectOption>
                          <IonSelectOption value="orange">Orange</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonList>
                  </div>
      
                  <span>You can customize more later</span>

                  <IonButton color="dark" onClick={nextPage} disabled={photo === null}>Next</IonButton>
                </div>
            </div>

        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default UploadPhotoPage;
