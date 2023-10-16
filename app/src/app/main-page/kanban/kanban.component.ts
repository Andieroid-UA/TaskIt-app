import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

declare var $: any; // Include jQuery, Zepto, or other libraries as needed

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // You can add your initialization logic here
  }

  ngAfterViewInit() {
    // Your jQuery code goes here
    const nestableElement = $(this.elementRef.nativeElement).find('.dd');

    nestableElement.nestable({
      // your nestable options go here
    });

    // Handle viewlist and viewkanban click events
    nestableElement.on('click', '.viewlist', () => {
      nestableElement.find('ol.kanban').addClass('list');
      nestableElement.find('ol.list').removeClass('kanban');
      nestableElement.find('menu').addClass('list');
      nestableElement.find('menu').removeClass('kanban');
    });

    nestableElement.on('click', '.viewkanban', () => {
      nestableElement.find('ol.list').addClass('kanban');
      nestableElement.find('ol.kanban').removeClass('list');
      nestableElement.find('menu').addClass('kanban');
      nestableElement.find('menu').removeClass('list');
    });

    // Handle color selection using Spectrum
    const colorPicker = nestableElement.find('#color');
    const labelElement = nestableElement.find('#label');

    colorPicker.spectrum({
      color: "red",
      change: function (color) {
        labelElement.text("change called: " + color.toHexString());
      }
    });
  }

}
