import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {FormsModule} from "@angular/forms";
import {StateService} from "./state.service";

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [HeaderComponent, TodolistComponent, FooterComponent, MainComponent, ListComponent, ItemComponent],
  exports: [TodolistComponent],
  providers: [StateService]
})
export class TodolistModule { }
