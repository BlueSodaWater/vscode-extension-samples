import { deepStrictEqual } from 'assert';
import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
    var disposable = vscode.commands.registerCommand('test.inputName', () => {
        vscode.window
            .showInputBox({
                ignoreFocusOut: true,
                password: false,
                prompt: 'entry your name',
            })
            .then((value) => {
                if (value === undefined || value.trim() === '') {
                    vscode.window.showInformationMessage('Please type your name.');
                }
                else{
                    const name = value.trim();
                    vscode.window.showInformationMessage('your name is: ',name);
                    return;
                }
            })
    })

    context.subscriptions.push(disposable);
}