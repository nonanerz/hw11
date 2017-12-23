import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Sheets extends Component {
    constructor(props) {
        injectTapEventPlugin();

        super(props);
        this.state = {
            table: ''
        }
        this.afterSaveCell = this.afterSaveCell.bind(this);
    }

    afterSaveCell(row, cellName, cellValue) {
        console.log(row, cellName, cellValue)
    }


    render() {
        const data = Array.from(new Array(5),(val,index)=>index+1)
        const cellEditProp = {
            mode: 'click',
            blurToSave: true,
            afterSaveCell: this.afterSaveCell,
        };
        let objects =[]
        data.forEach((el) => {
            let obj = {}
            for (let i = 0; i <= 5; i++) {
                i === 0 ? obj['prop'+i] = el : obj['prop'+i] = ''
            }
            objects.push(obj)
        })


        return (
            <BootstrapTable data={ objects } cellEdit={ cellEditProp }>
                {
                    objects.map((el,i) => {
                        return <TableHeaderColumn key={i} className='myColumn' width={ i ? "80" : "10" } dataField={'prop'+i} isKey={ !i } editable={ i }>{i}</TableHeaderColumn>
                    })
                }


            </BootstrapTable>
        );
    }
}

export default Sheets;
