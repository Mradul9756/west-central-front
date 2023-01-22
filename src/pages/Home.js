// generated snippet
// table component work
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css"
import {toast} from "react-toastify";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    // fetch all data from mysql database using api
    // using async for api 
    // http://localhost:5000/api/get - backend API
    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    // intial app load will fetch all the data from backend
    // table is in the container tableContainer to easily change css
    // body is also a container (later used to change overflow)
    useEffect(() =>{
        loadData();
    }, []);

    const deleteContact = (Fname) => {
        if(window.confirm("Are you sure you wanted to delete this contact?")) {
            axios.delete(`http://localhost:5000/api/remove/${Fname}`);
            alert("Contact deleted successfully");
            setTimeout(() => loadData(), 500);
        }
    }
    return(
        <div className='Body' style={{marginTop: "15px"}}>
            <h1> West Central  Contacts</h1>
            <Link to="/addContact">
                <button className='btn btn-contact'>Add Contact</button>
            </Link>
            <div className='TableContainer'>
                <div className="styled-table">
                <thead>
                    <tr className='tr'>
                        <th style={{textAlign: "center"}}>ACTION</th>
                        <th style={{textAlign: "center"}}>Id</th>
                        <th style={{textAlign: "center"}}>First Name</th>
                        <th style={{textAlign: "center"}}>Last Name </th>
                        <th style={{textAlign: "center"}}>Organization</th>
                        <th style={{textAlign: "center"}}>Position </th>
                        <th style={{textAlign: "center"}}>Phone </th>
                        <th style={{textAlign: "center"}}>Other Phone</th>
                        <th style={{textAlign: "center"}}>Email </th>
                        <th style={{textAlign: "center"}}>WC Resident </th>
                        <th style={{textAlign: "center"}}>Notes </th>
                        <th style={{textAlign: "center"}}>Allow Photos </th>
                        <th style={{textAlign: "center"}}>Want Info </th>
                        <th style={{textAlign: "center"}}>Fallows Conversation </th>
                        <th style={{textAlign: "center"}}>Durrett mtg </th>
                        <th style={{textAlign: "center"}}>Boone St Bash </th>
                        <th style={{textAlign: "center"}}>WCDP </th>
                        <th style={{textAlign: "center"}}>Racial Justice </th>
                        <th style={{textAlign: "center"}}>Heart </th>
                        <th style={{textAlign: "center"}}>Youth</th>
                        <th style={{textAlign: "center"}}>Hobbies</th>
                        <th style={{textAlign: "center"}}>Skill to Share</th>
                        <th style={{textAlign: "center"}}>Address</th>
                        <th style={{textAlign: "center"}}>Neighbor day,BA</th>
                        
                        {/* First Name,Last Name,Organization,Position,Phone,Other Phone,Email,WC Resident,Notes,Allow Photos,Want Info,Fallows Conversation,
                        Durrett mtg,Boone St Bash,WCDP,Racial Justice,Heart,Youth,Hobbies,Skill to Share,Address,Neighbor day_BA  */}
                    </tr>
                </thead>
                <tbody>
                {/* FName,LName,Org,Position,Phone,Other_phone,Email,WC_resident,Notes,Allow_photos,Want_info,Fallows_conversation,
                Durrett_mtg,Boone_st_Bash,WCDP,Racial_justice,HEART,Youth,Hobbies,Skill_to_Share,Address,Neighbor_day_BA */}
                    {data.map((item, index) => {
                        return(
                            <tr key={item.id}>
                                <td>
                                    <Link to={`/update/${item.Fname}`}>
                                    <button className='btn btn-edit'>Edit</button>
                                    </Link>
                                    <button className='btn btn-delete' onClick={() => deleteContact(item.Fname)}>Delete</button>
                                    <Link to={`/view/${item.Fname}`}>
                                    <button className='btn btn-view'>View</button>
                                    </Link>
                                </td>
                                <th scope="row">{index+1}</th>
                                <td>{item.Fname}</td>
                                <td>{item.Lname}</td>
                                <td>{item.Org}</td>
                                <td>{item.Position}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Other_phone}</td>
                                <td>{item.Email}</td>
                                <td>{item.WC_Resident}</td>
                                <td>{item.Notes}</td>
                                <td>{item.Allow_photos}</td>
                                <td>{item.Want_info}</td>
                                <td>{item.Fallows_conversation}</td>
                                <td>{item.Durrett_mtg}</td>
                                <td>{item.Boone_St_Bash}</td>
                                <td>{item.WCDP}</td>
                                <td>{item.Racial_Justice}</td>
                                <td>{item.HEART}</td>
                                <td>{item.Youth}</td>
                                <td>{item.Hobbies}</td>
                                <td>{item.Skill_to_Share}</td>
                                <td>{item.Address}</td>
                                <td>{item.Neighbor_day_BA}</td>
                            </tr>
                        )
                    })}
                </tbody>
                </div>
            </div>
        </div>
    );
};
export default Home;
