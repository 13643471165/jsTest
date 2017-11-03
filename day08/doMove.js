/*
    obj:执行变化的目标元素
    attr:要改变的属性值
    target：目标值
    speed:速度值
    endFn:回调函数
*/
function doMove(obj,attr,target,speed,endFn){
    clearInterval(obj.timer);
    var startValue = parseInt(getStyle(obj,attr));
    var endValue = parseInt(target);
    var _speed = parseInt(speed);
    var num = startValue;

    if(endValue - startValue < 0){
        _speed *= -1;
    }

    obj.timer = setInterval(function(){
        console.log(num);
        num += _speed;
        if( num >= endValue && _speed >= 0 || num <= endValue && _speed < 0){
            num = endValue;
        }
        obj.style[attr] = num + 'px';

        if( num == endValue){
            clearInterval(obj.timer);
            endFn && endFn();
        }
    },30)
}

function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:window.getComputedStyle(obj)[attr];
}