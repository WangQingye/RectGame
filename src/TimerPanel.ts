class TimerPanel extends egret.Sprite
{
    public constructor()
    {
        super();
        this.draw();
        this.createTimer();
    }

    //显示文本
    private txt:egret.TextField;
    private draw()
    {
    this.txt = new egret.TextField();
    this.txt.width = egret.MainContext.instance.stage.stageWidth;
    this.txt.y = 100;
    this.txt.size = 40;
    this.txt.textColor = 0xff0000;
    this.txt.textAlign = egret.HorizontalAlign.CENTER;
    this.txt.text ="剩余时间30秒";
    this.addChild(this.txt);
    }

    //计时器
    private _timer:egret.Timer;
    private _num = 30;
    private createTimer()
    {
        //计时器
        this._timer = new egret.Timer(1000,this._num);
        this._timer.addEventListener( egret.TimerEvent.TIMER, this.onTimer, this );
        this._timer.addEventListener( egret.TimerEvent.TIMER_COMPLETE, this.onTimeOver, this );
    }
    //设置初始时间
    private _time = 30;
    //TImer事件每秒触发一次
    private onTimer()
    {
        this._time -= 1;
        this.txt.text = "剩余时间" + this._time + "秒" ;
    }
    //时间结束
    private onTimeOver()
    {
        this.txt.text = "00:00";
        this.dispatchEventWith( "gameOver" );
    }

    //重新开始
    public start()
    {
        this.txt.text = "剩余时间30秒";
        this._time = 30;
        this._timer.reset();
        this._timer.start();
    }
    //点击错误时手动停止
    public stop()
    {
        this._timer.stop();
        this.txt.text = "";
    }

}