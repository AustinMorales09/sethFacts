import React from 'react';
import Facts from './facts';
import Wave from '../src/wave.svg';
import { Link } from 'react-router-dom';


const Header = () => {

const handleClick = (e) => {
        //e.preventDefault();
    }
console.log(Facts[0])


    return (
        <div id="header">
        <div className="headDiv">
        <div className="headCont text-center">
        <a href='/'>
            <h1 className="">header component</h1></a>
            <p className="text-center">Would you like to know some fun facts about Web Developers? Click an option below to learn a few things.</p>
        </div>
           <div className="" id="buttons">
               <Link to={'/' + Facts[0].id} className="btn btn-outline-dark" onClick={handleClick}>Fact 1</Link>
               <Link to={'/' + Facts[1].id} className="btn btn-outline-dark" onClick={handleClick}>Fact 2</Link>
               <Link to={'/' + Facts[2].id} className="btn btn-outline-dark" onClick={handleClick}>Fact 3</Link>
           </div></div>
           <img src={Wave} alt=""/>
        </div>
    )
}

export default Header
