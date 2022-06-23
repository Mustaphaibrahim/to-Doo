import React, {useState} from 'react';

const List = ()=>
{
    
    const [input,setInput]=useState('');
    const [taskes,setTaskes]=useState([]);
    

    return(
        <>
    <input type="text" className="input1" value={input} onChange={(text) =>
        {
            setInput(text.target.value);
        }}></input>
    <button className="btn" onClick={() =>
        {
            if (input=== '')
            {
                alert('Please Add Your Text')
            }
            else
            {
                setTaskes((taskes)=>
                    [...taskes, input])
                    setInput('')
            }
        }}>Click</button>
        <ul>
            {
                taskes.map((task,i)=>
                {
                    return(
                        <li key={i}>
                            {task}
                            <span onClick={()=>
                                {
                                    setTaskes(taskes.filter((item,l)=> 
                                    {
                                        return(l !== i)
                                    }))
                                }}><img src="https://img.icons8.com/material/24/000000/filled-trash.png"/></span>
                        </li>
                    )
                })
            }
        
        </ul>
    </>
    )
};

export default List;