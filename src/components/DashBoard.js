/**
 * Created by khanmu on 11/29/2017.
 */
import React, { Component } from 'react';
import * as ItemActions from '../actions/ItemActions.js';

class DashBoard extends Component {
    constructor(props) {
        super();
    }

    deleteItem(id) {
        ItemActions.deleteItem(this.props.itemID);
    }

    render() {
        const { text } = this.props;

        return (
            <div className="col-md-12 content">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Dashboard Item: {this.props.itemID + 1}
                            <i class="dashboard-right-align fa fa-times" aria-hidden="true" onClick={this.deleteItem.bind(this)}></i>
                    </div>
                    <div className="panel-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
