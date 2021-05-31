import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

module.exports = function(context:vscode.ExtensionContext){
    var disposable = vscode.commands.registerCommand(
        'test.customWelcome',
        ()=>{
            const panel = vscode.window.createWebviewPanel(
                'welcome',
                '自定义欢迎页',
                vscode.ViewColumn.One,
                {
                    enableScripts:true,
                }
            )

            const htmlPath = path.join(
                context.extensionPath,
                'src/customWelcome.html'
            )
            var html = fs.readFileSync(htmlPath,'utf-8');
            panel.webview.html = html;
        }
    )

    context.subscriptions.push(disposable);
}