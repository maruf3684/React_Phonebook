import React from 'react';
import Contractcard from "./level-3/contractcard";

const Contractlist = (props) => {


    const deleteContractHandler=(id)=>{
        props.deleteContractHandler(id)
    }

   const rendercontractlist= props.contract.map((contract)=>{
        return(
         <Contractcard contract={contract} deleteContractHandler={deleteContractHandler} key={contract.id}/>
        )
    })
    
    return (
        <>
            {rendercontractlist}
        </>
    );
};

export default Contractlist;