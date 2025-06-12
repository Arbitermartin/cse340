
const pool = require("../database/")

/* *****************************
 * Get all regions with national parks
 * ***************************** */
async function getRegions() {
  try {
    const result = await pool.query(
      'SELECT DISTINCT region FROM "nationalpark" ORDER BY region ASC'
    )
    console.log("Fetched regions:", result.rows)
    return result.rows.map(row => row.region)
  } catch (error) {
    console.error("Database error in getRegions:", error.message, error.stack)
    return []
  }
}

/* *****************************
 * Get all national parks by region
 * ***************************** */
async function getParksByRegion(region) {
  try {
    const result = await pool.query(
      'SELECT * FROM "nationalpark" WHERE region = $1 ORDER BY park_name',
      [region]
    )
    console.log(`Parks for region ${region}:`, result.rows)
    return result.rows
  } catch (error) {
    console.error("Database error in getParksByRegion:", error.message, error.stack)
    return []
  }
}

module.exports = { getRegions, getParksByRegion }