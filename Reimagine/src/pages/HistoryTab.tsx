import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg, IonSpinner } from '@ionic/react';
import React, { useEffect, useState } from 'react';

interface HistoryEntry {
  id: string;
  original: string;
  remodeled: string;
  timestamp: string;
}

enum HistoryState {
  Idle,
  Loading,
  Loaded,
  Error,    
}

const HistoryTab: React.FC = () => {
  const [state, setState] = useState<HistoryState>(HistoryState.Idle);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      setState(HistoryState.Loading);

      try {
        // Simulate backend fetch
        await new Promise((res) => setTimeout(res, 1500));

        // Replace with real API results later
        const mockData: HistoryEntry[] = [
          {
            id: '1',
            original: '/assets/mock-room-1.jpg',
            remodeled: '/assets/mock-room-1-remodeled.jpg',
            timestamp: new Date().toISOString(),
          },
          {
            id: '2',
            original: '/assets/mock-room-2.jpg',
            remodeled: '/assets/mock-room-2-remodeled.jpg',
            timestamp: new Date().toISOString(),
          },
        ];

        setHistory(mockData);
        setState(HistoryState.Loaded);
      } catch (err) {
        setState(HistoryState.Error);
      }
    };

    loadHistory();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">History</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ padding: 16 }}>
          {state === HistoryState.Loading && (
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <IonSpinner />
              <p>Loading your remodeled rooms…</p>
            </div>
          )}

          {state === HistoryState.Error && (
            <p style={{ color: 'red' }}>Unable to load history.</p>
          )}

          {state === HistoryState.Loaded && (
            <IonList>
              {history.map((entry) => (
                <IonItem key={entry.id}>
                  <IonLabel>
                    <h2>Remodel #{entry.id}</h2>
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

export default HistoryTab;
