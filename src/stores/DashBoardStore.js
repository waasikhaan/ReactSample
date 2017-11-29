/**
 * Created by khanmu on 11/29/2017.
 */
import { EventEmitter } from "events";

import Dispatcher from "../Dispatcher.js";

class DashBoardStore extends EventEmitter
{
    constructor() {
        super()
        this.items = [];
    }

    addItem(text) {
        console.log('def');
        const id = Date.now();

        this.items.push({
            text,
        });

        this.emit("change");
    }

    getAll() {
        return this.items;
    }

    deleteItem(id){
        console.log('Element to delete: ' + id);
        this.items.splice(id, 1);
        this.emit("change");
    }

    handleActions(action) {
        console.log(action);
        switch(action.type) {
            case "ADD_ITEM": {
                console.log(action.type + ' '+ 'ITEM_DELETE');
                this.addItem(action.text);
                break;
            }

            case "ITEM_DELETE": {
                console.log(action.type + ' '+ 'ITEM_DELETE');
                this.deleteItem(action.id);
                break;
            }
        }
    }
}

const dashBoardStore = new DashBoardStore;
Dispatcher.register(dashBoardStore.handleActions.bind(dashBoardStore));

export default dashBoardStore;
