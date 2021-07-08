
import './App.css';
import Header from "./components/header";
import Addcontract from "./components/addcontract";
import Contractlist from "./components/contractlist";

import React , {useState,useEffect} from 'react';
import { uuid } from "uuidv4";




const App = () => {
    const localStorageKey='contractkey'
    const [contract,setContract]=useState([])


    useEffect(()=>{
        let retriveContract=JSON.parse(localStorage.getItem(localStorageKey))
        if (retriveContract) {
            setContract(retriveContract)
        }
    },[]);


    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(contract))
    },[contract]);


    const addContractHandler=(state)=>{
        setContract([...contract,{ id: uuid(), ...state }])
    }

    const deleteContractHandler=(id)=>{
        let newContractList= contract.filter((singleValueContract)=>{
              return singleValueContract.id !== id})
        setContract(newContractList)
    }




    return (
    <>
        <Header />
        <Addcontract addContractHandler={addContractHandler} />
        <Contractlist contract={contract} deleteContractHandler={deleteContractHandler} key={contract.id}  />

    </>
  );
};

export default App;