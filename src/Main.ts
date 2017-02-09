class Main extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();
        //创建一个界面建立后才触发事件的事件，这样时间衔接的比较好，防止界面没有出来就开始计数
        this.addEventListener( egret.Event.ADDED_TO_STAGE, this.addStage, this );
    }
    private loadingView:LoadingUI;
    private addStage()
    {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        
    }
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup("preload");
    }
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
    if (event.groupName == "preload") {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        this.stage.removeChild(this.loadingView);        
        var game = new Game(this);
    }
    }
}