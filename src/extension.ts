
import {window, workspace, commands, ExtensionContext, TextEditor, Selection} from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	var disposable = commands.registerCommand('extension.md5', () => {
		// The code you place here will be executed every time your command is executed
        var editor = window.activeTextEditor;

		// Display a message box to the user
		window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

/**
 * Get selected text by selection or by cursor position
 *
 * @param {TextEditor} active editor
 * @return {string}
 */
function getSelectedText(editor: TextEditor) {
    var selection = editor.selection;
    var text = editor.document.getText(selection);

    if (!text) {
        var range = editor.document.getWordRangeAtPosition(selection.active);
        text = editor.document.getText(range);
    }

    return text;
}