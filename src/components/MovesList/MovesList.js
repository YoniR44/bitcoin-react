import React, { Component } from 'react';

import moment from 'moment';

import './MovesList.css'

class MovesList extends Component {

    render() {
        var moves;
        var contact = this.props.contact;

        if (contact) {
            moves = this.props.moves.filter((move) => {
                return move.toId === contact._id;
            })
        } else {
            var len = this.props.moves.length;
            moves = this.props.moves.slice(len - 3, len);
        }

        const movesList = moves.map((move, idx) => {
            return (
                <li key={idx} className="moves-list-item">
                    <hr className="moves-hr" />
                    {!this.props.contact && <div className="moves-to"> To: {move.to}</div>}
                    <div> At: {moment(move.at).format('L, LT')}</div>
                    <div> Amount: {move.amount} coins</div>
                </li>
            )
        });

        return (
            <div className="moves-list">
                <h5 className="moves-title">{this.props.title}</h5>
                <ul>
                    {movesList}
                </ul>
            </div>
        )
    }
}

export default MovesList;