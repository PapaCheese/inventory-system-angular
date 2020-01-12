import { Component, ViewChild } from '@angular/core';
import { ItemService } from './item.service';
import { ItemInterface } from './ItemInterface';
import { NgForm } from '@angular/forms';


@Component({
    templateUrl: './create-item.component.html'
})

export class CreateItemComponent {
    constructor(
        private itemService: ItemService) { }

    @ViewChild('form',{static: false}) updateForm: NgForm;
    item: ItemInterface;
    createStatus: string;


    onSubmit() {
        this.item = this.updateForm.value.item;
        console.log(this.item);
        this.itemService.createItem(this.item).subscribe(num => {
            this.createStatus = "Item successfully created with id: " + num;
        },
            err => {
                console.error(err.error.message);
                this.createStatus = err.error.message;
            }
        )
    }
}