import React, { Fragment, useEffect, useState } from "react";

const FunctionalComp = () => {

    const [name, setName] = useState('Ketrina')

    const [age, setAge] = useState(100)

    const [user, setUser] = useState({

        Username: 'Kushal',
        Password: 'Ketrina'
    })

    //=================================================================
    // call back function annonyamus function
    // this component very time get update when compnent is updated
    // useEffect(() => {

    //     console.log('ruuning effect')
    // })
    //===========================================================================
    // when we click on update or do any chnages at time he effect

    // and only once time change

    // useEffect(() => {
    //     fetch('api no 3')
    //     console.log('ruuning effect on perticular name or condtion')
    // }, [name])

    // useEffect(() => {
    //     fetch('api no 5')
    //     console.log('ruuning effect on perticular agee or condtion')
    // }, [age])
    //===========================================================================

    // in this condition 2 log statment print
    // this are all mounting 
    useEffect(() => {
        fetch('api no 6')
        console.log('ruuning effect on perticular agee or condtion')
    }, [name, user])

    //===============================================================================

    useEffect(() => {
        //clearTimeout(timer)
        //document.removeEventListener('click', someListener)

        return () => {
           
            console.log('unmounting');
        }
    }, [])



    //distruchring means assigne value from array to endependant
    //useState()
    let show = true
    let showjax

    // if(show){

    //     showjax = <button> show </button>

    // }

    return (
        <>

            <div>name - {name} </div>
            <div>age - {age} </div>
            <div>Hello </div>
            <div>Hello </div>
            <br></br>
            {show && <button onClick={() => setName('Nahush')}>chnages on name</button>}
            <button onClick={() => setAge(101)}>chnages on age</button>

            <div>User info</div>
            <div>username:{user.Username}</div>
            <div>password:{user.Password} </div>
            <button onClick={() => setUser({ Username: 'Nahush', Password: 'Ketrina' })}> Update</button>

        </>

    )

}
export default FunctionalComp