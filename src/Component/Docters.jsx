import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

const Doctors = () =>
{
    const navigator = useNavigate(); 
    const formik = useFormik({
        initialValues:{
            "docterName":"",
            "docterSpecialization":""
        },
        onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5000/registerDocter",
                data:values
            })
            alert("New Doctor Added Successfully")
            navigator("/")
        }
    })
    return(
        <>
        <div className="card">
            <form onSubmit={formik.handleSubmit}>
            <div className="card-header bg-dark text-white">
                <h3>Add New Doctor</h3>
            </div>
            <div className="card-body">
                <form>
                    <dl>
                        <dt>Doctor Name</dt>
                        <dd><input type="text" className="form-control" name="docterName" onChange={formik.handleChange} /></dd>
                        <dt>Specially</dt>
                        <dd><input type="text" name="docterSpecialization" className="form-control" id="" onChange={formik.handleChange}  /></dd>
                    </dl>
                </form>
            </div>
            <div className="card-footer bg-dark">
                <button className="btn btn-light">Add Doctor</button>
            </div>
            </form>
        </div>
        </>
    )
}
export default Doctors 