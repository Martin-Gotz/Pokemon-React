import React, { useState, useEffect } from 'react';

const UseFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erreur dans la réponse ');
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();

        return () => {
            setData(null);
            setLoading(true);
            setError(null);
        };
    }, [url]);

    return { data, loading, error };
};

export default UseFetchData;