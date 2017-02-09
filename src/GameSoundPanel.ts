class GameSoundPanel extends egret.Sprite {
    //用来标记是否在播放音乐
    public _soundStart:number = 1;
    public _soundChannel:egret.SoundChannel;
    public _endSoundChannel:egret.SoundChannel;
    private startSound:egret.Sound;
    private endSound:egret.Sound;
    private soundCompelete:boolean = false;
    private isEndSoundPlay:boolean = false;
    public constructor(){
        super();
        this.onAddSoundRes();
    }

    private onAddSoundRes(){
        //初始化Resource资源加载库，提示：Resource资源加载库是可选模块，不在egret-core项目里，最新代码请到github上的egret-game-library项目检出。
        this.startSound = new egret.Sound();
        this.endSound = new egret.Sound();
        this.startSound.load("resource/assets/bgm.mp3");
        this.endSound.load("resource/assets/endBgm.mp3");
        this.startSound.addEventListener(egret.Event.COMPLETE, function (e: egret.Event) {
            this.onResourceLoadComplete();
        }, this);
    }

    //soundload资源组加载完成
    
    private onResourceLoadComplete():void {
       this.soundCompelete = true;
    }

    public play(){
        if (this.soundCompelete){
            this._soundStart = 1;
            this._soundChannel = this.startSound.play();
            if(this.isEndSoundPlay) this._endSoundChannel.stop();            
        }
    }

    public close(){
        this._soundChannel.stop();
        this._endSoundChannel = this.endSound.play();
        this.isEndSoundPlay = true;
    }


}