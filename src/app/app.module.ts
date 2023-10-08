import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule,
  CdkDragHandle,CdkDrag,CdkDropListGroup,CdkDragMove,
  CdkDragStart,CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule, NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule, NgFor, DragDropModule, CdkDropListGroup, CdkDropList, CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
