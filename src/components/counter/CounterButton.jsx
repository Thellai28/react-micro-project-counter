import {PropTypes} from 'prop-types';
import './Counter.css' 

export default function CounterButton( {changevalueBy, incrementMethod, decrementMethod} ){ // child class :
    

    return( // what ever you have inside this will be shown in the browser : 
        <div className = "Counter"> 
            <div> 
                <button 
                    className = 'cntButton' 
                    onClick = {() => incrementMethod(changevalueBy)}
                > +{changevalueBy} </button>

                <button  
                    className = 'cntButton'
                    onClick = {() => decrementMethod(changevalueBy)}
                >-{changevalueBy}</button>
            </div>  
        </div>
    )
}

CounterButton.propTypes = { // setting the types of the properties : 
    changevalueBy : PropTypes.number,
};

CounterButton.defaultProps = { // Setting the default values for the properties : 
    changevalueBy : 1,
};