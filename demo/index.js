import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import LazyImage from '../src/lazy_image.js';
import style from './style.scss';

let catUrl = "http://thecatapi.com/api/images/get?format=src&type=gif";
let placeholder = "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150";

render( <AppContainer>
          <div className={style.trendyBG}>
            <ul className={style.readingsList}>
              { [1,2,3,4].map(function(r,index){
                  return <LazyImage key={index} src={`${catUrl}&breaker=${index}`} placeholder={placeholder}/>
                })
              }
            </ul>
          </div>
      </AppContainer>,
       document.querySelector("#app")
     );
