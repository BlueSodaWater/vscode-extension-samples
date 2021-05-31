import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
  var disposable = vscode.commands.registerCommand(
    'test.keybindings',
    () => {
      vscode.window.showInformationMessage('keybindings touched !')
    }
  )

  context.subscriptions.push(disposable)
}