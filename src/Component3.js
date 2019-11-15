import React, {useState, useEffect} from 'react';
import useJsonFetch from './useJsonFetch';
import { store } from 'react-notifications-component';
import Loader from 'react-loader-spinner';

const Component1 = () => {
  const [switcher, setSwitcher] = useState(false);
  const [url, setUrl] = useState('');
  
  const handleClick = e => {
    setSwitcher(true);
    setUrl(`${process.env.REACT_APP_BASE_URL}${e.target.name}`);
  };

  const [{data, loading, error}] = useJsonFetch(url, {switcher, setSwitcher});

  //обработка успешных запросов (data)
  useEffect(() => {
    if(data) {
      const type = data.status === 'ok' ? "success" : "danger";

      store.addNotification({
        title: "Компонент 3",
        message: data.status,
        type,
        insert: "top",
        container: "bottom-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      });
    }
  }, [data]);

  //обработка запросов с ошибкой (error)
  useEffect(() => {
    if(error) {
      store.addNotification({
        title: "Компонент 3",
        message: error,
        type: "danger",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      });
    }
  }, [error]);

  return (
    <div>
      <h2>Компонент №3</h2>
      <button name="data" onClick={handleClick}>Отправить успешный запрос</button>
      <button name="error" onClick={handleClick}>Отправить неудачный запрос</button>
      <button name="loading" onClick={handleClick}>Отправить удачный медленный запрос</button>
      {
        //обработка состояния загрузки
        loading 
        &&       
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        />
      }
    </div>
  );
};

export default Component1;