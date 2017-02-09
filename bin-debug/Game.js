var Game = (function () {
    function Game(root) {
        this.gameSoundPanel = new GameSoundPanel(); //音乐播放器
        this._root = root;
        this.createGroupsRect();
        this.startGamePanel();
    }
    var d = __define,c=Game,p=c.prototype;
    p.createGroupsRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();
        var groupRect;
        for (var i = 0; i < this._row; i++) {
            groupRect = new GroupRect();
            groupRect.y = Data.getRectWidth() * 1.3 * i;
            this._rectGroups.push(groupRect);
            this._rectRoot.addChild(groupRect);
            //每一排监听每个小方块的点击事件和抛出事件
            groupRect.addEventListener("gameOver", this.gameOver, this);
            groupRect.addEventListener("clickRight", this.nextRow, this);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    };
    //点击成功到下一行
    p.nextRow = function () {
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].move();
        }
        Data.score++;
    };
    //游戏结束
    p.gameOver = function () {
        //停止音乐和计时器
        this.gameSoundPanel.close();
        this._timerPanel.stop();
        //游戏结束，禁止点击
        this._rectRoot.touchChildren = false;
        this.gameOverPanel = new GameOverPanel();
        this.gameOverPanel.addEventListener("startGame", this.startGame, this);
        this._root.addChild(this.gameOverPanel);
    };
    p.startGamePanel = function () {
        this.gameStartPanel = new GameOverPanel(true);
        this.gameStartPanel.addEventListener("startGame", this.startGame, this);
        this._root.addChild(this.gameStartPanel);
    };
    //创建计时器
    p.createTimer = function () {
        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener("gameOver", this.gameOver, this);
        this._root.addChild(this._timerPanel);
    };
    //游戏开始    
    p.startGame = function () {
        Data.score = 0;
        this.gameSoundPanel.play();
        this._rectRoot.touchChildren = true;
        var nowRow;
        for (var i = 0; i < this._row; i++) {
            nowRow = this._rectGroups[i];
            nowRow.init();
            nowRow.y = Data.getRectWidth() * 1.3 * i;
            nowRow._currentRow = i;
            //生成最后没有黑色方块的一行和生成其他有黑色方块的行
            if (i != (this._row - 1)) {
                this._rectGroups[i].createBlackRect();
            }
        }
        this.createTimer();
        this._timerPanel.start();
    };
    return Game;
}());
egret.registerClass(Game,'Game');
//# sourceMappingURL=Game.js.map