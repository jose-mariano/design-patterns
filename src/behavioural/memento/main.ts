import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.converFormatTo('gif');

backupManager.backup();
imageEditor.converFormatTo('jpg');// será desfeito

backupManager.showMementos();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);
