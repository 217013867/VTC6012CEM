import React from "react";
import RowMain from "../RowMain";
import "./Table.css";

function Table(props) {
    const {headerRow, className, row} = props;

    return (
        <div className={`table ${className || ""}`}>
            <div className="overlap-group-9">
                <table style={{border: "1px solid black", width: '100%'}}>
                    <tr>
                        {headerRow.map(i => <th
                            style={{
                                fontSize: '24px',
                                border: "1px solid #ddd",
                                padding: '8px',
                                fontWeight: 'bold'
                            }}>{i}</th>)}
                    </tr>
                    {row.map(i => <tr>{
                        i.map(y => <td style={{
                            fontSize: '18px',
                            textAlign: 'center',
                            border: "1px solid #ddd",
                            padding: '8px'
                        }}>{y}</td>)
                    }</tr>)}
                </table>
            </div>
        </div>
    );
}

export default Table;
