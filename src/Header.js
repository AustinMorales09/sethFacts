import React from 'react';
import Facts from './facts';
import Wave from '../src/wave.svg';



const Header = () => {

const handleClick = (e) => {
        //e.preventDefault();
    }



    return (
        <div id="header">
        <div className="headDiv">
        <div className="headCont text-center">
        <a href='/'>
            <h1 className="">header component</h1></a>
            <p className="text-center">Would you like to know some fun facts about Web Developers? Click an option below to learn a few things.</p>
        </div>
           <div className="" id="buttons">
               <a href={'/' + Facts[0].id} className="btn btn-outline-dark" onClick={handleClick}>Fact 1</a>
               <a href={'/' + Facts[1].id} className="btn btn-outline-dark" onClick={handleClick}>Fact 2</a>
               <a href={'/' + Facts[2].id} className="btn btn-outline-dark" onClick={handleClick}>Fact 3</a>
           </div></div>
           <img src={Wave} alt=""/>
        </div>
    )
}

export default Header
