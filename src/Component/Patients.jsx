import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

const Patients = () =>
{
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            "patientName":"",
            "patientAge":"",
            "patientGender":""
        },
        onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5000/registerPatients",
                data:values
            })
            alert("Patient Added Successfully")
            navigate("/")
        }

    })
    return(
        <>
        <div className="card">
            <form onSubmit={formik.handleSubmit}>
            <div className="card-header bg-dark text-white">
                <h3>Add New Patients</h3>
            </div>
            <div className="card-body">
                <form>
                    <dl>
                        <dt>Patient Name</dt>
                        <dd><input type="text" name="patientName" className="form-control" onChange={formik.handleChange} /></dd>
                        <dt>Age</dt>
                        <dd><input type="text" name="patientAge" className="form-control" id="" onChange={formik.handleChange} /></dd>
                        <dt>Gender</dt>
                        <dd>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="Male" name="patientGender" onChange={formik.handleChange} id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="Female" name="patientGender" onChange={formik.handleChange} id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="Other" name="patientGender" onChange={formik.handleChange} id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Other
                        </label>
                        </div>
                        </dd>
                    </dl>
                </form>
            </div>
            <div className="card-footer bg-dark">
                <button className="btn btn-light">Add Patient</button>
            </div>
            </form>
        </div>
        </>
    )
}
export default Patients