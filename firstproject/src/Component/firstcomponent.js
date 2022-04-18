import React, { Fragment, useState } from "react";

const FunctionalComp = () => {

    const [name, setName] = useState('Ketrina')

    const [age, setAge] = useState(100)

    const [user, setUser] = useState({

        Username: 'Kushal',
        Password: 'Ketrina'
    })

    //distruchring means assigne value from array to endependant
    useState()
    let show = true
    let showjax

    // if(show){

    //     showjax = <button> show </button>

    // }

    return (
        <>

            <div>name - {name} </div>
            <div>Hello </div>
            <div>Hello </div>
            <div>Hello </div>
            <br></br>
            {show && <button onClick={() => setName('Nahush')}>show</button>}


            <div>User info</div>
            <div>username:{user.Username}</div>
            <div>password:{user.Password} </div>
            <button onClick={() => setUser({Username:'Nahush',Password: 'Ketrina'})}> Update</button>

        </>

    )

}
export default FunctionalComp