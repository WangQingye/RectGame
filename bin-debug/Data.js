var Data = (function () {
    function Data() {
    }
    var d = __define,c=Data,p=c.prototype;
    Data.getRectWidth = function () {
        if (this._rectWidth == 0) {
            this._rectWidth = egret.MainContext.instance.stage.stageWidth / 4;
        }
        return this._rectWidth;
    };
    Data.getRectRow = function () {
        if (this._rectRow == 0) {
            this._rectRow = Math.ceil(egret.MainContext.instance.stage.stageHeight / (this.getRectWidth() * 1.3));
        }
        return this._rectRow;
    };
    //高度
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    //方块宽度
    Data._rectWidth = 0;
    //分数
    Data.score = 0;
    //总行数
    Data._rectRow = 0;
    return Data;
}());
egret.registerClass(Data,'Data');
//# sourceMappingURL=Data.js.map