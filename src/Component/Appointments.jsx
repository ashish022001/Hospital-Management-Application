import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

const Appointments = () =>
{
    const navigate = useNavigate()
    const formik = useFormik({
         initialValues:{
            "patientName":"",
            "doctorName":"",
            "date":""
         },
         onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5000/registerAppointment",
                data:values
            })
            alert("Appointment Added Successfully")
            navigate("/viewAppointment")
         }   
    }) 
    return(
       
        <>
        <div className="card">
        <form onSubmit={formik.handleSubmit}>
            <div className="card-header bg-dark text-white">
                <h3>Add New Appointments</h3>
            </div>
            <div className="card-body">
                
                    <dl>
                        <dt>Patient Name</dt>
                        <dd><input type="text" className="form-control" name="patientName" onChange={formik.handleChange} /></dd>
                        <dt>Doctor Name</dt>
                        <dd><input type="text" className="form-control" id="" name="doctorName" onChange={formik.handleChange} /></dd>
                        <dt>Date</dt>
                        <dd><input type="date" className="form-control" name="date" id="" onChange={formik.handleChange} /></dd>
                    </dl>
            </div>
            <div className="card-footer bg-dark">
                <button className="btn btn-light">Add Appointments</button>
            </div>
            </form>
        </div>
        </>
    )
}
export default Appointments