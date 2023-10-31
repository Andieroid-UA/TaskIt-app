import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @ViewChild('modal') modal: ElementRef; // Reference to the modal in your template

  title = "todo";
  filter: "all" | "active" | "done" = "all";
  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
  ];

  showPopup: boolean = true; // Add the showPopup property

  constructor(private el: ElementRef, private renderer: Renderer2) {} // Corrected 'renderer' to 'Renderer2'

  ngOnInit() {
    // Access DOM elements and add event listeners
    const openModalButton = this.el.nativeElement.querySelector('#openModalButton');
    const closeModalButton = this.el.nativeElement.querySelector('#closeModalButton');
    const cancelButton = this.el.nativeElement.querySelector('#cancelButton');
    const createButton = this.el.nativeElement.querySelector('#createButton');
  }

  openModal() {
    this.renderer.addClass(this.modal.nativeElement, 'show');
  }

  closeModal() {
    this.renderer.removeClass(this.modal.nativeElement, 'show');
  }

  // Add functionality for Cancel and Create buttons here
  onCancel() {
    this.renderer.removeClass(this.modal.nativeElement, 'show');
    // Add cancel logic here
  }

  onCreate() {
    this.renderer.removeClass(this.modal.nativeElement, 'show');
    // Add create logic here
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  closePopup() {
    this.showPopup = false;
  }
}
