import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [{
    id:1,
    name:'test',
    description: 'testing',
    completed:false
  },
  {
    id:2,
    name:'double',
    description: 'second tets',
    completed:true
  }]

  selectedTodo: Todo;

  constructor() { }

  ngOnInit() {
  }
  onSelect(todo: Todo): void {

    this.selectedTodo = todo;
    console.log("selected " + this.selectedTodo.name);
  }
}
