// Import Student Controller
const PatientController = require("../controller/PatientController");

//import express
const express = require("express");

//buat object router
const router = express.Router();

//Testing
router.get("/", (req, res) => {
  res.send("Hello Soulthan");
});

//Buat Routing Student
router.get("/patients", PatientController.index); //Perintah untuk menampilkan data patients

router.post("/patients", PatientController.store); //perintah untuk menambahkan data patients

router.put("/patients/:id", PatientController.update); //perintah untuk mengedit data patients

router.delete("/patients/:id", PatientController.destroy); //perintah untuk menghapus patients

router.get("/patients/:id", PatientController.show); //perintah untuk menampilkan data patients berdasarkan id

router.get("/patients/search/:name", PatientController.search); // Perintah untuk menampilkan nama berdasarkan nama

router.get("/patients/status/positive", PatientController.positive); // Perintah untuk Positive

router.get("/patients/status/dead", PatientController.dead); // Perintah untuk menampilkan orang meninggal

router.get("/patients/status/recovered", PatientController.recovered); // Perintah untuk Recovered

// Export router
module.exports = router;