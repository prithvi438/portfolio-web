// src/hooks/useTrackVisits.js

import { useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';

const useTrackVisits = () => {
  useEffect(() => {
    const trackVisits = async () => {
      const docRef = doc(db, 'visits', 'visits');
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          totalVisitors: 0,
          totalVisits: 0
        });
      }

      const visited = localStorage.getItem('visited');
      const sessionVisited = sessionStorage.getItem('visit');

      if (!visited) {
        await updateDoc(docRef, {
          totalVisitors: increment(1)
        });
        localStorage.setItem('visited', 'true');
      }

      // Track session visits
      if (!sessionVisited) {
        await updateDoc(docRef, {
          totalVisits: increment(1)
        });
        sessionStorage.setItem('visit', 'true');
      }
    };

    trackVisits();
  }, []);
};

export default useTrackVisits;