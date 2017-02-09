class Game{
    private _root : egret.DisplayObjectContainer;
    //private gameSoundPanel:GameSoundPanel = new GameSoundPanel(); //音乐播放器
    private gameOverPanel:GameOverPanel //游戏结束界面
    private gameStartPanel:GameOverPanel //游戏结束界面
    private _timerPanel:TimerPanel; //计时器
    private gameSoundPanel:GameSoundPanel = new GameSoundPanel(); //音乐播放器
    private bgm:egret.Sound; //背景音乐

    public constructor(root:egret.DisplayObjectContainer)
    {
        this._root = root;
        this.createGroupsRect();
        this.startGamePanel()
    }

    //生成游戏界面的一行一行的方块
    private _row:number; //总行数
    private _rectRoot:egret.Sprite; //方块总容器
    private _rectGroups:Array<GroupRect>; //每一排方块

    private createGroupsRect()
    {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();

        var groupRect:GroupRect;
        for( var i = 0; i<this._row; i++)
        {
            groupRect = new GroupRect();
            groupRect.y = Data.getRectWidth() * 1.3 * i;
            this._rectGroups.push(groupRect);
            this._rectRoot.addChild(groupRect);
            //每一排监听每个小方块的点击事件和抛出事件
            groupRect.addEventListener("gameOver",this.gameOver,this);
            groupRect.addEventListener("clickRight",this.nextRow,this);
        }

        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    }

    //点击成功到下一行
    private nextRow()
    {
        for(var i = 0 ;i < this._row; i++)
        {
            this._rectGroups[i].move();
        }
        Data.score++;
    }

    //游戏结束
    private gameOver()
    {
        //停止音乐和计时器
        this.gameSoundPanel.close();
        this._timerPanel.stop();

        //游戏结束，禁止点击
        this._rectRoot.touchChildren = false;

        this.gameOverPanel = new GameOverPanel();
        this.gameOverPanel.addEventListener( "startGame", this.startGame, this );        
    
        this._root.addChild(this.gameOverPanel);        

    }

    private startGamePanel()
    {
            this.gameStartPanel = new GameOverPanel(true);
            this.gameStartPanel.addEventListener( "startGame", this.startGame, this );
            this._root.addChild(this.gameStartPanel);
    }

    //创建计时器
    private createTimer()
    {
        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener( "gameOver", this.gameOver, this );
        this._root.addChild( this._timerPanel );
    }

    //游戏开始    
    private startGame()
    {
        Data.score = 0;
        this.gameSoundPanel.play();        
        this._rectRoot.touchChildren = true;
        var nowRow:GroupRect;
        for(var i=0; i<this._row; i++)
        {
            nowRow = this._rectGroups[i];
            nowRow.init();
            nowRow.y = Data.getRectWidth()* 1.3 * i
            nowRow._currentRow = i;
            //生成最后没有黑色方块的一行和生成其他有黑色方块的行
            if( i != (this._row - 1) ){
                this._rectGroups[i].createBlackRect();
            }
        }
        this.createTimer();
        this._timerPanel.start();
    }

}

