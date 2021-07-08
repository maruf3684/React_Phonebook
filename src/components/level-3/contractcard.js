import React from 'react';
import user from '../../images/user.png'

const Contractcard = (props) => {

    const {id,name,email}=props.contract;

    return (
        <div className="item">
            <img className="ui avatar image" src={user}/>
            <div className="content">

                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i
           className=" trash alternate outline icon"
           onClick={() => props.deleteContractHandler(id)}
           />
        </div>
    );
};

export default Contractcard;