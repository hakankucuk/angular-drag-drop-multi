import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DragDropModule,
  CdkDragHandle, CdkDrag, CdkDropListGroup, CdkDragMove,
  CdkDragStart, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stored: any = [];
  ctrlPress = false;
  todo = [
    {
      name: 'Get to work',
      selected: false,
    },
    {
      name: 'Pick up groceries',
      selected: false

    },
    {
      name: 'Go home',
      selected: false
    },

    {
      name: 'Fall asleep',
      selected: false
    }
  ];

  done = [
    {
      name: 'Wash hair',
      selected: false,
    },
    {
      name: 'Brush teeth',
      selected: false
    },
    {
      name: 'Go home',
      selected: false
    },
    {
      name: 'Check e-mail',
      selected: false
    },
    {
      name: 'Walk dog',
      selected: false
    }
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.stored.length > 0) {
        event.previousContainer.data.slice(0).reverse().forEach(function (item, idx) {
          if (item.selected) {
            event.previousContainer.data.splice(event.previousContainer.data.indexOf(item), 1);
            event.container.data.splice(event.currentIndex, 0, item)
            event.container.data.forEach(function (d) {
              d.selected = false;
            })

          }
        });

        this.stored = [];
      } else {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }

  }
  // test(event: CdkDragStart<any[]>){

  //   if(this.ctrlPress !==false && this.stored.length > 0){
  //        for(let item of event.source.dropContainer.data){

  //         if(item.selected){
  //          item.isMultidragging=true;
  //         }else {
  //           item.isMultidragging=false;
  //         }
  //       }
  //   }

  // }
  onKeyDown(e: MouseEvent, item: any, data: any) {
    this.ctrlPress = e.ctrlKey;

    if (e.ctrlKey && this.stored.indexOf(item) == -1) {
      item.selected = true;
      let idx = data.indexOf(item);
      item.selected = true;
      item.index = idx;
      this.stored.push(item)
    }

  }
}