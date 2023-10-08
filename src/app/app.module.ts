import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { OneWayFormComponent } from './one-way-form/one-way-form.component';
import { TwoWayFormComponent } from './two-way-form/two-way-form.component';
import { OnewaybindingAssignment1Component } from './onewaybinding-assignment1/onewaybinding-assignment1.component';
import { TwowaybindingAssignmentComponent } from './twowaybinding-assignment/twowaybinding-assignment.component';
import { FormsModule } from '@angular/forms';
import { TwowayTask2Component } from './twoway-task2/twoway-task2.component';
import { SwitchComponent } from './switch/switch.component';
import { PipeComponent } from './pipe/pipe.component';
import { SquarePipe } from './square.pipe';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    HeaderComponent,
    OneWayFormComponent,
    TwoWayFormComponent,
    OnewaybindingAssignment1Component,
    TwowaybindingAssignmentComponent,
    TwowayTask2Component,
    SwitchComponent,
    PipeComponent,
    SquarePipe,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
