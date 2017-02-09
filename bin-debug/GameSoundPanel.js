var GameSoundPanel = (function (_super) {
    __extends(GameSoundPanel, _super);
    function GameSoundPanel() {
        _super.call(this);
        //用来标记是否在播放音乐
        this._soundStart = 1;
        this.soundCompelete = false;
        this.isEndSoundPlay = false;
        this.onAddSoundRes();
    }
    var d = __define,c=GameSoundPanel,p=c.prototype;
    p.onAddSoundRes = function () {
        //初始化Resource资源加载库，提示：Resource资源加载库是可选模块，不在egret-core项目里，最新代码请到github上的egret-game-library项目检出。
        this.startSound = new egret.Sound();
        this.endSound = new egret.Sound();
        this.startSound.load("resource/assets/bgm.mp3");
        this.endSound.load("resource/assets/endBgm.mp3");
        this.startSound.addEventListener(egret.Event.COMPLETE, function (e) {
            this.onResourceLoadComplete();
        }, this);
    };
    //soundload资源组加载完成
    p.onResourceLoadComplete = function () {
        this.soundCompelete = true;
    };
    p.play = function () {
        if (this.soundCompelete) {
            this._soundStart = 1;
            this._soundChannel = this.startSound.play();
            if (this.isEndSoundPlay)
                this._endSoundChannel.stop();
        }
    };
    p.close = function () {
        this._soundChannel.stop();
        this._endSoundChannel = this.endSound.play();
        this.isEndSoundPlay = true;
    };
    return GameSoundPanel;
}(egret.Sprite));
egret.registerClass(GameSoundPanel,'GameSoundPanel');
//# sourceMappingURL=GameSoundPanel.js.map