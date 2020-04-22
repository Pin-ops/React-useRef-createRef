import React, {useState,useEffect,useRef} from 'react'

function HookUseRef() {

    // const [ ... ] = useState()
    // inital value can be written useRef(initial value)
    const [dummyState, setDummyState]=useState(0)
    const divRef = useRef();
    const inputRef = useRef();
    const numberRef = useRef(100);


    // we combine them with ref={} in return


    // useEffect method

    useEffect(() => {
        inputRef.current.focus();

    }, [])
    useEffect( () => {
        // divRef.current.style.color='red'
        // divRef.current.innerHTML='Hello World'
        if ( numberRef.current < 100 ) {
            alert('numberRef.current is smaller than 100')
            divRef.current.style.color = 'red'
            divRef.current.innerHTML = ' Equality is broken. '
            divRef.current.addEventListener( 'mouseover' , hoverEffect)
            divRef.current.addEventListener( 'mouseout' , outEffect)
        } else if  ( numberRef.current > 100 ) {
            alert('numberRef.current is bigger than 100')
            divRef.current.style.color = 'green'
            divRef.current.innerHTML = ' Equality is broken. '
            divRef.current.style.background = 'yellow'
        }  else {
            // alert('numberRef.current is equal to 100')
            divRef.current.style.color = 'pink'
            divRef.current.innerHTML = ' Reference is equal to 100 '

        }
    })
    const hoverEffect = () => {
        // alert ('You are over Div')
        divRef.current.style.background = 'lightblue'
    }
    const outEffect = () => {
        // alert ('You are over Div')
        divRef.current.style.background = 'pink'
    }
    return (
        <div>
            <input ref={inputRef} type="text"/>
            <br/><br/>
            Value : {numberRef.current}
            <br/><br/>
            <button onClick = { ()=> {
                                        numberRef.current +=2
                                        setDummyState( prevState => prevState +1)
                                        console.log(numberRef.current)
                                     }}
            > Raise Number </button>

            <button onClick = { ()=> {
                                        numberRef.current -=2
                                        setDummyState( prevState => prevState -1)
                                        console.log(numberRef.current)
                                     }}
            > Decrease Number </button>
            <div ref={divRef} > Reference Number is equal to 100. </div>
        </div>
    )
}

export default HookUseRef
