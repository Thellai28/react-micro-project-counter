import { useState } from 'react';
import './Counter.css'
//import ResetButton from './ResetButton';
import CounterButton  from './CounterButton';


export default function Counter(){ // Parent class : 
    const [count, setCount] = useState(0); 
    
    function incrementCounterParentFunction( changevalueBy ){
        setCount( count + changevalueBy );
    }

    function decrementCounterParentFunction( changevalueBy ){
        setCount( count - changevalueBy );
    }

    function resetValue(){
        setCount( 0 );
    }

    return(
        <div >
            <span className = "count"> { count } </span>
            <CounterButton changevalueBy = {1} 
                incrementMethod = {incrementCounterParentFunction} 
                decrementMethod = {decrementCounterParentFunction}/>
                
            <CounterButton changevalueBy = {2} 
                incrementMethod = {incrementCounterParentFunction} 
                decrementMethod = {decrementCounterParentFunction}/>

            <CounterButton changevalueBy = {5} 
            incrementMethod = {incrementCounterParentFunction} 
            decrementMethod = {decrementCounterParentFunction}/>

            
            <button className='resetButton' onClick={resetValue}> Reset </button>
        </div>
    )
}


