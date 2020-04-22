import React, { Component,createRef } from 'react'

class ClassCreateRef extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dummyState : 0
        }
        this.divRef = createRef();
        this.inputRef = createRef();
        this.numberRef = createRef();
    }

    componentDidMount() {
        this.numberRef.current = 100;
    }

    componentDidUpdate() {
        if ( this.numberRef.current < 100 ) {
            alert('numberRef.current is smaller than 100')
            this.divRef.current.style.color = 'red'
            this.divRef.current.innerHTML = ' Equality is broken. '
        } else if  ( this.numberRef.current > 100 ) {
            alert('numberRef.current is bigger than 100')
            this.divRef.current.style.color = 'blue'
            this.divRef.current.innerHTML = ' Equality is broken. '
            this.divRef.current.style.background = 'yellow'
        }  else {
            // alert('numberRef.current is equal to 100')
            this.divRef.current.style.color = 'pink'
            this.divRef.current.innerHTML = ' Reference is equal to 100 '

        }
    }


    render() {
        return (
            <div>
                Value : {this.numberRef.current}
                <br/>
                <button onClick = { ()=> {
                    this.numberRef.current +=2
                    this.setState( {dummyState:  this.dummyState +1})
                    console.log(this.numberRef.current)
                 }}
                > Raise Number </button>

                <button onClick = { ()=> {
                                    this.numberRef.current -=2
                                    this.setState({dummyState: this.dummyState-1});
                                    console.log(this.numberRef.current)
                                }}
                                > Decrease Number </button>
                <div ref={this.divRef} > Reference Number is equal to 100. </div>
            </div>
        )
    }
}

export default ClassCreateRef
