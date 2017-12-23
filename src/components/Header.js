import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }

        this.renderTable = this.renderTable.bind(this);
    }

    renderTable() {
        let table =''
        let rows = 5
        let cols = 5

        for (let i = 0; i < rows; i++) {
            table += '<tr>'
            for (let c = 0; c < cols; c++) {
                table += '<td>' + c + '</td>'
            }
            table += '</tr>'
        }
    }

    render() {
        return (
            <div>
                <table>
                </table>
            </div>
        );
    }
}

export default Header;
