export default function ResetButton({resetValue}){
    return (
        <div>
            <button className='resetButton' onClick={resetValue}> Reset </button>
        </div>
    )
}