import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const ViewAppointment = () =>
{
    const[Appointment, setAppointment] = useState([])
    useEffect(()=>{
        axios({
            method:'get',
            url:"http://127.0.0.1:5000/Appointments"
        }).then((response)=>{
            setAppointment(response.data)
        })
    },[]);
    return(
        <>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Patient Name</th>
                <th>Doctor Name</th>
                <th>Appointment Date</th>
                <th>Remove</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
                {
                    Appointment.map(appointment=>
                        <tr>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.doctorName}</td>
                            <td>{appointment.date}</td>
                            <td><Link className="btn btn-danger btn-sm w-75"><span className="bi bi-trash"></span> Remove</Link></td>
                            <td><Link className="btn btn-warning btn-sm w-100" data-bs-target="#EditAppointment" data-bs-toggle="modal"><span className="bi bi-pen-fill"></span> Edit</Link></td>
                        </tr>
                    )
                }
            </tbody>
            <>
                <div className="modal" id="EditAppointment">
                    <div className=" modal-dialog">
                        <div className=" modal-content">
                            <div className=" modal-header">
                                <h2>Edit Appointment Details</h2>
                                <button className="btn btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className=" modal-body">
                                <dl>
                                    <dt>Patient Name</dt>
                                    <dd><input type="text" className="form-control" /></dd>
                                    <dt>Doctor Name</dt>
                                    <dd><input type="text" className="form-control" /></dd>
                                    <dt>Appointment Date</dt>
                                    <dd><input type="date" className="form-control" name="" id="" /></dd>
                                </dl>
                            </div>
                            <div className=" modal-footer">
                                <button className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cancel</button>
                                <button className="btn  btn-success btn-sm">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </table>
        </>
    )
}
export default ViewAppointment