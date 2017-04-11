//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.createView();        
    }

    private textField:egret.TextField;
    private text:egret.TextField; //自定义话语

    private createView():void {
        this.textField = new egret.TextField();
        this.text = new egret.TextField();
        this.addChild(this.textField);
        this.addChild(this.text);
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textColor = 0x003333;
        this.textField.x = (egret.MainContext.instance.stage.stageWidth - this.textField.width)/2;
        this.textField.y = (egret.MainContext.instance.stage.stageHeight - this.textField.height)/2 - 50;
        this.textField.textAlign = "center";

        this.text.width = egret.MainContext.instance.stage.stageWidth;
        this.text.y = this.textField.y + 100;
        this.text.textAlign = "center";
        this.text.size = 25;
        this.text.text = "嗨呀，半天加载不出来，是不是很气哈哈(╯▔皿▔)╯！";
        this.text.textColor = 0x003333;

    }

    public setProgress(current:number, total:number):void {        
        this.textField.text = `资源加载中...${current}/${total}`;
    }
}
