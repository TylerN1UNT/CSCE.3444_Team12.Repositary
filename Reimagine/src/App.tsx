import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

import HomeTab from './pages/HomeTab';
import HistoryTab from './pages/HistoryTab';
import FavoritesTab from './pages/FavoritesTab';
import ProfileTab from './pages/ProfileTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import UploadPhotoPage from './pages/UploadPhotoPage';
import DesignPreferencesPage from './pages/DesignPreferencesPage';
import GenerateDesignPage from './pages/GenerateDesignPage';
import ResultPage from './pages/ResultPage';
import LoginPage from './pages/LoginPage';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import TabBar from './components/TabBar';

setupIonicReact();

// Sanity check, not hard authentication (actual auth is done on the server side)
function authenticationCallback()
{
    return localStorage.getItem("jwt") !== null // Do we have a JWT from the server
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      {/* Setup Pages routing */}
      <IonTabs>

        <IonRouterOutlet>
          {/* <Route exact path="/home">
            <HomeTab/>
          </Route> */}
          <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                              authenticationCallback={authenticationCallback} 
                              exact path="/home">
            <HomeTab/>
          </AuthenticatedRoute>

          <Route exact path="/history">
            <HistoryTab />
          </Route>

          <Route path="/favorites">
            <FavoritesTab/>
          </Route>

          <Route path="/profile">
            <ProfileTab/>
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/upload">
            <UploadPhotoPage/>
          </Route>

          <Route exact path="/design-preferences">
            <DesignPreferencesPage/>
          </Route>

          <Route exact path="/generating-design">
              <GenerateDesignPage/>
         
          </Route>

          <Route exact path="/results">
              <ResultPage/>
        
          </Route>

          <Route exact path="/login">
            <LoginPage/>
          </Route>

        </IonRouterOutlet>

        {/* New Route */}

        {/* Setup the Bottom navigation tabs */}
        <IonTabBar slot="bottom">

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

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
