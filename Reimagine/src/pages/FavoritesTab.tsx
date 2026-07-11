import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonSpinner,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';

interface FavoriteEntry {
  id: string;
  original: string;
  remodeled: string;
  timestamp: string;
}

enum FavoritesState {
  Idle,
  Loading,
  Loaded,
  Error,
}

const FavoritesTab: React.FC = () => {
  const [state, setState] = useState<FavoritesState>(FavoritesState.Idle);
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      setState(FavoritesState.Loading);

      try {
        // Simulate backend fetch
        await new Promise((res) => setTimeout(res, 1500));

        // Replace with real API results later
        const mockData: FavoriteEntry[] = [
          {
            id: 'fav1',
            original: '/assets/mock-room-1.jpg',
            remodeled: '/assets/mock-room-1-remodeled.jpg',
            timestamp: new Date().toISOString(),
          },
        ];

        setFavorites(mockData);
        setState(FavoritesState.Loaded);
      } catch (err) {
        setState(FavoritesState.Error);
      }
    };

    loadFavorites();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ padding: 16 }}>
          {state === FavoritesState.Loading && (
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <IonSpinner />
              <p>Loading your favorite remodels…</p>
            </div>
          )}

          {state === FavoritesState.Error && (
            <p style={{ color: 'red' }}>Unable to load favorites.</p>
          )}

          {state === FavoritesState.Loaded && (
            <IonList>
              {favorites.map((entry) => (
                <IonItem key={entry.id}>
                  <IonLabel>
                    <h2>Favorite #{entry.id}</h2>
                    <p>{new Date(entry.timestamp).toLocaleString()}</p>

                    <div style={{ marginTop: 12 }}>
                      <strong>Original</strong>
                      <IonImg src={entry.original} />
                    </div>

                    <div style={{ marginTop: 12 }}>
                      <strong>Remodeled</strong>
                      <IonImg src={entry.remodeled} />
                    </div>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FavoritesTab;