import { MediaResults } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import IdentifiableButton from '../components/IdentifiableButton';
import Photo from '../Photo';
import fluid from '../images/fluid.svg'
import castle from '../images/castle.svg'
import crown from '../images/crown.svg'
import pillar from '../images/pillar.svg'
import sword from '../images/medieval-sword.svg'
import modern from '../images/modern-home.svg'

interface PrevState // State from the previous page
{
    photo: Photo // Base64 encoded
}

const DesignPreferencesPage: React.FC = () => {
  
  const [additionalPreferences, setAdditionalPreferences] = useState('');

  const location = useLocation()
  const history = useHistory()

  // Contains the image passed from the UploadPhotoPage
  const prevState: PrevState = location.state as PrevState
  const photo = prevState.photo;


  // Design preferences states
  const [style, setStyle] = useState("")
  const [color, setColor] = useState("")  

  function nextPage()
  {
      history.push("/generating-design", { style, color, photo })
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

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IdentifiableButton fill="clear" id="victorian" callback={(id)=>{setStyle(id)}}>
                  <img src={crown} style={{height: '50px', width : '50px', background : 'rgb(235, 235, 235)', borderWidth: '1px', borderStyle: "solid", borderColor: "silver", boxShadow: "0 0 4px 0 silver", padding: "5px"}}/>
                </IdentifiableButton>
                <span> Victorian </span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IdentifiableButton fill="clear" id="modern" callback={(id)=>{setStyle(id)}}>
                  <img src={modern} style={{height: '50px', width : '50px', background : 'rgb(235, 235, 235)', borderWidth: '1px', borderStyle: "solid", borderColor: "silver", boxShadow: "0 0 4px 0 silver", padding: "5px"}}/>
                </IdentifiableButton>
                <span> Modern </span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IdentifiableButton fill="clear" id="brutalist" callback={(id)=>{setStyle(id)}}>
                  <img src={sword} style={{height: '50px', width : '50px', background : 'rgb(235, 235, 235)', borderWidth: '1px', borderStyle: "solid", borderColor: "silver", boxShadow: "0 0 4px 0 silver", padding: "5px"}}/>
                </IdentifiableButton>
                <span> Brutalist </span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IdentifiableButton fill="clear" id="baroque" callback={(id)=>{setStyle(id)}}>
                  <img src={pillar} style={{height: '50px', width : '50px', background : 'rgb(235, 235, 235)', borderWidth: '1px', borderStyle: "solid", borderColor: "silver", boxShadow: "0 0 4px 0 silver", padding: "5px"}}/>
                </IdentifiableButton>
                <span> Baroque </span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IdentifiableButton fill="clear" id="gothic" callback={(id)=>{setStyle(id)}}>
                  <img src={castle} style={{height: '50px', width : '50px', background : 'rgb(235, 235, 235)', borderWidth: '1px', borderStyle: "solid", borderColor: "silver", boxShadow: "0 0 4px 0 silver", padding: "5px"}}/>
                </IdentifiableButton>
                <span> Gothic </span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IdentifiableButton fill="clear" id="Rococo" callback={(id)=>{setStyle(id)}}>
                  <img src={fluid} style={{height: '50px', width : '50px', background : 'rgb(235, 235, 235)', borderWidth: '1px', borderStyle: "solid", borderColor: "silver", boxShadow: "0 0 4px 0 silver", padding: "5px"}}/>
                </IdentifiableButton>
                <span> Rococo </span>
              </div>
              
          </div>

          <span> Color mood (optional) </span>
            
            <div style={{display: 'flex', flexDirection : 'row', width : '100%', justifyContent : 'start'}}>
              
              <IdentifiableButton fill="clear" id="silver" callback={(id)=>{setColor(id)}}>
                <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'silver', marginRight: '20px'}}/>
              </IdentifiableButton>

              <IdentifiableButton fill="clear" id="white" callback={(id)=>{setColor(id)}}>
                <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'white', marginRight: '20px'}}/>
              </IdentifiableButton>
                
              <IdentifiableButton fill="clear" id="lightgrey" callback={(id)=>{setColor(id)}}>
                <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'lightgrey', marginRight: '20px'}}/>
              </IdentifiableButton>

              <IdentifiableButton fill="clear" id="darkgrey" callback={(id)=>{setColor(id)}}>
                <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'darkgrey', marginRight: '20px'}}/>
              </IdentifiableButton>

              <IdentifiableButton fill="clear" id="gray" callback={(id)=>{setColor(id)}}>
                <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'gray', marginRight: '20px'}}/>
              </IdentifiableButton>

              <IdentifiableButton fill="clear" id="black" callback={(id)=>{setColor(id)}}>
                <div style={{height: '50px', width : '50px', borderRadius: '25px', borderStyle : 'solid', borderWidth: '1px', background : 'black', marginRight: '20px'}}/>
              </IdentifiableButton>
            </div>

          <div style={{display : 'inline'}}>
                <b> Additional Preferences </b>
                <span>(optional)</span>
          </div>

          <IonList>
            <IonItem>
              <IonSelect 
                placeholder="Furniture, materials, lighting..." 
                interface="action-sheet"
                value={additionalPreferences}
                onIonChange={e => setAdditionalPreferences(e.detail.value)}
              >
                <IonSelectOption value="apple">Apple</IonSelectOption>
                <IonSelectOption value="banana">Banana</IonSelectOption>
                <IonSelectOption value="orange">Orange</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          <IonButton color="dark" expand='full' onClick={nextPage} disabled={style === "" || color === ""}> Generate Design </IonButton>
          
        </div>
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default DesignPreferencesPage;