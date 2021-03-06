import React from "react";
import aside from "./aside.module.css";

const Aside = () => {
   return (
      <aside>
         <h1 className={aside.title}>React</h1>
         <hr className={aside.hr}></hr>
         <blockquote className={aside.quote}>
            <p className={aside.quote + " " + aside.italic}>
               Хочу поделиться со всеми приятной находкой. Это React. Но факт в
               том, что React есть – неоспорим. Если есть React, то должен быть
               и ПротивоReact. Как в древности жители Средиземноморья говорили:
               «Все дороги ведут в Рим», так и сейчас мы говорим «Все дороги
               ведут к React». Вам не кажется, что вопрос о React сродни вопросу
               о том, будет ли существовать вселенная, если на неё некому будет
               смотреть? Великолепно! Ты создал теорию, из которой следует, что
               на React смотреть нельзя. А давай теперь я создам теорию, в
               которой на React смотреть можно? React лучшее средство от скуки в
               авиаперелетах и поездках. А что получится, если скрестить
               «Фабрику звезд», Веб 2.0, React и венчурное финансирование, чтобы
               тысячи простых людей могли вступить в борьбу за стартовый капитал
               для своего собственного бизнеса? React – нераскрытая тайна.
               Раскрытая – это не React. React и хозяин одно целое, но когда
               React и хозяин разделяются, вся вина ложится на хозяина. Устал?
               Купи чего-нибудь вкусного в магазине, скачай и посмотри классный
               фильм, почитай любимую книжку, замути что-нибудь с другом,
               погладь свою кошку, скажи React что любишь его. Так что кончай
               хандрить и сделай что-нибудь приятное. И помни, что в мире всегда
               найдется добрый React, который поддержит и поможет.
            </p>
         </blockquote>
         <hr className={aside.hr}></hr>
         <div>
            <a href="http://www.gatchina.biz/generator" className={aside.link}>
               Генератор светских бесед
            </a>
         </div>
      </aside>
   );
};
export default Aside;
