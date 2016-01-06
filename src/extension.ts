
import {window, workspace, commands, ExtensionContext, Range, TextEditor, Selection} from 'vscode';
import {Md5Command} from './md5-command';
import {Sha1Command} from './sha1-command';
import {Base64EncodeCommand} from './base64-encode-command';
import {Base64DecodeCommand} from './base64-decode-command';
import {UriEncodeCommand} from './uri-encode-command';

export function activate(context: ExtensionContext) {

	context.subscriptions.push(commands.registerCommand('extension.md5', () => {
        var editor = getActiveEditor();
        var selected = getSelectedTextAndRange(editor);
        let md5 = new Md5Command();
        replaceText(editor, selected.range, md5.run(selected.text));
	}));

    context.subscriptions.push(commands.registerCommand('extension.sha1', () => {
        var editor = getActiveEditor();
        var selected = getSelectedTextAndRange(editor);
        let sha1 = new Sha1Command();
        replaceText(editor, selected.range, sha1.run(selected.text));
	}));

    context.subscriptions.push(commands.registerCommand('extension.base64Encode', () => {
        var editor = getActiveEditor();
        var selected = getSelectedTextAndRange(editor);
        let base64Encode = new Base64EncodeCommand();
        replaceText(editor, selected.range, base64Encode.run(selected.text));
	}));

    context.subscriptions.push(commands.registerCommand('extension.base64Decode', () => {
        var editor = getActiveEditor();
        var selected = getSelectedTextAndRange(editor);
        let base64Decode = new Base64DecodeCommand();
        replaceText(editor, selected.range, base64Decode.run(selected.text));
	}));

    context.subscriptions.push(commands.registerCommand('extension.uriEncode', () => {
        var editor = getActiveEditor();
        var selected = getSelectedTextAndRange(editor);
        let uriEncode = new UriEncodeCommand();
        replaceText(editor, selected.range, uriEncode.run(selected.text));
	}));
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

/**
 * Get selected text and range
 *
 * @param {TextEditor} editor
 */
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

/**
 * Check if selection has selected text or just a cursor
 *
 * @param {Selection} selection
 * @return {boolean} true if not a cursor
 */
function hasSelectedText(selection: Selection) {
    return selection.start.character !== selection.end.character;
}

/**
 * Replace text in editor
 *
 * @param {TextEditor} editor
 * @param {Range} range
 * @param {string} newText - new text to replace
 */
function replaceText(editor, range, newText) {
    editor.edit(function(editBuilder) {
        editBuilder.replace(range, newText);
    });
}