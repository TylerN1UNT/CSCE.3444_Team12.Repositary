import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonSpinner, } 
from '@ionic/react';
import React, { useState } from 'react';

enum RemodelState {
  Idle,
  Uploading,
  Processing,
  Completed,
  Error,
}

const ProfileTab: React.FC = () => {
  const [state, setState, setRemodelState] = useState<RemodelState>(RemodelState.Idle);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [remodeledImage, setRemodeledImage] = useState<string | null>(null);

  const handleImageUpload = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    const imgUrl = URL.createObjectURL(file);
    setOriginalImage(imgUrl);
    setState(RemodelState.Uploading);

    try{
      //Simulate uplaod
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState(RemodelState.Processing);

      //Simulate AI remodel
      await new Promise((resolve) => setTimeout(resolve, 2000));

      //Replace with remodeled image URL from backedn
      setRemodeledImage(imgUrl); // Placeholder for remodeled image
      setState(RemodelState.Completed);
    } catch (err) {
      setState(RemodelState.Error);
    }
  };
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ padding: 16 }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginBottom: 16 }}
          />

          {state === RemodelState.Uploading && (
            <div>
              <IonSpinner /> Uploading image...
            </div>
          )}

          {state === RemodelState.Processing && (
            <div>
              <IonSpinner /> Remodeling your room...
            </div>
          )}

          {state === RemodelState.Error && (
            <div style={{ color: 'red' }}>
              Something went wrong. Try again.
            </div>
          )}

          {originalImage && (
            <div>
              <h3>Original Image:</h3>
              <IonImg src={originalImage} />
            </div>
          )}

          {remodeledImage && (
            <div>
              <h3>Remodeled Image:</h3>
              <IonImg src={remodeledImage} />
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileTab;