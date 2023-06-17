import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import EditInput from "./logic/EditInput";
import reportWebVitals from './reportWebVitals';

import Head from './logic/Head';
import TagLine from './logic/TagLine';
import Button from './logic/Button';
import Professions from './logic/Professions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const listProf = [
    {
        prof: "Web-разработчиков",
        discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы пользователям было быстро и удобно.`
    },
    {
        prof: "Гейм-девелоперов",
        discr: `Создают видеоигры. Погружают всех нас в новые миры.`
    },
    {
        prof: "AI/ML-cпециалистов",
        discr: `Используют в деле искусственный интеллект и машинное обучение. Фактами и прогнозами делает бизнесу хорошо.`
    },
    {
        prof: "Аналитиков данных",
        discr: `С помощью чисел решают, куда двигаться компаниям. Помогают бизнесу получать еще больше денег.`
    },
    {
        prof: "Мобильных разработчиков",
        discr: `Создают мобильные приложения, которые найдут тебя везде. Умещают на маленьких экранах максимальный функционал.`
    },
    {
        prof: "Специалистов по инфо-безопасности",
        discr: `Защищают личные данные от черных капюшонов. Расследуют информационные преступления.`
    },
    {
        prof: "Администраторов баз данных",
        discr: `Администратор БД держится в тени и редко попадает в число самых востребованных. При этом SQL — язык запросов к серверу баз данных, который администратор БД должен знать в совершенстве, — стабильно в топе необходимых работодателям навыков.`
    },
    {
        prof: "DevOps",
        discr: `DevOps — разработчик, глубоко погружённый в инфраструктуру и процессы проекта. Лично Рома одобряет👍`
    },
]

//Мини лаба
const restrict = {
    "Q": "",
    "q": "",
    "X": "",
    "x": "",
    "W": "",
    "w": "",
    "Ё": "Е",
    "ё": "е",
}

function miniLab() {
  return (
    <div className="App">
      <header className="App-header">
        <EditInput restrict={restrict} />
      </header>
    </div>
  );
}


//Main code
function App() {
    //return miniLab();

    return(
        <>
            <Head listImg={Head.listImg} />
            <TagLine />
            <Button val={"Хочу учится"}/>
            <Professions title="Обучаем на:" list={listProf} />
        </>
    );
}
