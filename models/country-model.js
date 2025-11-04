const pool = require("../database")

/* *****************************
 * Get all countries
 * ***************************** */
async function getAllCountries() {
  try {
    const result = await pool.query(
      'SELECT * FROM west_africa_countries ORDER BY country_name ASC'
    )
    console.log("Fetched countries:", result.rows.length)
    return result.rows
  } catch (error) {
    console.error("Database error in getAllCountries:", error.message, error.stack)
    return []
  }
}

/* *****************************
 * Search countries by name
 * ***************************** */
async function searchCountries(searchTerm) {
  try {
    const result = await pool.query(
      'SELECT * FROM west_africa_countries WHERE country_name ILIKE $1 ORDER BY country_name ASC',
      [`%${searchTerm}%`]
    )
    console.log(`Search results for "${searchTerm}":`, result.rows.length)
    return result.rows
  } catch (error) {
    console.error("Database error in searchCountries:", error.message, error.stack)
    return []
  }
}

module.exports = { getAllCountries, searchCountries }