import React, { Component } from 'react'


class PlanetGame extends Component {

    state = {
        merc: false, venus: false, earth: false, mars: false,
        jup: false, sat: false, Uran: false, Nept: false,
    }

    render () {
        return (
            <div>
                <h1 className="titles">Our Solar System</h1>
            </div>
        )
    }

}

export default PlanetGame;