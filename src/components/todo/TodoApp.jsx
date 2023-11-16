import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './TodoApp.css'

export default function TodoApp(){
    return (
        <div className="TodoApp"> 
            <BrowserRouter>
                <Routes> 
                    <Route path ='/' element = { <LoginComponent/> }></Route>
                    <Route path ='/login' element = { <LoginComponent/> }></Route>
                    <Route path ='/welcome/:userName' element = { <WelcomeComponent/> }></Route>
                    <Route path ='*' element = { <ErrorComponent/> }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){
    const [userName, setUserName] = useState('Thellai');
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setshowSuccessMessage] = useState(false);
    const [showErrorMessge, setshowErrorMessge] = useState(false);
    const navigate = useNavigate(); // another hook to navigate to other URL's, unlike useState(), this hook only returns one function back :  

    function handleUserNameChange( event ){
        setUserName( event.target.value );
    }
    
    function handlePasswordChange( event ){
        setPassword( event.target.value );
    }

    function handleSubmit(){
        if( userName === 'Thellai' && password === 'password'){
            setshowSuccessMessage( true );
            setshowErrorMessge( false );
            navigate(`/welcome/${userName}`); // This is not single quotes, this is tild symbol ( button present belwo ESC button in keyboard )
        }else {
            setshowSuccessMessage( false );
            setshowErrorMessge(true);
        }
    }

    return (
        <div className = "Login"> 
            { showSuccessMessage && <div className='successMessage'> Authenticated successfully! </div> }
            { showErrorMessge && 
                <div className ='errorMessage'> Authenticated Failed, please check your credentials </div>}
            
            <div className="LoginForm">
                <h1>Time to log-in</h1>
                <div >
                    <label> user Name</label>
                    < input type="text" name ="userName" value={userName} onChange = {handleUserNameChange} />
                </div>
                <div >
                    <label> password</label>
                    < input type="password" name ="password" value={password} onChange = {handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name ="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent(){ 
    //const param = useParams(); 
    const { userName } = useParams(); //  This hook will help to store all the params that comes along the URL. 
    return (
        <div className = "Welcome"> 
            <h1> Welcome to {userName}'s school of technology.</h1>
            <div> Welcom component</div>
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className = "ErrorComponent"> 
            <h1> We are working hard to fix the issue.</h1>
            <div> Reach out our team on ABC-DEF-GHI.</div>
        </div>
    )
}