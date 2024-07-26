import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const ViewDoctors = () =>
{
    const[Doctor,setDocter] = useState([]);
    const params = useParams()
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/Doctors",
            
        }).then((response)=>{
            setDocter(response.data)
        })
    },[])
    function handleDelete(){
       
        console.log(`http://127.0.0.1:5000/deleteDoctor/${params.docterSpecialization}`)
        axios({
            method:"delete",
            url:`http://127.0.0.1:5000/deleteDoctor/${params.docterSpecialization}`
        })
        navigator("/")
    }
    // useEffect(()=>{
    //     axios({
    //         method:"get"
    //     })
    // })
    return(
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Doctor Name</th>
                    <th>Specialization</th>
                    <th>Remove</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    Doctor.map(doctor=>
                        <tr key={doctor.docterSpecialization}>
                            <td>{doctor.docterName}</td>
                            <td>{doctor.docterSpecialization}</td>
                            <td><Link to={`/deleteDoctor/${doctor.id}`} onClick={handleDelete} className="btn btn-danger btn-sm w-75"><span className="bi bi-trash"></span> Remove</Link></td>
                            <td><Link  className="btn btn-warning btn-sm w-100" data-bs-target="#doctorEdit" data-bs-toggle="modal"><span className="bi bi-pen-fill"></span> Edit</Link></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <form>
        <div className="modal" id="doctorEdit">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Edit Doctor Details</h2>
                        <button className="btn btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className=" modal-body">
                        <dl>
                            <dt>Doctor Name</dt>
                            <dd><input type="text" name="doctorName" className="form-control" /></dd>
                            <dt>Specially</dt>
                            <dd><input type="text" name="specially" className="form-control" /></dd>
                        </dl>
                    </div>
                    <div className="modal-footer">
                    <button className="btn btn-success btn-sm">Save</button>
                    <button className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </>
    )
}
export default ViewDoctors