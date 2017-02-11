class GameOverPanel extends egret.Sprite
{
    public constructor(isFirstTime?:boolean)
    {
        super();
        this.draw(isFirstTime);
        //this.addEventListener( egret.Event.ADDED, this.showText, this );
    }

    private txt:egret.TextField;
    private disTxt:egret.TextField;
    private draw(isFirstTime?:boolean)
    {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;

        //背景板
        this.graphics.beginFill(0x00FFCC,0.5);
        this.graphics.drawRect(50,(h/3)+50,w-100,(h/3)-100); //中间3分之一宽
        this.graphics.endFill();        
        
        //得分文字
        this.txt = new egret.TextField();
        this.txt.width = w;
        this.txt.size = 40;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);

        //游戏说明
        this.disTxt = new egret.TextField();
        this.disTxt.width = w*2/3;
        this.disTxt.lineSpacing = 5;        
        this.disTxt.x = (w-this.disTxt.width)/2;
        this.disTxt.y = 100;
        this.disTxt.text = "30秒内，点击最下方一排的黑色方块，每按对一个画面都会自动下降，看谁点得多哦O(∩_∩)O~";
        this.disTxt.textColor = 0xff0000;
        this.disTxt.textAlign = egret.HorizontalAlign.CENTER;
        
        //重新开始按钮
        /*按钮文字*/
        var txtRestart = new egret.TextField();
        if(isFirstTime)
        {
            txtRestart.text = "开始游戏";
            this.addChild(this.disTxt);
        }else
        {
            txtRestart.text = "重新开始";
            this.showText();
        }
        
        txtRestart.x = (200-txtRestart.width)/2;//按钮宽高200*100
        txtRestart.y = (100-txtRestart.height)/2;
        txtRestart.textColor = 0x000033;
        txtRestart.bold = true;
        /*按钮*/
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0xFF6600);
        btn.graphics.drawRect(0,0,200,100);
        btn.graphics.endFill();
        btn.width = 200;
        btn.height = 100;
        btn.x = (w-200)/2;
        btn.y = (h-100)/2;
        btn.addChild(txtRestart);
        this.addChild(btn);
        btn.touchEnabled = true;        
        btn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.startGame, this );
        
    }

    private startGame()
    {
        this.parent.removeChild(this);
        this.dispatchEventWith( "startGame" );
    }

    private showText()
    {
        this.scoreTextMove();
        this.txt.text = "你是猪吗，才得" + Data.score + "分~";
    }

    private scoreTextMove()
    {
        this.txt.y = egret.MainContext.instance.stage.stageHeight;
        egret.Tween.get(this.txt).to({y:100},500,egret.Ease.quartIn);
        this.txt.y = 100;
        egret.Tween.get(this.txt,{loop:true}).to({y:150},500,egret.Ease.quartIn).to({y:100},500,egret.Ease.quartIn);
    }
}