import React, { useEffect, useState } from 'react'
import './Search.css';
import { Link } from 'react-router-dom';

export default function Search({search}) {

    const [num, setNum] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log(search);
        if(search){
            fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${search}&key=9c7dded4-61d4-43c9-8352-9fa9bfbfc87a`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    }
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setNum(result['results'])
                if(result['results']){
                    setList(result['data']['recipes'])
                } else {
                    setList([])
                }
            })
            .catch(error => {
                setNum(0)
                setList([])
            });
        }
    }, [search])

    return (
        <div className="f1 searchResultSpace">
            {
                search === '' ? 
                <>
                    <h3>Search For Recipe</h3>
                    {/* <Link to="/bookmark" className="result-card flex-inline">
                        <div className="img-holder">
                            <img className="center-it" src="http://forkify-api.herokuapp.com/images/5809_MEDIUMed7c.jpg" alt="" />
                        </div>
                        <div className="f1 flex-col-center" style={{height: "70px", padding: "5px", fontSize: "0.7em", alignItems: "flex-start"}}>
                            <b style={{flex: 1}}>Chocolate Krispie chick</b>
                            <p>BBC Good Food</p>
                        </div>
                    </Link> */}
                </>
                : 
                    <>
                        <p>{num} results found</p>
                        {
                            list ? 
                                list.map(recipe => 
                                    <Link to={"recipe/"+recipe['id']} className="result-card flex-inline">
                                        <div className="img-holder">
                                            <img className="center-it" src={recipe['image_url']} alt="" />
                                        </div>
                                        <div className="f1 flex-col-center" style={{minHeight: "70px", padding: "5px", fontSize: "0.7em", alignItems: "flex-start"}}>
                                            <b style={{flex: 1}}>{recipe['title']}</b>
                                            <p>{recipe['publisher']}</p>
                                        </div>
                                    </Link>
                                    )
                                : 
                                 <></>
                        }
                    </>
            }
        </div>
    )
}
