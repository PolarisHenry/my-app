class DomUtils {
    /* 
    设置input值 如果分发无用的话
    */
    async setNativeValue(qs, value, time = 1) {
        if (typeof qs === 'string') {
            qs = document.querySelector(qs);
        }
        const element = qs;
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(element, value)
        } else {
            valueSetter.call(element, value)
        }
        element.dispatchEvent(new Event('input', { bubbles: true }))
        await new Promise(resolve => setTimeout(resolve, 100 * time));

    };


    /* 
    事件分发
    */
    async eventDispatch({ dom, event = 'input', value = null, time = 1 }) {

        if (typeof dom === 'string') {
            dom = document.querySelector(dom);
        }
        if (dom) {
            if (event === 'input') {
                dom.value = value;
            }
            dom.dispatchEvent(new Event(event));
            await new Promise(resolve => setTimeout(resolve, 50 * time));

        }

    };


    /* 
    点击dom，可以传css路径，也可以传完整的dom元素
    */
    async clickDom(dom, time = 1) {

        if (typeof dom === 'string') {
            dom = document.querySelector(dom);

        }
        if (dom) {
            dom.click();
            await new Promise(resolve => setTimeout(resolve, 100 * time));
        }

    };


    /* 
    判断dom是否有某个事件
    */
    addCheckEventListener() {
        // 创建一个全局对象来存储事件监听器
        const eventListeners = new WeakMap();

        // 保存原始的 addEventListener 方法
        const originalAddEventListener = EventTarget.prototype.addEventListener;

        // 覆盖 addEventListener 方法
        EventTarget.prototype.addEventListener = function (type, listener, options) {
            if (!eventListeners.has(this)) {
                eventListeners.set(this, {});
            }
            const listeners = eventListeners.get(this);
            if (!listeners[type]) {
                listeners[type] = [];
            }
            listeners[type].push(listener);
            originalAddEventListener.call(this, type, listener, options);
        };

        // 检查某个元素是否有指定的事件监听器 eg: dom.hasEventListener('click')
        EventTarget.prototype.hasEventListener = function (type) {
            if (!eventListeners.has(this)) {
                return false;
            }
            const listeners = eventListeners.get(this);
            return listeners[type] && listeners[type].length > 0;
        };
    }

    testClassMethod() {
        console.log('恭喜你创建成功！！！！！！！！');

    }
}

/* const DomUtilsIntance = new DomUtils()
DomUtilsIntance.testClassMethod()
await DomUtilsIntance.clickDom('div');
DomUtilsIntance.addCheckEventListener() */

// export default DomUtils
module.exports = {
    DomUtils
}