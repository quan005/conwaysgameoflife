import React from 'react'

import Cell from './Cell.js'

class Grid extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        let rows = []
        let cellClass = ''
        for(let i = 0; i < this.props.rows; i++) {
            for(let j = 0; j < this.props.columns; j++) {
                let cellId = i + '-' + j;
                cellClass = this.props.gridSetup[i][j] ? 'cell on' : 'cell off'

                rows.push(
                    <Cell
                        cellClass={cellClass}
                        key={cellId}
                        cellId={cellId}
                        row={i}
                        column={j}
                        selectCell={this.props.selectCell}
                    />
                )
            }
        }

        return (
            <>
                <div className='grid'>
                    {rows}
                </div>
            </>
        )
    }
}

export default Grid;