var GroupRect = (function (_super) {
    __extends(GroupRect, _super);
    function GroupRect() {
        _super.call(this);
        //点击矩形方块事件
        this._currentRow = 0;
        //一排四个，随机位置产生黑色方块
        this._currentBalckRectIndex = 0;
        this.createRects();
    }
    var d = __define,c=GroupRect,p=c.prototype;
    p.createRects = function () {
        this._rects = [];
        //创建一排
        for (var i = 0; i < 4; i++) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            //性能待改（是否可以不绑定这么多事件？）
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
        }
    };
    p.onClickRect = function (evt) {
        evt.target.onRectClick();
        if (evt.target.type == "white" || this._currentRow != (Data.getRectRow() - 2)) {
            this.dispatchEventWith("gameOver");
        }
        else {
            this.dispatchEventWith("clickRight");
        }
    };
    p.createBlackRect = function () {
        this.init();
        this._currentBalckRectIndex = ~~(Math.random() * 4);
        this._rects[this._currentBalckRectIndex].type = "black";
    };
    //初始化所有白色方块
    p.init = function () {
        for (var i = 0; i < 4; i++) {
            this._rects[i].type = "white";
        }
    };
    //点击正确后向下移动
    p.move = function () {
        this._currentRow++;
        if (this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
            this.createBlackRect();
        }
        this.y = this._currentRow * Data.getRectWidth() * 1.3;
    };
    return GroupRect;
}(egret.Sprite));
egret.registerClass(GroupRect,'GroupRect');
//# sourceMappingURL=GroupRect.js.map