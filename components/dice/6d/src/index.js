import React, {Component, PropTypes} from 'react'

class Dice6d extends Component {
  state = {
    number: 6
  }

  _timeout = null

  _firstFace() {
    return (
      <div className="bg-Dice6d-first-face">
        <span className="pip"></span>
      </div>
    )
  }

  _secondFace() {
    return (
      <div className="bg-Dice6d-second-face">
        <span className="pip"></span>
        <span className="pip"></span>
      </div>
    )
  }

  _thirdFace() {
    return (
      <div className="bg-Dice6d-third-face">
        <span className="pip"></span>
        <span className="pip"></span>
        <span className="pip"></span>
      </div>
    )
  }

  _fourthFace() {
    return (
      <div className="bg-Dice6d-fourth-face">
        <div className="column">
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
        <div className="column">
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
      </div>
    )    
  }

  _fifthFace() {
    return (
      <div className="bg-Dice6d-fifth-face">
        <div className="column">
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
        <div className="column">
          <span className="pip"></span>
        </div>
        <div className="column">
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
      </div>
    )
  }

  _sixthFace() {
    return (
      <div className="bg-Dice6d-sixth-face">
        <div className="column">
          <span className="pip"></span>
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
        <div className="column">
          <span className="pip"></span>
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
      </div>
    )
  }

  _generateNumber() {
    return Math.floor((Math.random() * 6) + 1)
  }

  _updateDiceNumber() {
    const number = this._generateNumber()

    this.setState({
      number
    })

    return number
  }

  rollDice = () => {
    this._updateDiceNumber()

    if (this._timeout) clearTimeout(this._timeout)
    this._timeout = setTimeout(() => this.props.notifyNumber(this._updateDiceNumber()), 500)
  }

  render () {
    return (
      <div className='bg-Dice6d' data-val={this.state.number} onClick={this.rollDice}>
        <div className='cube'>
          {this._firstFace()}
          {this._secondFace()}
          {this._thirdFace()}
          {this._fourthFace()}
          {this._fifthFace()}
          {this._sixthFace()}
        </div>
      </div>
    )
  }
}

Dice6d.displayName = 'Dice6d'

Dice6d.propTypes = {
  /**
   * Function that will be notified of every new dice value
   *
   * (Number) => void
   */
  notifyNumber: PropTypes.func.isRequired
}

export default Dice6d
