import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('test.customMenu', () => {
    vscode.window.showInformationMessage("I' am custom menu !")
  })

  context.subscriptions.push(disposable)
}