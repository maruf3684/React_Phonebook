import React , {useState} from 'react';

const Addcontract = (props) => {

    let primarystate={
        name:"",
        email:""
    }

    const [state, setState] = useState(primarystate);



    const add = (e) => {
        e.preventDefault();
        if (state.name === "" || state.email === "") {
            alert("ALl the fields are mandatory!");
        }

        props.addContractHandler(state)
        setState({name:"",email:""})


    };


    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add} >
                <div className="field">
                    <label>Name</label>

                    <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>{setState({...state,name:e.target.value})}} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text" name="email" placeholder="Email" value={state.email} onChange={(e)=>{setState({...state,email:e.target.value})}} />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
};

export default Addcontract;