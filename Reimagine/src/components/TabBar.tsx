import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { ellipse, square, triangle } from "ionicons/icons"

const TabBar: React.FC = () => 
{
    return <IonTabBar slot="bottom">
    
              <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true" icon={triangle} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
    
              <IonTabButton tab="favorites" href="/favorites">
                <IonIcon aria-hidden="true" icon={ellipse} />
                <IonLabel>Favorites</IonLabel>
              </IonTabButton>
    
              <IonTabButton tab="history" href="/history">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>History</IonLabel>
              </IonTabButton>
    
              <IonTabButton tab="profile" href="/profile">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
}

export default TabBar