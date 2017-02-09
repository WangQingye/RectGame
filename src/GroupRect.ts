class GroupRect extends egret.Sprite
{
    public constructor()
    {
        super();
        this.createRects();
    }

    //创建一排小方块组，以Rect为基础类型
    public _rects:Array<Rect>;
    private createRects()
    {
        this._rects = [];
        //创建一排
        for(var i=0 ; i < 4 ; i++)
        {
            var rect:Rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width*i;
            this.addChild(rect);

            //性能待改（是否可以不绑定这么多事件？）
            rect.addEventListener( egret.TouchEvent.TOUCH_TAP,this.onClickRect,this );
        }    
    }

    //点击矩形方块事件
    public _currentRow:number = 0;
    private onClickRect(evt:egret.TouchEvent)
    {
        evt.target.onRectClick();
        if(evt.target.type == "white" || this._currentRow != (Data.getRectRow() - 2))
        {
            this.dispatchEventWith("gameOver");
        }else{
            this.dispatchEventWith("clickRight");
        }        
    }

    //一排四个，随机位置产生黑色方块
    private _currentBalckRectIndex:number = 0
    public createBlackRect()
    {
        this.init();
        this._currentBalckRectIndex = ~~(Math.random() * 4);
        this._rects[this._currentBalckRectIndex].type = "black";
    }

    //初始化所有白色方块
    public init()
    {
        for(var i=0; i<4 ; i++)
        {
            this._rects[i].type = "white";
        }
    }

    //点击正确后向下移动
    public move()
    {
        this._currentRow++;
        if(this._currentRow == Data.getRectRow())
        {
            this._currentRow = 0;
            this.createBlackRect();
        }
        this.y = this._currentRow * Data.getRectWidth() * 1.3;
    }
}