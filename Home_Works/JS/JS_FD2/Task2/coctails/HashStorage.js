'use strict';

class HashStorage {
    constructor() {
      this.store_ = {}; // хранилище для значений
    }
  
    add(key, value) {
      this.store_[key] = value; // сохраняем значение в store
    }
  
    getValue(key) {
      return this.store_[key]; // тут все тоже просто и нативно
    }
  
    deleteValue(key) {
      if(!(key in this.store_)) {
        return false
      }
  
      return delete this.store_[key];
    }
  
    getKeys() {
      return Object.keys(this.store_);
    }
  }
  
const coctailsStorage = new HashStorage();


// class HashStorage {
//     constructor(coctail, alcogol, ingredients = [], recipe) {
//         this.coctail = coctail;
//         this.alcogol = alcogol;
//         this.ingredients = ingredients;
//         this.recipe = recipe;
//     }

//     addValue(key, value) {
//         this.key = value;
//     }
//     getValue(key) {
//         return (key) ? key.value : undefined;
//     }
//     deleteValue(key) {
//         delete this.key;
//     }
//     getKeys() {
//         return Object.keys(this);
//     }
// };





