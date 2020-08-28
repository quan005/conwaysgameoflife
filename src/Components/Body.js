import React from 'react'

import Grid from './Grid.js'


function arrClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}


class Body extends React.Component {
    constructor() {
        super()
        this.rows = 25
        this.columns = 25
        this.state = {
            speed: 100,
            generation: 0,
            gridSetup: Array(this.rows).fill().map(() => Array(this.columns).fill(false)),
            presets: {
                Glider: {
                    name: 'Glider',
                    type: 'Spaceship',
                    data: [
                        [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
                    ],
                    image: ''
                },
                LWSS: {
                    name: 'Lightweight Spaceship',
                    type: 'Spaceship',
                    data: [
                        [true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
                    ],
                    image: ''
                },
                Pulsar: {
                    name: 'Pulsar',
                    type: 'Oscillator',
                    data: [
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false],
                        [false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false],
                        [false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false],
                        [false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false],
                        [false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
                    ],
                    image: ''
                },
                Pentadecathlon: {
                    name: 'Pentadecathlon',
                    type: 'Oscillator',
                    data: [
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
                    ],
                    image: ''
                },
            }
        }
    }

    selectCell = (row, column) => {
        let newGrid = arrClone(this.state.gridSetup);
        console.log('newGrid', newGrid)
        newGrid[row][column] = !newGrid[row][column];

        this.setState({
            gridSetup: newGrid
        })
    }

    randomizer = () => {
        let newGrid = arrClone(this.state.gridSetup);
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.columns; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    newGrid[i][j] = true;
                }
            }
        }

        this.setState({
            gridSetup: newGrid
        })
    }

    startHandler = () => {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.start, this.state.speed)
    }

    start = () => {
        let currentGrid = this.state.gridSetup;
        let newGrid = arrClone(this.state.gridSetup);

        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.columns; j++) {
                let neighbours = 0;

                if(i > 0) {
                    if(currentGrid[i - 1][j]) {
                        neighbours++
                    }
                }
                if(i > 0 && j > 0) {
                    if(currentGrid[i - 1][j - 1]) {
                        neighbours++
                    }
                }
                if(i > 0 && j < this.columns - 1) {
                    if(currentGrid[i - 1][j + 1]) {
                        neighbours++
                    }
                }
                if(j < this.columns - 1) {
                    if(currentGrid[i][j + 1]) {
                        neighbours++
                    }
                }
                if(j > 0) {
                    if(currentGrid[i][j - 1]) {
                        neighbours++
                    }
                }
                if(i < this.rows - 1) {
                    if(currentGrid[i + 1][j]) {
                        neighbours++
                    }
                }
                if(i < this.rows - 1 && j > 0) {
                    if(currentGrid[i + 1][j - 1]) {
                        neighbours++
                    }
                }
                if(i < this.rows - 1 && this.columns - 1) {
                    if(currentGrid[i + 1][j + 1]) {
                        neighbours++
                    }
                }
                if(currentGrid[i][j] && (neighbours < 2 || neighbours > 3)) {
                    newGrid[i][j] = false
                }
                if(!currentGrid[i][j] && neighbours === 3) {
                    newGrid[i][j] = true
                }
            }
        }
        this.setState({
            gridSetup: newGrid,
            generation: this.state.generation + 1
        })
    }

    pauseHandler = () => {
        clearInterval(this.intervalId)
    }

    clearHandler = () => {
        let newGrid = Array(this.rows).fill().map(() => Array(this.columns).fill(false));

        this.setState({
            generation: 0,
            gridSetup: newGrid,
        })
    }

    presetHandler = () => {

    }

    slideHandler = (presetTitle) => {
        
    }


    componentDidMount() {
        this.randomizer();
    }

    render() {
        return (
            <div className='body-container'>
                <div className='left-container'>
                    <div className='title'>
                        <h3>Generation: #{this.state.generation}</h3>
                    </div>

                    <div className='grid-data-container'>
                        <div className='grid-container'>
                            <Grid 
                                gridSetup={this.state.gridSetup}
                                rows={this.rows}
                                columns={this.columns}
                                selectCell={this.selectCell}
                            />

                            <div className='control-container'>
                                <div>
                                    <button onClick={this.startHandler}>Start</button>
                                    <button onClick={this.pauseHandler}>Pause</button>
                                    <button onClick={this.clearHandler}>Clear</button>
                                </div>
                                <div>
                                    <input
                                        type='range'
                                        min='1'
                                        max='100'
                                        value='50'
                                        className='slider-input'
                                        onChange={this.slideHandler}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className='preset-container'>
                            {this.state.presets.map((preset, i) => (
                                <div className='img-container'>
                                    <img src={preset.image} alt={preset.name} key={i} />
                                    <div className='info-container'>
                                        <h2>{preset.name}</h2>
                                        <p>{preset.type}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='title'>
                        <h3>Rules:</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;