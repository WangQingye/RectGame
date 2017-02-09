class Rect extends egret.Sprite
{
    public constructor()
    {
        super();
        this.touchEnabled = true;
        this.draw();
    }

    private _colors:Array<number> = [0x000000,0xffffff,0xff0000,0x0000ff];
    private _currentColor:number = 1;

    ///创建一个小方块
        //创建一个小方块
    private draw(){        
        this.width = Data.getRectWidth();
        this.height = Data.getRectWidth();
        this.graphics.lineStyle( 1, 0x000000 );
        this.graphics.beginFill( this._colors[this._currentColor] );
        this.graphics.drawRect( 0, 0, Data.getRectWidth(), Data.getRectWidth() * 1.3 );
        this.graphics.endFill();
    }

    //用get和set方法，将 RectType.CLICKABLE和黑色方块绑定起来
    private _type:string = "white"
    public get type():string {
        return this._type;
    }
    public set type( val:string ){
        this._type = val;
        if( this._type == "black" ){
            this._currentColor = 0;
            console.log("black");
        }else{
            this._currentColor = 1;
            console.log("white");
        }
        this.draw();
    }

    //小方块的点击，点击类型为RectType.CLICKABLE 就变成蓝色，反之变成红色
    public onRectClick(){
        if( this._type == "black" ){
            this._currentColor = 3;
        }else{
            this._currentColor = 2;
        }
        this.draw();
    }

}
