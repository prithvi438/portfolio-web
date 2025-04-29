import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';

const useVisitStats = () => {
  const [stats, setStats] = useState({ totalVisitors: 0, totalVisits: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const docRef = doc(db, 'visits', 'visits');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setStats({
            totalVisitors: data.totalVisitors || 0,
            totalVisits: data.totalVisits || 0
          });
        } else {
          setStats({ totalVisitors: 0, totalVisits: 0 });
        }
      } catch (err) {
        console.error('Error fetching visit stats:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};

export default useVisitStats;