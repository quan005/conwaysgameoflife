import React from 'react'

import Grid from './Grid.js'
import glider from './glider.svg'
import lwss from './lwss.svg'
import pulsar from './pulsar.svg'
import pentadecathlon from './pentadecathlon.svg'
import random from './random.svg'


function arrClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}


class Body extends React.Component {
    constructor() {
        super()
        this.rows = 25
        this.columns = 25
        this.state = {
            speed: 500,
            value: '3',
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
                    image: glider
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
                    image: lwss
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
                    image: pulsar
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
                    image: pentadecathlon
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
            generation: 0,
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

    presetHandler = (presetData) => {
        // console.log(presetData)
        this.setState({
            generation: 0,
            gridSetup: presetData
        })
    }

    slideHandler = (event) => {
        this.setState({
            value: event.target.value
        })

        if(event.target.value === '5') {
            this.setState({
                speed: 50
            }, () => {
                console.log('speed 50', this.state.speed)
            })
        } else if(event.target.value === '4') {
            this.setState({
                speed: 250
            }, () => {
                console.log('speed 250', this.state.speed)
            })
        } else if (event.target.value === '3') {
            this.setState({
                speed: 500
            }, () => {
                console.log('speed 500', this.state.speed)
            })
        } else if (event.target.value === '2') {
            this.setState({
                speed: 750
            }, () => {
                console.log('speed 750', this.state.speed)
            })
        } else {
            this.setState({
                speed: 1000
            }, () => {
                console.log('speed 1000', this.state.speed)
            })
        }
    }


    componentDidMount() {
        this.randomizer();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.speed !== this.state.speed) {
            clearInterval(this.intervalId)
            this.intervalId = setInterval(this.start, this.state.speed)
        }
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
                                <div className='slider-container'>
                                    <input
                                        type='range'
                                        min='1'
                                        max='5'
                                        className='slider-input'
                                        value={this.state.value}
                                        onChange={this.slideHandler}
                                    />
                                </div>

                                <div className='button-container'>
                                    <button className='button' onClick={this.startHandler}>Start</button>
                                    <button className='button' onClick={this.pauseHandler}>Pause</button>
                                    <button className='button' onClick={this.clearHandler}>Clear</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className='preset-container'>
                            {Object.entries(this.state.presets).map(([key, value], i) => (
                                <div className='img-container' onClick={e => this.presetHandler(value.data)} key={i}>
                                    <img src={value.image} alt={value.name} width='65px' />
                                    <div className='info-container'>
                                        <h2 className='info-name'>{value.name}</h2>
                                    </div>
                                </div>
                            ))}
                            <div className='img-container' onClick={e => this.randomizer()}>
                                    <img src={random} alt='Random' width='65px' />
                                    <div className='info-container'>
                                        <h2 className='info-name'>Random</h2>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='title'>
                        <h3>Rules:</h3>
                    </div>

                    <div className='rules-container'>
                        <ul>
                            <li>Any live cell with fewer than two live neighbours dies</li>
                            <li>Any live cell with two or three live neighbours lives on to the next generation</li>
                            <li>Any live cell with more than three live neighbours dies</li>
                            <li>Any dead cell with exactly three live neighbours becomes a live cell</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;