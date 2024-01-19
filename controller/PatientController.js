// import Model Patient
const Patient = require("../models/Patient");

class PatientController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const patients = await Patient.all();

    const data = {
      message: "Menampilkkan semua Patient di rumah sakit ini",
      data: patients,
    };

    return res.status(200).json(data);
  } 



  //store Patient

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    const patients = await Patient.create(req.body);

    const data = {
      message: "Menambahkan data Patient",
      data: {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        status: req.body.status,
      },
    };
    
    res.status(201).json(data);
  }


  //update Patient
  async update(req, res) {
    const { id } = req.params;
    // cari id patient yang akan diupdate
    const patients = await Patient.update(id);

    if (patients) {
      // melakukan update data patient
      const patients = await Patient.update(req.body, id);
      const data = {
        message: `Resource patient id ${id} is updated successfully`,
        data: patients,
      };

      // The reqeust succeeded
      return res.status(200).json(data);
    } else {
      // jika id patient tidak ditemukan
      const data = {
        message: `Resource patient id ${id} not found`,
      };

      // Resource not found
      return res.status(404).json(data);
    }
  }

  //destroy Patient

  async destroy(req, res) {
    const { id } = req.params;

    /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

    const patients = await Patient.delete(id);

    if (patients) {
      // hapus data
      await Patient.delete(id);
    const data = {
      message: `Menghapus Patient`,
      data: [],
    };

    res.status(200).json(data);
  }
  else {
    // data tidak ada
    const data = {
        message: "Data tidak ada",
    };

    res.status(404).json(data);
  }
}


  //show Patient
  async show(req, res) {
    /**
     * cari id
     * jika ada, kirim datanya
     * jika tidak, kirim data tidak ada
     */
    const { id } = req.params;

    const patients = await Patient.findById(id);
    if (patients) {
      const data = {
        message: "Menampilkan detail data Patient",
        data: patients,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: "Data tidak ada",
      };

      res.status(404).json(data);
    }

  }


  //panggilan berdasarkan nama
  async search(req, res) {
    const { name } = req.params;
    const patients = await Patient.search(name);

    if (patients) {
      const data = {
        message: `Menampilkan dengan nama ${name}`,
        data: patients,
      };

      // The reqeust succeeded
      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource dengan nama ${name} tidak ada`,
      };

      // Resource not found
      return res.status(404).json(data);
    }
  }

  //Menampilakan data positive pada pasien
  async positive(req, res) {
    const { status } = req.params;
    const patients = await Patient.findByStatus(status);

    if (patients) {
      const data = {
        message: `Menampilkan patient yang positive`,
        data: patients,
      };

      // The reqeust succeeded
      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data patient yang positve tidak ditemukan`,
      };

      // Resource not found
      return res.status(404).json(data);
    }
  }

  // menampilkan data meninggal
  async dead(req, res) {
    const status = "dead";
    const patients = await Patient.findByStatus(status);
    const total = await Patient.total(status);

    if (patients) {
      const data = {
        message: `Menampilkan patient yang meninggal`,
        total: total,
        data: patients,
      };

      // The reqeust succeeded
      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data patient yang meninggal tidak ditemukan`,
      };

      // Resource not found
      return res.status(404).json(data);
    }
  }

  //menampilkan data pasien recovered
  async recovered(req, res) {
    const status = "recovered";
    const patients = await Patient.findByStatus(status);
    const total = await Patient.total(status);

    if (patients) {
      const data = {
        message: `Menampilkan patient yang sembuh`,
        total: total,
        data: patients,
      };

      // The reqeust succeeded
      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data patient yang sembuh tidak ditemukan`,
      };

      // Resource not found
      return res.status(404).json(data);
    }
  }

}

  // Membuat object StudentController
  const object = new PatientController();

// Export object StudentController
module.exports = object;