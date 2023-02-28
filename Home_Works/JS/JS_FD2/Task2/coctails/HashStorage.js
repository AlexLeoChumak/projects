'use strict';

class HashStorage {
	constructor() {
		this.hashStorage = {};
	}

	addValue(key, value) {
		this.hashStorage[key] = value;
	}

	getValue(key) {
		if (key in this.hashStorage) {
			return this.hashStorage[key];
		} else {
			return undefined;
		}
	}

	deleteValue(key) {
		if (key in this.hashStorage) {
			delete this.hashStorage[key];
			return true;
		} else {
			return false;
		}
	}

	getKeys() {
		return Object.keys(this.hashStorage);
	}
}