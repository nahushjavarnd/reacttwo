import { useEffect, useState } from "react";

const Rendaringlist = () => {
    const [todos, setTodos] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setTodos(data)
            })
            .catch((e) => {

                console.log(e.message);
            })
    }, [])

    const mystyle = {
        width: "95%",
        height: "150px" , 
        border: "1px solid blue",
        padding: "20px"
      };

    return (

        <div>
            <div>Returning Todos</div>

            <div >
                {
                    todos.map((todo, index) => {
                        return (
                            <section key={todo.id} style={mystyle}>
                                <div> Title : {todo.title}</div>
                                <div> Price : {todo.price}</div>
                                <div> Discription : {todo.description}</div>
                                <div>{todo.completed ? 'Completed' : 'Not Completed'}</div>
                                <br></br>
                            </section>

                        )
                    })
                }
            </div>
        </div>




    )
}

export default Rendaringlist;