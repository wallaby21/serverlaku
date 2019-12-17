const Pool = require('pg').Pool
const pool = new Pool({
  user: 'akundb',
  host: 'localhost',
  database: 'travelakuDB',
  password: 'password',
  port: 5432,
})
const fs = require('fs');

const getAirports = (request, response) => {
  pool.query('SELECT * FROM public.airports_table', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getAirports,
}
