import _ from 'lodash';
import './style.css';
import Icon from './Icon.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    //lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    //将图片添加到我们现有的div
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    return element;

}
document.body.appendChild(component());