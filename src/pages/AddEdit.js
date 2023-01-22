// add and update contact in the same page
import React, {useState, useEffect} from 'react';
import {useParams, Link, Navigate} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"
import "./AddEdit.css"
import { useNavigate } from 'react-router-dom';

const intialState = {
    fname: "",lname: "",org: "",position: "",phone: "",Other_Phone: "",email: "",WC_Resident: "",
    notes: "",Allow_Photos: "",Want_Info: "",Fallows_Conversation: "",durrett_mtg: "",boone_St_Bash: "",wcdp: "",
    racial_Justice: "",Heart: "",youth: "",hobbies: "",skill_to_Share: "",address: "",neighbor_day_BA: "",
    };

const AddEdit = () =>{
    const [state, setState] = useState(intialState);

    const {fname,lname,org,position,phone,Other_phone,email,WC_resident,notes,Allow_photos,Want_info,Fallows_conversation,
        durrett_mtg,boone_St_bash,wcdp,racial_Justice,Heart,youth,hobbies,skill_to_Share,address,neighbor_day_BA} = state;
    
    // for timeout setting
    const navigate = useNavigate();
    
    // to get the fname from the table (use for record update)
    const {Fname} =  useParams();

    // only run when we have the fname (user is updating the existing contact)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/${Fname}`)
        .then((resp) => setState({...resp.data[0]}))
    }, [Fname])
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname){
            alert("please provide value for First Name");
        } else{
            
        axios.post("http://localhost:5000/api/post",{
            fname,lname,org,position,phone,Other_phone,email,WC_resident,notes,Allow_photos,Want_info,Fallows_conversation,
            durrett_mtg,boone_St_bash,wcdp,racial_Justice,Heart,youth,hobbies,skill_to_Share,address,neighbor_day_BA
        })
        .then(() => {
            setState({fname: "",lname: "",org: "",position: "",phone: "",Other_Phone: "",email: "",WC_Resident: "",
            notes: "",Allow_Photos: "",Want_Info: "",Fallows_Conversation: "",durrett_mtg: "",boone_St_Bash: "",wcdp: "",
            racial_Justice: "",Heart: "",youth: "",hobbies: "",skill_to_Share: "",address: "",neighbor_day_BA: ""});
        })
        .catch((err) => toast.error(err.response.data));
        alert("Contact Added Successfully")
        setTimeout(() => navigate("/"), 500);
        console.log(fname)
    }
    };


    const handleInputChange = (e) => {
        const{ name, value } = e.target;
        setState({ ...state, [name]: value});
    };

    return(
        <div style={{margin: "100px"}}>
            <form style = {{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
            onSubmit={handleSubmit}
            >
                <label htmlFor='fname'>First Name</label>
<input
             type="text"
             id="fname"
             name="fname"
             placeholder='Matthew'
             value={fname || ""}
             onChange={handleInputChange}
             />
<label htmlFor='lname'>Last Name</label>
<input
             type="text"
             id="lname"
             name="lname"
             placeholder='Abbott'
             value={lname || ""}
             onChange={handleInputChange}
             />
<label htmlFor='org'>Organization Name</label>
<input
             type="text"
             id="org"
             name="org"
             placeholder='XYZ Inc'
             value={org || ""}
             onChange={handleInputChange}
             />
<label htmlFor='position'>Position</label>
<input
             type="text"
             id="position"
             name="position"
             placeholder='Manager'
             value={position || ""}
             onChange={handleInputChange}
             />
<label htmlFor='phone'>Phone Number</label>
<input
             type="text"
             id="phone"
             name="phone"
             placeholder='123-456-7890'
             value={phone || ""}
             onChange={handleInputChange}
             />
<label htmlFor='Other_phone'>Other Phone Number</label>
<input
             type="text"
             id="Other_phone"
             name="Other_phone"
             placeholder='098-765-4321'
             value={Other_phone || ""}
             onChange={handleInputChange}
             />
                <label htmlFor='email'>Email</label>
<input
             type="text"
             id="email"
             name="email"
             placeholder='example@email.com'
             value={email || ""}
             onChange={handleInputChange}
             />
<label htmlFor='WC_resident'>WC Resident</label>
<input
             type="text"
             id="WC_resident"
             name="WC_resident"
             placeholder='yes or no'
             value={WC_resident || ""}
             onChange={handleInputChange}
             />
<label htmlFor='notes'>Notes</label>
<input
             type="text"
             id="notes"
             name="notes"
             placeholder='Additional information'
             value={notes || ""}
             onChange={handleInputChange}
             />
<label htmlFor='Allow_photos'>Allow Photos</label>
<input
             type="text"
             id="Allow_photos"
             name="Allow_photos"
             placeholder='yes or no'
             value={Allow_photos || ""}
             onChange={handleInputChange}
             />
                <label htmlFor='Want_info'>Want Info</label>
                <input
                type="text"
                id="Want_info"
                name="Want_info"
                placeholder='yes or no'
                value={Want_info || ""}
                onChange={handleInputChange}
                />
                <label htmlFor='Fallows_conversation'>Fallows Conversation</label>
<input
             type="text"
             id="Fallows_conversation"
             name="Fallows_conversation"
             placeholder='yes or no'
             value={Fallows_conversation || ""}
             onChange={handleInputChange}
             />
<label htmlFor='durrett_mtg'>Durrett Mtg</label>
<input
             type="text"
             id="durrett_mtg"
             name="durrett_mtg"
             placeholder='yes or no'
             value={durrett_mtg || ""}
             onChange={handleInputChange}
             />
<label htmlFor='boone_St_bash'>Boone St Bash</label>
<input
             type="text"
             id="boone_St_bash"
             name="boone_St_bash"
             placeholder='yes or no'
             value={boone_St_bash || ""}
             onChange={handleInputChange}
             />
<label htmlFor='wcdp'>Wcdp</label>
<input
             type="text"
             id="wcdp"
             name="wcdp"
             placeholder='yes or no'
             value={wcdp || ""}
             onChange={handleInputChange}
             />
<label htmlFor='racial_Justice'>Racial Justice</label>
<input
             type="text"
             id="racial_Justice"
             name="racial_Justice"
             placeholder='yes or no'
             value={racial_Justice || ""}
             onChange={handleInputChange}
             />
<label htmlFor='Heart'>Heart</label>
<input
             type="text"
             id="Heart"
             name="Heart"
             placeholder='yes or no'
             value={Heart || ""}
             onChange={handleInputChange}
             />
<label htmlFor='youth'>Youth</label>
<input
             type="text"
             id="youth"
             name="youth"
             placeholder='yes or no'
             value={youth || ""}
             onChange={handleInputChange}
             />
<label htmlFor='hobbies'>Hobbies</label>
<input
             type="text"
             id="hobbies"
             name="hobbies"
             placeholder='Hobbies'
             value={hobbies || ""}
             onChange={handleInputChange}
             />
<label htmlFor='skill_to_Share'>Skill to Share</label>
<input
             type="text"
             id="skill_to_Share"
             name="skill_to_Share"
             placeholder='Skills'
             value={skill_to_Share || ""}
             onChange={handleInputChange}
             />
<label htmlFor='address'>Address</label>
<input
             type="text"
             id="address"
             name="address"
             placeholder='123 Main St'
             value={address || ""}
             onChange={handleInputChange}
             />
                <label htmlFor='neighbor_day_BA'>Neighbor day BA</label>
                <input
                type="text"
                id="neighbor_day_BA"
                name="neighbor_day_BA"
                placeholder='yes or no'
                value={neighbor_day_BA || ""}
                onChange={handleInputChange}
                />
                <button type = "submit"> Submit</button>
                    
                {/* <button type = "submit" value={Fname ? "Update" : "Save"}>Save</button> */}
                {/* <Link to="/">
                    <input type="button" value="Go Back" />
                </Link> */}
            </form>
        </div>
    )
} 

export default AddEdit;