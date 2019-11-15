import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (opts.switcher) {
      setLoading(true);
      fetch(url)
        .then(res => res.json())
          .then(res => setData(res))
          .catch(err => setError(err))
          .finally(() => {
            setLoading(false); 
            opts.setSwitcher(false)
          })
    }
  }, [url, opts.switcher]);

  return [{data, loading, error}];
};