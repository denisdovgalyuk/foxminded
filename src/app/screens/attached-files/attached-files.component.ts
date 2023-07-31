import { Component } from '@angular/core';

@Component({
  selector: 'app-attached-files',
  templateUrl: './attached-files.component.html',
  styleUrls: ['./attached-files.component.scss']
})
export class AttachedFilesComponent {

  attachedFiles = [
    'beau_100.jpg',
    'dragdrop.css',
    'epuff.png',
    'example-drag-n-drop.wmv',
    'fader.100.jpg',
    'glenda_100.jpg',
    'index.html',
    'morat_100.jpg',
    'trash.png'
  ]

  dragFileIndex?: number;

  handleDragStart(event: DragEvent, i: number) {
    const target = (event.target as HTMLElement)
    target.style.opacity = '0.5';
    this.dragFileIndex = i;

    event.dataTransfer?.setData('index', i + '');
  }

  handleDragEnd(event: DragEvent) {
    (event.target as HTMLElement).style.opacity = '1';
    this.dragFileIndex = undefined;
  }

  handleDragEnter(event: DragEvent) {
    (event.currentTarget as HTMLElement).classList.add('over');
  }

  handleDragLeave(event: DragEvent) {
    (event.currentTarget as HTMLElement).classList.remove('over');
  }

  drop(event: DragEvent) {
    event.preventDefault()
    const removedIndex = Number(event.dataTransfer?.getData("index"));
    this.attachedFiles.splice(removedIndex, 1);
    (event.currentTarget as HTMLElement).classList.remove('over');
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();

    return false;
  }
}
