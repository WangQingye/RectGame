class Data
{
    //方块宽度
    private static _rectWidth:number = 0;
    public static getRectWidth():number
    {
        if(this._rectWidth == 0)
        {
            this._rectWidth = egret.MainContext.instance.stage.stageWidth/4;
        }
        return this._rectWidth;
    }

    //分数
    public static score:number = 0;

    //总行数
    private static _rectRow:number = 0;
    public static getRectRow():number 
    {
        if(this._rectRow == 0)
        {
            this._rectRow = Math.ceil(egret.MainContext.instance.stage.stageHeight/(this.getRectWidth()*1.3));
        }
        return this._rectRow;
    }

    //高度
    public static getStageHeight():number
    {
        return egret.MainContext.instance.stage.stageHeight;
    }
}