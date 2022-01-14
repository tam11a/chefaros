import React, { useEffect, useState } from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { MdOutlineClose } from 'react-icons/md'
import { RiCopyrightLine } from 'react-icons/ri'
import './Recipe.css'
import {
    useParams,
    useHistory
  } from "react-router-dom";

export default function Recipe() {
    let { recipe_id } = useParams();
    const [content, setContent] = useState(null);
    let history = useHistory();

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipe_id}?key=9c7dded4-61d4-43c9-8352-9fa9bfbfc87a`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    }
            })
            .then(res => res.json())
            .then(result => {
                if(result['status'] === 'success')
                    {
                        setContent(result['data']['recipe'])
                        console.log(result['data']['recipe']);
                        //console.log(content);
                    }
                    //setContent(null)
                else 
                    setContent(null)
            })
            .catch(error => {
                // pass
            });
    }, [recipe_id])

    return (
        <div className="flex-col container scrl">
        {
            content !== null ?
                <>
                    <img src={content ? content['image_url'] : ""} alt="dp" />
                    <div className="backicon" onClick={() => {
                        console.log(history.length);
                        if(history.length > 2){
                            history.goBack();
                        } else {
                            history.push('/dashboard');
                        }
                    }}>
                        <MdOutlineClose />
                    </div>
                    <div className="title">{content ? content['title'] : ""}</div>
                    <div className="recipe-body f1">
                        {
                            content['ingredients'] ? 
                                content['ingredients'].map(ingrd => 
                                    <div className="intg flex-col">
                                            <div className="lint flex-inline">
                                                <VscDebugBreakpointLog />                                            
                                                <div className="qnt">{ingrd['quantity']}</div>
                                                <div className="unit">{ingrd['unit']}</div>    
                                            </div>
                                            <div className="ldes">
                                                {ingrd['description']}
                                            </div>
                                        </div>   
                                    )
                                : 
                                 <></>
                        }
                    </div>
                    <div className="publisher flex-inline"> <RiCopyrightLine /> <span>{content['publisher']}</span></div>
                </>
            : 
             <p>Loading</p>
        }
        </div>
        
    )
}
