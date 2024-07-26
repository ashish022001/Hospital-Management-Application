import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Appointments from "./Appointments"
import Patients from "./Patients"
import Doctors from "./Docters"
import Home from "./Home"
import ViewAppointment from "../Views/ViewAppointement"
import ViewDoctors from "../Views/ViewDoctors"
import ViewPatients from "../Views/ViewPatients"

const Index = () =>
{
    return(
        <>
        <div className="container-fluid bg-light" style={{height:"100vh"}}>
            <BrowserRouter>
        <header className=" d-flex justify-content-between align-items-center bg-dark p-1 text-white ">
            <h2 className="p-2">Hospital Management Application using MERN Stack</h2>
            <nav>
                <Link to={'/appointments'} className="text-white p-2" style={{textDecoration:'none'}}>Appointments</Link>
                <Link to={'/patients'} className="text-white p-2" style={{textDecoration:'none'}}>Patients</Link>
                <Link to={'/doctors'} className="text-white p-2 me-5" style={{textDecoration:'none'}}>Doctors</Link>
            </nav>
        </header>
        <div className="row">
        <main className="col-2 m-4">
                <nav>
                    <Link to={"/viewAppointment"} className="btn btn-primary w-100 m-2 btn-sm">View Appointments</Link>
                    <Link to={"/viewPatient"} className="btn btn-primary w-100 m-2 btn-sm">View Patients</Link>
                    <Link to={"/viewDoctor"} className="btn btn-primary w-100 m-2 btn-sm">View Doctors</Link>
                </nav>
            </main>
        <section className="m-4 col-8">
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/appointments" Component={Appointments} ></Route>
            <Route path="/patients" Component={Patients}></Route>
            <Route path="/doctors" Component={Doctors}></Route>
            <Route path="/viewAppointment" Component={ViewAppointment}></Route>
            <Route path="/viewPatient" Component={ViewPatients}></Route>
            <Route path="/viewDoctor" Component={ViewDoctors}></Route>

        </Routes>
        </section>
        </div>
        </BrowserRouter>
        </div>        
        </>
        )
}
export default Index