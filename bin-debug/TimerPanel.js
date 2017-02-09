var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        _super.call(this);
        this._num = 30;
        //设置初始时间
        this._time = 30;
        this.draw();
        this.createTimer();
    }
    var d = __define,c=TimerPanel,p=c.prototype;
    p.draw = function () {
        this.txt = new egret.TextField();
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.y = 100;
        this.txt.size = 40;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = "剩余时间30秒";
        this.addChild(this.txt);
    };
    p.createTimer = function () {
        //计时器
        this._timer = new egret.Timer(1000, this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimeOver, this);
    };
    //TImer事件每秒触发一次
    p.onTimer = function () {
        this._time -= 1;
        this.txt.text = "剩余时间" + this._time + "秒";
    };
    //时间结束
    p.onTimeOver = function () {
        this.txt.text = "00:00";
        this.dispatchEventWith("gameOver");
    };
    //重新开始
    p.start = function () {
        this.txt.text = "剩余时间30秒";
        this._time = 30;
        this._timer.reset();
        this._timer.start();
    };
    //点击错误时手动停止
    p.stop = function () {
        this._timer.stop();
        this.txt.text = "";
    };
    return TimerPanel;
}(egret.Sprite));
egret.registerClass(TimerPanel,'TimerPanel');
//# sourceMappingURL=TimerPanel.js.map