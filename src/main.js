import './banner.js';
import './tabs.js';

import './styles/index.css';
import './styles/index.less';

import './assets/fonts/iconfont.css';

import './app.vue'

import imgUrl from './assets/1.gif';
let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl2 from './assets/logo_small.png';
let img2 = document.createElement('img');
img2.src = imgUrl2;
document.body.appendChild(img2);

class App {
  static a = 123;
}
