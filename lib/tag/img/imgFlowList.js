'use strict';
//default config

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Default_Flow_Delay = 10; //流水线启动延迟10毫秒
//util

/**
 * 图片流水线，在动态渲染时，所有的图片都会添加到流水线上，然后逐一渲染
 * @type {Array}
 */
var flowList = [];
var isStop = true,
    //处理标记，表示当前流水线是否处于处理中
timerId = void 0; //时间计时器对象

/**
 * (接口)注册一个加载原图回调，向流水线增加一个处理节点
 * @param {string} src 原始图片路径
 * @param {function} callBack 回调函数 (src)=>{}
 */
var registerFLow = function registerFLow(src, callBack) {
    //向流水线队尾部增加对象
    flowList.push({ src: src, callBack: callBack });
    isStop && function () {
        timerId && clearTimeout(timerId);
        timerId = setTimeout(loadOneStream(), Default_Flow_Delay);
    }();
},


/**
 * 运行流水线
 */
loadOneStream = function loadOneStream() {
    isStop = false;
    var item = flowList.pop(); //处理队列头部对象
    item ? loadImg(item) : isStop = true;
},

/**
 * 加载单个图片
 * @param item
 */
loadImg = function loadImg(item) {
    var img = new Image();
    img.src = item.src;
    img.onerror = loadOneStream;
    if (img.complete) {
        item.callBack(item.src); //加载完成，回调
        loadOneStream(); //执行流水线下一项工作
    } else {
        img.onload = function () {
            item.callBack(item.src); //加载完成，回调
            loadOneStream(); //执行流水线下一项工作
        };
    }
};
exports.default = registerFLow;