import { Component } from '@angular/core';
import { ItemInterface } from './ItemInterface';
import { ItemService } from './item.service';

@Component({
    templateUrl: './item-list.component.html'
})

export class ItemListComponent {
    pageTitle: string = 'Inventory Items';
    items: ItemInterface[];
    constructor(private itemService: ItemService){}

    ngOnInit(): void {
        this.itemService.getItems().subscribe(data => {
            this.items = data
        },
            err => {
                console.error(err.error.message);
            }
        )
    }

    depositItemAmount(id: number): void{
        var quantity = Number((document.getElementById("depositAmount"+id) as HTMLInputElement).value);
        this.itemService.depositItemAmount(id, quantity).subscribe();
        console.log("Depositing " + quantity + " into item with id: " + id);
    }

    withdrawItemAmount(id: number): void{
        var amount = Number((document.getElementById("withdrawAmount"+id) as HTMLInputElement).value);
        this.itemService.withdrawItemAmount(id, amount).subscribe();
        console.log("Withdrawing " + amount + " from item with id: " + id);
    }

    deleteItem(id: number): void{
        this.itemService.deleteItemById(id).subscribe();
        console.log(id + " deleted");
    }

}
