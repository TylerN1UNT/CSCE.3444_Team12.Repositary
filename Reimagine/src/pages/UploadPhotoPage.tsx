import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import "./UploadPhotoPage.css"
import "./ClickPassthrough.css"
import { Camera, MediaResults, MediaTypeSelection } from '@capacitor/camera';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Capacitor } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import Photo from '../Photo';

const UploadPhotoPage: React.FC = () => {
  const [roomType, setRoomType] = useState('');
  const [designStyle, setDesignStyle] = useState('');

  const history = useHistory()
  const [photo, setPhoto] = useState<Photo>();

  async function selectPhoto()
  {
    let selectedPhoto : MediaResults = await Camera.chooseFromGallery({
      mediaType: MediaTypeSelection.Photo,
      allowMultipleSelection: false,
      includeMetadata: true // We need format metadata
    })

    let resultPhoto = selectedPhoto.results[0]
    let photoDataBase64 = ""
    let photoFormat = resultPhoto.metadata!.format

    if (Capacitor.isNativePlatform() && resultPhoto.uri) // On native & uri is available
    {
      // Read the original image from disk
      const file = await Filesystem.readFile({
        path: resultPhoto.uri,
      });
    
      photoDataBase64 = file.data as string;
    } 
    else if(resultPhoto.thumbnail) // On the web & thumbnail is available
    {
      // On the web, thumbnail contains the full image
      photoDataBase64 = resultPhoto.thumbnail;
    }

    let result = new Photo(photoDataBase64, photoFormat)
    setPhoto(result)
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

                  <IonButton color="dark" onClick={nextPage} disabled={photo === undefined}>Next</IonButton>
                </div>
            </div>

        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default UploadPhotoPage;
