import React from 'react'

// style
import './Footer.css'

// icons
import { MdClose } from 'react-icons/md'
import { GiChefToque } from 'react-icons/gi'
import { GoSearch } from 'react-icons/go'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'

// 3rd party
import { Link, useLocation, useHistory } from 'react-router-dom'

export default function Footer({setSearch}) {

    let history = useHistory();

    const searchClose = () => {
        if(document.querySelector(".searchinputpanel").value){
            document.querySelector(".searchinputpanel").value = ""
            getResult()
        } else {
            history.push('/dashboard');
        }
    }

    const getResult = () => {
        setSearch(document.querySelector(".searchinputpanel").value);
    }

    return (
        <div className="Footer flex-inline">
            {
                useLocation().pathname === '/search' ? 
                    <div className="searchBox flex-inline">
                        <div className="inputBox flex-inline">
                            <GoSearch />
                            <input type="text" placeholder="Find Recipe" className="searchinputpanel f1" onKeyUp={() => {getResult()}}/>
                            <MdClose onClick={() => {searchClose()}}/>
                        </div>
                    </div>
                : 
                    <></>
            }
            <Link to='/dashboard' className={useLocation().pathname === '/dashboard' ? "foot-op flex-inline active" : "foot-op flex-inline"}>
                <GiChefToque />
                <span>Feed</span>
            </Link>
            <Link to='/search' className={useLocation().pathname === '/search' ? "foot-op flex-inline active" : "foot-op flex-inline"}>
                <GoSearch />
                <span>Search</span>
            </Link>
            <Link to='/bookmark' className={useLocation().pathname === '/bookmark' ? "foot-op flex-inline active" : "foot-op flex-inline"}>
                <BsFillBookmarkHeartFill />
                <span>Saved</span>
            </Link>
            {/* <Link to='/settings' className={useLocation().pathname === '/settings' ? "foot-op flex-inline active" : "foot-op flex-inline"}>
                <GoSettings />
                <span>Settings</span>
            </Link> */}
        </div>
    )
}
