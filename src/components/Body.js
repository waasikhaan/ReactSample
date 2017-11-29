/**
 * Created by khanmu on 11/29/2017.
 */
import React, { Component } from 'react';

import DashBoardList from './DashBoardList.js';
import * as ItemActions from '../actions/ItemActions.js';
import dashBoardStore from '../stores/DashBoardStore.js';

class Body extends Component {
    constructor(props) {
        super();
    }

    addItem(e) {
        e.preventDefault();
        var text = e.target.elements.itemText.value.trim();
        console.log('hello ' + text);
        ItemActions.addItem(text);
        e.target.elements.itemText.value = '';
        e.target.elements.itemText.focus();
    }


    render() {
        return (
            <body>
            <div>
                <DashBoardList/>

                <form className="form-group" onSubmit={this.addItem.bind(this)}>
                    <div className="form-group">
                        <label for="pwd">Item:</label>
                        <input type="text" className="form-control" name="itemText" autoFocus/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Item</button>
                </form>
            </div>
            </body>
        );
    }
}

export default Body;
