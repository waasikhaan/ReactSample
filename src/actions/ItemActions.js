/**
 * Created by khanmu on 11/29/2017.
 */
import dispatcher from "../Dispatcher.js";

export function addItem(text) {
    console.log('ItemActions');
    dispatcher.dispatch({
        type: "ADD_ITEM",
        text,
    });
}

export function deleteItem(id) {
    console.log('ItemDelete');
    dispatcher.dispatch({
        type: "ITEM_DELETE",
        id,
    });
}
