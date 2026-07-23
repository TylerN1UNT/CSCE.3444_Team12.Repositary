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

import profile from './images/profile.svg'
import heart from './images/heart.svg'
import clock from './images/clock.svg'
import home from './images/home.svg'

setupIonicReact();

// Sanity check, not hard authentication (actual auth is done on the server side)
function authenticationCallback()
{
    return localStorage.getItem("jwt") !== null // Do we have a JWT from the server
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        {/* Define Routes */}
        <IonRouterOutlet>

          <Route exact path="/home">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback}>
              <HomeTab/>
            </AuthenticatedRoute>
          </Route>

          <Route exact path="/history">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback} >
              <HistoryTab/>
            </AuthenticatedRoute>
          </Route>

          <Route exact path="/favorites">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback}>
              <FavoritesTab/>
            </AuthenticatedRoute>
          </Route>

          <Route exact path="/profile">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback}>
              <ProfileTab/>
            </AuthenticatedRoute>
          </Route>


          <Route exact path="/upload">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback}>
              <UploadPhotoPage/>
            </AuthenticatedRoute>
          </Route>


          <Route exact path="/design-preferences">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback}>
              <DesignPreferencesPage/>
            </AuthenticatedRoute>
          </Route>

          <Route exact path="/generating-design">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback}>
              <GenerateDesignPage/>
            </AuthenticatedRoute>
          </Route>

          <Route exact path="/results">
            <AuthenticatedRoute unauthenticatedRedirectURL="/login" 
                                authenticationCallback={authenticationCallback}>
              <ResultPage/>
            </AuthenticatedRoute>
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/login">
            <LoginPage/>
          </Route>

        </IonRouterOutlet>

        {/* Setup the Bottom navigation tabs */}
        <IonTabBar slot="bottom">

          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="favorites" href="/favorites">
            <IonIcon aria-hidden="true" icon={heart} />
            <IonLabel>Favorites</IonLabel>
          </IonTabButton>

          <IonTabButton tab="history" href="/history">
            <IonIcon aria-hidden="true" icon={clock} />
            <IonLabel>History</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={profile} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
