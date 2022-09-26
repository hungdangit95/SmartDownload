import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
  // function () {
  //   var elements = document.getElementsByClassName("item");
  //   const shows = document.getElementsByClassName('open')
  //   var collapse = function (e) {
  //     e.stopPropagation();
  //     if (shows.length > 0) {
  //       for (var i = 0; i < shows.length; i++) {
  //         shows[i].classList = 'item';
  //       }
  //     }
  //     if (!e.target.matches('.item')) {
  //       var parent = e.target.parentElement;
  //       if (!parent.className.includes('item')) {
  //         return;
  //       } else if (!parent.className.includes('open')) {
  //         parent.classList.toggle('open');
  //       } else {
  //         parent.className = 'item';
  //       }
  //     } else {
  //       e.target.classList.toggle('open');
  //     }

  //   };

  //   for (var i = 0; i < elements.length; i++) {
  //     elements[i].addEventListener('click', collapse, true);
  //   }

  //   document.querySelector(".scroll-btn").addEventListener("click", () => {
  //     document.querySelector("html").style.scrollBehavior = "smooth";
  //     setTimeout(() => {
  //       document.querySelector("html").style.scrollBehavior = "unset";
  //     }, 1000);
  //   });
  // }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
