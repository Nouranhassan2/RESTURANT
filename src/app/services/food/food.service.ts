import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/food';
import { sample_foods} from 'src/data';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): food [] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

 


  getFoodById(foodId:string):food{
    return this.getAll().find(food => food.id == foodId) ?? new food();
  }

}
