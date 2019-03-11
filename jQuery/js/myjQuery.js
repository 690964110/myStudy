(function () {
    function jQuery(selector) {
        return new jQuery.prototype.init(selector);
    }

    jQuery.prototype.init = function (selector) {
        this.length = 0;
        // null undefined dom
        if (selector == null) {
            return this;//返回一个空对象
        }

        if (typeof selector == "string" && selector.indexOf('.') != -1) {
            var dom = document.getElementsByClassName(selector.slice(1));
        } else if (typeof selector == "string" && selector.indexOf('#') != -1) {
            var dom = document.getElementById(selector);
        }
        //前面的if没走，是dom对象
        if (selector instanceof Element || dom.length == undefined) {
            this[0] = dom || selector;
            this.length++;
        } else {
            var len = dom.length;
            for (var i = 0; i < len; i++) {
                this[i] = dom[i];
                this.length++;
            }
        }
    }

    jQuery.prototype.css = function (config) {
        var len = this.length;
        for (var i = 0; i < len; i++) {
            for (var attr in config) {
                this[i].style[attr] = config[attr];
            }
        }
        return this;
    }

    jQuery.prototype.get = function (num) {
        // [].slice(this, 0)将类数组转化成数组
        return num != null ? (num >= 0 ? this[num] : this[num + this.length]) : [].slice.call(this, 0);
    }

    jQuery.prototype.eq = function (num) {
        var dom = num != null ? (num >= 0 ? this[num] : this[num + this.length]) : null;
        return $(dom);
    }

    jQuery.prototype.myOn = function (type, handle) {
        for (var i = 0; i < this.length; i++) {
            if (!this[i].cacheEvent) {
                this[i].cacheEvent = {};
            }
            if (!this[i].cacheEvent[type]) {
                this[i].cacheEvent[type] = [handle];
            } else {
                this[i].cacheEvent[type].push(handle);
            }
        }
    }
    jQuery.prototype.MyTrigger = function (type) {
        var params = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
        var self = this;
        for (var i = 0; i < this.length; i++) {
            if (this[i].cacheEvent[type]) {
                this[i].cacheEvent[type].forEach(function (ele, index) {
                    ele.apply(self, params);
                })
            }
        }
    }


    //例子 $('.demo').myQueue('chain',function(){})
    jQuery.prototype.myQueue = function () {
        var queueObj = this
            , queueName = arguments[0] || 'fx'
            , addFunc = arguments[1] || null
            , len = arguments.length;

        if (len == 1) {
            return queueObj[0][queueName];
        }
        queueObj[0][queueName] == undefined ? queueObj[0][queueName] = [addFunc] : queueObj[0][queueName].push(addFunc);
        return this;
    }



    jQuery.prototype.myDequeue = function () {
        var self = this
            , queueName = arguments[0] || 'fx'
            , queueArr = this.myQueue(queueName)
            , currFunc = queueArr.shift();
        if (currFunc == undefined) {
            return;
        }
        var next = function () {
            self.myDequeue(queueName);
        }
        currFunc(next);
        return this;
    }

    jQuery.prototype.myDelay = function (duration) {
        var queueArr = this[0]['fx'];
        queueArr.push(function (next) {
            setTimeout(function () {
                next();
            }, duration)
        })
        return this;
    }


    jQuery.prototype.myAnimate = function (json, callback) {
        var len = this.length;
        var self = this;
        //最后添加到队列里的内容函数
        var baseFunc = function (next) {
            var times = 0;
            for (var i = 0; i < len; i++) {
                startMove(self[i], json, function () {
                    times++;
                    if (times == len) {
                        callback && callback();
                        next();
                    }
                })
            }
        }
        this.myQueue('fx', baseFunc);
        if (this.myQueue('fx').length == 1) {
            this.myDequeue('fx');
        }
        function getStyle(obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return window.getComputedStyle(obj, false)[attr];
            }
        }
        function startMove(obj, json, callback) {
            clearInterval(obj.timer);
            var isSpeed
                , iCur
                , name;
            obj.timer = setInterval(function () {
                var bStop = true;
                for (var attr in json) {
                    if (attr == 'opacity') {
                        name = attr;
                        iCur = parseFloat(getStyle(obj, attr)) * 100;
                    } else {
                        iCur = parseInt(getStyle(obj, attr));
                    }
                    isSpeed = (json[attr] - iCur) / 7;
                    if (isSpeed > 0) {
                        isSpeed = Math.ceil(isSpeed);
                    } else {
                        isSpeed = Math.floor(isSpeed);
                    }
                    if (attr === 'opacity') {
                        obj.style.opacity = (iCur + isSpeed) / 100;
                    } else {
                        obj.style[attr] = iCur + isSpeed + 'px';
                    }
                    if (json[attr] - iCur !== 0) {
                        bStop = false;
                    }
                }
                if (bStop) {
                    clearInterval(obj.timer);
                    callback();
                }
            }, 30)
        }
        return this;

    }

    jQuery.myCallbacks = function(){
        //once memory 'once memory' 
        //存储参数
        var options = arguments[0] || '';
        //通过add填加的方法
        var list = [];
        //记录是否被fire过
        var fired = false;
        //建立游标索引
        var fireIndex = 0;
        //实际参数列表
        var args = [];

        var fire = function(){
            for(; fireIndex < list.length; fireIndex++){
                list[fireIndex].apply(window, args);
            }
            if(options.indexOf('once') != -1){
                list = [];
                fireIndex = 0;
            }
        }
        return {
            add: function(func){
                list.push(func);
                if(options.indexOf('memory') != -1 && fired){
                    fire();
                }
                return this; 
            },
            fire: function(){
                fireIndex = 0;
                args = arguments;
                fired = true;
                fire();
            }
        }
    }

    jQuery.myDeferred = function(){
        //callback
        //3个callback
        //done reslove fail reject progress notify
        var arr = [
            [
                jQuery.myCallbacks('once memory'), 'done','resolve'
            ],[
                jQuery.myCallbacks('once memory'), 'fail', 'reject'
            ],[
                jQuery.myCallbacks('memory'), 'progress', 'notify'
            ]
        ]
        var pendding = true;
        var deferred = {};
        for(var i = 0; i< arr.length; i++){
            //注册
            deferred[arr[i][1]] = (function(index){
                return function(func){
                    arr[index][0 ].add(func)
                }
            }(i))

            deferred[ arr[i][2]] = (function(index){
                return function(){
                    var args = arguments;
                    if(pendding){
                        arr[index][0].fire.apply(window, args);
                        arr[index][2] == 'resolve' || arr[index][2] == 'reject' ? pendding == false: pendding = true;
                    }
                }
            }(i))
        }
    }



    jQuery.prototype.init.prototype = jQuery.prototype;

    window.$ = window.jQuery = jQuery;
}())