var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.call(this);
        this._colors = [0x000000, 0xffffff, 0xCC3300, 0x0066FF];
        this._currentColor = 1;
        //用get和set方法，将 RectType.CLICKABLE和黑色方块绑定起来
        this._type = "white";
        this.touchEnabled = true;
        this.draw();
    }
    var d = __define,c=Rect,p=c.prototype;
    ///创建一个小方块
    //创建一个小方块
    p.draw = function () {
        this.width = Data.getRectWidth();
        this.height = Data.getRectWidth();
        this.graphics.lineStyle(1, 0x000000);
        this.graphics.beginFill(this._colors[this._currentColor]);
        this.graphics.drawRect(0, 0, Data.getRectWidth(), Data.getRectWidth() * 1.3);
        this.graphics.endFill();
    };
    d(p, "type"
        ,function () {
            return this._type;
        }
        ,function (val) {
            this._type = val;
            if (this._type == "black") {
                this._currentColor = 0;
            }
            else {
                this._currentColor = 1;
            }
            this.draw();
        }
    );
    //小方块的点击，点击类型为RectType.CLICKABLE 就变成蓝色，反之变成红色
    p.onRectClick = function () {
        if (this._type == "black") {
            this._currentColor = 3;
        }
        else {
            this._currentColor = 2;
        }
        this.draw();
    };
    return Rect;
}(egret.Sprite));
egret.registerClass(Rect,'Rect');
//# sourceMappingURL=Rect.js.map