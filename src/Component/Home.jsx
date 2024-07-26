import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import ViewAppointment from "../Views/ViewAppointement"

const Home = () =>
{
    return(
        <div className="text-center " style={{height:"300px"}}>
            <h1>WelCome</h1>
            <h2>To</h2>
            <h1>Hospital Management Application</h1>
        </div>
    )
}
export default Home