const person = {
    name : "Thellai",
    address : { // object inside an object : 
        line1 : "no 50/223", 
        line2 : "Baker Street"
    },
    country : "london",
    profileArray : [ 'twitter', 'linked in', 'instagram' ], // arrays inside an object : 

    printProfiles : () =>{ // Defining a function inside object : 
        person.profileArray.map( // map is like for looop in java : 
            (profile) =>{
                console.log( 'This is from pritProfiles function :   ' + profile );
            }
        );
    },

    printProfielsInSimplerWay : () =>{
        person.profileArray.map(
            person => console.log( person )
        )
    }
}

export default function javaScript(){
    return(
        <> 
            <div> { person.name }</div>
            <div> { person.address.line1 }</div>
            <div> { person.printProfielsInSimplerWay() }</div>
            <div> { person.printProfiles() }</div>
            <div> { person.profileArray[0] }</div>
        </>
    )
}