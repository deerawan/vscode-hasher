
import {window, workspace, commands, ExtensionContext, Range, TextEditor, Selection} from 'vscode';
// import {Md5Command} from 'md5';

export function activate(context: ExtensionContext) {

	var disposable = commands.registerCommand('extension.md5', () => {
		// let md5 = new Md5Command();
        var editor = getActiveEditor();
        var selected = getSelectedTextAndRange(editor);
        // var jigong = md5.run('message');
        editor.edit(function(editBuilder) {
            editBuilder.replace(selected.range, 'woi');
        });

		// Display a message box to the user
		// window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

/**
 * Get vscode active editor
 *
 * @return {TextEditor}
 */
function getActiveEditor(): TextEditor {
    var editor = window.activeTextEditor;
    if (!editor) {
        return;
    }

    return editor;
}

function getSelectedTextAndRange(editor: TextEditor) {
    var selection = editor.selection;
    var range;

    if (!hasSelectedText(selection)) {
        range = editor.document.getWordRangeAtPosition(selection.active);
    } else {
        range = new Range(selection.start, selection.end);
    }

    var text = editor.document.getText(range);

    return {
        text: text,
        range: range
    }
}

function hasSelectedText(selection: Selection) {
    return selection.start.character !== selection.end.character;
}