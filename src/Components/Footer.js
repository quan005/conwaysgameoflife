import React from 'react'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='footer-container'>
                <div className='title'>
                    <h3>About This Algorithm:</h3>
                </div>
                <div className='about-container'>
                    <p>
                    Conway's Game of Life was created in 1970 by the British mathmetician, John Horton Conway. The player interacts with the game by creating an initial layout, and when executed, the game is capable of infinitely evolving. It is a turing complete algorithm that simulates cellular automata.
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;