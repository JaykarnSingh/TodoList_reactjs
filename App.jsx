import React, { useState } from "react";
import TodoList from './TODOLIST.jsx';
const App=()=>{
 const [inputlist,setinputlist]=useState();
 const [items,setitems]=useState([]);

 const itemEvent=(event)=>{
setinputlist(event.target.value);
 };

 const listofitem=()=>{
setitems((olditems)=>{
    return [...olditems,inputlist];
})
setinputlist('');
 };
 const deleteitems=(id)=>{

    setitems((olditems)=>{
        return olditems.filter((arrElem,index)=>{
        return index !==id;
        })
    })
};
    return(<>
    <div className="main_div">
    <div className="center_div">
     <br/>
     <h1>ToDo list</h1>
     <br/>
     <input type='text' value={inputlist} onChange={itemEvent} placeholder="Add a Item" />
     <button onClick={listofitem}>+</button>
      <hr/>
     <ol>
      
       { items.map((itemval,index)=>{
           return <TodoList
            key={index}
           id={index}
            text={itemval} 
            onSelect={deleteitems}
            />;
        })}

     </ol>
    </div>
    </div>     
    </>
    );
};
export default App;