import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const LoginPage: React.FC = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginURL = "http://localhost:8000/login"

  const history = useHistory();

  function authenticate()
  {
    fetch(loginURL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
      {
          username,
          password,
      })
    }).then((value: Response) => 
    {
      value.json().then((jwt : string) => 
      {
          localStorage.setItem("jwt", jwt);
          history.push("/home");
      })
    })
  }

  return (
    <>

    {/* Page Contents */}
    <IonPage id="home-content">
      <IonContent fullscreen>

        {/* Content */}
        <div style={{display: 'flex' , flexDirection : 'column', alignItems: 'center', width: '100vw', height: '100vh'}}>

            <img src="/Reimagine.png" alt="Reimagine" style={{width : '314px', height: '314px', marginTop: '10px'}}/>


            <div style={{display : 'flex', flexDirection : 'column', width : '30%'}}>

              <IonList lines="full">
                <IonItem>
                  <IonInput label="Username" labelPlacement="floating" inputMode="text" name="username" onIonChange={(event) => { setUsername(event.detail.value ?? "")}}></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput label="Password" labelPlacement="floating" inputMode="text" name="password" onIonChange={(event) => { setPassword(event.detail.value ?? "")}}></IonInput>
                </IonItem>

              </IonList>

              <IonButton color="dark" onClick={authenticate}> Log In </IonButton>


            </div>
        </div>
        
      </IonContent>
    </IonPage>
    
    </>
  );
};

export default LoginPage;