import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

    equipmentItems: object[] = [
        {name: 'Duct Tape', mass: 0.5},
        {name: 'Space Camera', mass: 20},
        {name: 'Food', mass: 150},
        {name: 'Oxygen Tanks', mass: 400},
        {name: 'AE-35 Unit', mass: 5},
        {name: 'ISS Supplies', mass: 800},
        {name: 'Water', mass: 250},
        {name: 'Satellite', mass: 1200},
        {name: 'R2 Unit', mass: 32}
    ];

    cargoHold: object[] = [];
    cargoMass: number = 0;
    maximumAllowedMass: number = 2000;
    maxItems: number = 10;

    constructor() { }

    ngOnInit() { }

    addItem(equipment: object): boolean {
        this.cargoHold.push(equipment);
        this.cargoMass += this.equipmentItems[this.equipmentItems.indexOf(equipment)]['mass'];
        return this.isNearMaxMass()
    }

    massRemaining(): number {
        return (this.maximumAllowedMass - this.cargoMass);
    }

    isNearMaxMass(): boolean {
        return (this.cargoMass >= this.maximumAllowedMass - 200);
    }

    exceedsMaxMass(equipment): boolean {
        return (this.cargoMass + equipment.mass > this.maximumAllowedMass);
    }

    holdIsFull(): boolean {
        return (this.cargoHold.length === this.maxItems);
    }

    removeItem(item: object): void {
        this.cargoHold.splice(this.cargoHold.indexOf(item),1);
    }

    emptyHold(): void {
        this.cargoHold = [];
        this.cargoMass = 0;
    }

    getCargoCount(item: object): number {
        let count = 0;
        for (let i = 0; i < this.cargoHold.length; i++) {
            if (this.cargoHold[i] === item) {
                count += 1;
            }
        }
        return count;
    }

    isIneligible(item: object): boolean {
        return (this.holdIsFull() || this.exceedsMaxMass(item) || this.getCargoCount(item) === 2);
    }

}
