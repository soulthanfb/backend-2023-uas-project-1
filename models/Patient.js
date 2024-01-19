// import database
const db = require("../config/database")
// membuat class Patient
class Patient {
  // buat fungsi
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
      return new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }


   // mengupdate data patient
  static async update(data, id) {
    // update = new Data();
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
      resolve(results);
      });
    });
    const patients = this.update(id);
    return patients;
  }

  //menghapus data
  static async delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  //detail hasil pencarian berdasarkan id
  static async findById(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
  
  //detail hasil pencarian berdasarkan nama
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients WHERE name = ?";
      db.query(sql, name, (err, results) => {
        // destructure object results
        const patients = results;
        resolve(patients);
      });
    });
  }

 //status hidup dan mati pasien
static findByStatus(status) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from patients WHERE status = ?";
    db.query(sql, status, (err, results) => {
      // destructure object results
      const patients = results;
      resolve(patients);
      });
    });
  }

  //total status dead dan hidup
  static total(status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT COUNT(*) AS total FROM patients where status = ?";
      db.query(sql, status, (err, results) => {
        // destructure object results
        const patients = results;
        resolve(patients);
      });
    });
  }
}
// export class Patient
module.exports = Patient;
