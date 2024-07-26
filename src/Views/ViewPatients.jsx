import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ViewPatients = () =>
{
    const[patients,setPatients] = useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/Patients"
        })
        .then((response)=>{
            setPatients(response.data)
            console.log(response.data)
        })
    },[]);
    return(
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Patient Age</th>
                    <th>Gender</th>
                    <th>Remove</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    patients.map(Patients=>
                        <tr>
                            <td>{Patients.patientName}</td>
                            <td>{Patients.patientAge}</td>
                            <td>{Patients.patientGender}</td>
                            <td><Link className="btn btn-danger btn-sm w-75"><span className="bi bi-trash"></span> Remove</Link></td>
                            <td><Link className="btn btn-warning btn-sm w-100" data-bs-target="#EditPatient" data-bs-toggle="modal"><span className="bi bi-pen-fill"></span> Edit</Link></td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            <div>
                <div className="modal" id="EditPatient">
                    <div className=" modal-dialog">
                        <div className=" modal-content">
                            <div className=" modal-header">
                                <h2>Edit Patient Details</h2>
                                <button className="btn btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className=" modal-body">
                                <dl>
                                    <dt>Patient Name</dt>
                                    <dd><input type="text" className="form-control" name="" id="" /></dd>
                                    <dt>Patient Age</dt>
                                    <dd><input type="text" className="form-control" name="" id="" /></dd>
                                    <dt>Gender</dt>
                                    <dd>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" value="Male" name="patientGender"  id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Male
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" value="Female" name="patientGender"  id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Female
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" value="Other" name="patientGender"  id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Other
                                    </label>
                                    </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success btn-sm">Save</button>
                                <button className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}
export default ViewPatients