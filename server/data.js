var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var conStr = "mongodb://127.0.0.1:27017";
var app = express();
app.use(cors());
app.use(express.urlencoded({
        extended:true
}));
app.use(express.json())

app.get("/Appointments",(req,res)=>{
        mongoClient.connect(conStr)
        .then(obj=>{
            var database = obj.db("Hospital_Managemet")
            database.collection("Appointments").find({}).toArray().then(document=>
            {
                res.send(document);
                res.end();  
            })
        })
        .catch(err=>{
            console.log(err)
        })
})

// Add New Appointment
app.post("/registerAppointment",(req,res)=>{
    var AppointmentsDetails = {
        patientName:req.body.patientName,
        doctorName:req.body.doctorName,
        date:req.body.date
    }
    mongoClient.connect(conStr)
    .then(obj=>{
        var database = obj.db("Hospital_Managemet");
        database.collection("Appointments").insertOne(AppointmentsDetails)
        .then(()=>
        {
            console.log("Record Inserted")
            res.redirect("/Appointments");
        })
    })
})

// Add new Patients
app.get("/Patients",(req,res)=>{
    mongoClient.connect(conStr)
    .then(obj=>{
        var database = obj.db("Hospital_Managemet")
        database.collection("Patients").find({}).toArray().then(document=>
        {
            res.send(document);
            res.end();  
        })
    })
    .catch(err=>{
        console.log(err)
    })
})


app.post("/registerPatients",(req,res)=>{
    var AppointmentsDetails = {
        patientName:req.body.patientName,
        patientAge:req.body.patientAge,
        patientGender:req.body.patientGender
    }
    mongoClient.connect(conStr)
    .then(obj=>{
        var database = obj.db("Hospital_Managemet");
        database.collection("Patients").insertOne(AppointmentsDetails)
        .then(()=>
        {
            console.log("Record Inserted")
            res.redirect("/Patients");
        })
    })
})

// Add New Doctor

app.get("/Doctors",(req,res)=>
{
    mongoClient.connect(conStr)
    .then(obj=>
    {
        var database = obj.db("Hospital_Managemet")
        database.collection("Doctors").find({}).toArray().then(document=>
        {
            res.send(document);
            res.end()
        })
    })
    .catch(err=>{
        console.log(err)
    })
})
app.post("/registerDocter",(req,res)=>{
    var doctorDetails = {
        docterName:req.body.docterName,
        docterSpecialization:req.body.docterSpecialization
    }
    mongoClient.connect(conStr)
    .then(obj=>{
        var database = obj.db("Hospital_Managemet")
        database.collection("Doctors").insertOne(doctorDetails)
        .then(()=>{
            console.log("Record Inserted")
            res.redirect("/Doctors")
        })
    })
})

// Delete Doctor Details

app.delete("/deleteDoctor/:id", (req, res) => {
    var doctor_id = req.params.docterSpecialization;
    mongoClient.connect(conStr).then((clientObject) => {
      var database = clientObject.db("Hospital_Managemet");
      database
        .collection("Doctors")
        .deleteOne({ id: doctor_id })
        .then((result) => {
          console.log(`Doctor Remove`);
          res.redirect("/");
        });
    });
  });

app.listen(5000);
console.log("Server Started : http://127.0.0.1:5000")
