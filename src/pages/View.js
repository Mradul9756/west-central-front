import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import "./View.css";


const View = () => {
    const [user, setUser] = useState({});

    const {Fname} = useParams();

    useEffect(() => {
        axios.get(`https://west-central.herokuapp.com/api/get/${Fname}`)
        .then((resp) => setUser({...resp.data[0]}));
    }, [Fname])

    return(
        <div style={{marginTop: "100px"}}>
            <div className='card'>
                <div className='card-header'>
                    <p>Contact Details</p>
                </div>
                <div className='container'>
                    <strong>ID: </strong>
                    <span>{user.Id}</span>
                    <br />
                    <br />
                    <strong>First Name: </strong>
                    <span>{user.Fname}</span>
                    <br />
                    <br />
                    <strong>Last Name: </strong>
                    <span>{user.Lname}</span>
                    <br />
                    <br />
                    <strong>Organization: </strong>
                    <span>{user.Org}</span>
                    <br />
                    <br />
                    <strong>Phone: </strong>
                    <span>{user.Phone}</span>
                    <br />
                    <br />
                    <strong>Position: </strong>
                    <span>{user.Position}</span>
                    <br />
                    <br />
                    <strong>Other Phone: </strong>
                    <span>{user.Other_phone}</span>
                    <br />
                    <br />
                    <strong>Email: </strong>
                    <span>{user.Email}</span>
                    <br />
                    <br />
                    <strong>WC Resident: </strong>
                    <span>{user.WC_Resident}</span>
                    <br />
                    <br />
                    <strong>Notes: </strong>
                    <span>{user.Notes}</span>
                    <br />
                    <br />
                    <strong>Allow Photos: </strong>
                    <span>{user.Allow_hotos}</span>
                    <br />
                    <br />
                    <strong>Want Info: </strong>
                    <span>{user.Want_info}</span>
                    <br />
                    <br />
                    <strong>Fallows Conversation: </strong>
                    <span>{user.Fallows_conversation}</span>
                    <br />
                    <br />
                    <strong>Durrett mtg: </strong>
                    <span>{user.Durrett_mtg}</span>
                    <br />
                    <br />
                    <strong>Boone St Bash: </strong>
                    <span>{user.Boone_St_Bash}</span>
                    <br />
                    <br />
                    <strong>WCDP: </strong>
                    <span>{user.WCDP}</span>
                    <br />
                    <br />
                    <strong>Racial Justice: </strong>
                    <span>{user.Racial_Justice}</span>
                    <br />
                    <br />
                    <strong>Heart: </strong>
                    <span>{user.HEART}</span>
                    <br />
                    <br />
                    <strong>Youth: </strong>
                    <span>{user.Youth}</span>
                    <br />
                    <br />
                    <strong>Hobbies: </strong>
                    <span>{user.Hobbies}</span>
                    <br />
                    <br />
                    <strong>Skill to Share: </strong>
                    <span>{user.Skill_to_share}</span>
                    <br />
                    <br />
                    <strong>Address: </strong>
                    <span>{user.Address}</span>
                    <br />
                    <br />
                    <strong>Neighbor day,BA: </strong>
                    <span>{user.Neighbor_Day_BA}</span>
                    <br />
                    <br />
                    <Link to="/">
                    <button type='Go Back'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default View