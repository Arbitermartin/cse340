-- Create table for West African countries
CREATE TABLE IF NOT EXISTS west_africa_countries (
  country_id SERIAL PRIMARY KEY,
  country_name VARCHAR(100) NOT NULL UNIQUE,
  capital VARCHAR(100) NOT NULL,
  population BIGINT NOT NULL CHECK (population >= 0),
  major_export VARCHAR(255) NOT NULL,
  tourist_attraction VARCHAR(255) NOT NULL,
  flag_url VARCHAR(255) NOT NULL
);

-- Insert data for West African countries (ECOWAS members)
INSERT INTO west_africa_countries (country_name, capital, population, major_export, tourist_attraction, flag_url) VALUES
  ('Benin', 'Porto-Novo', 13352864, 'Cotton', 'Pendjari National Park', '/images/flags/benin.png'),
  ('Burkina Faso', 'Ouagadougou', 23295744, 'Gold', 'Ruins of Loropéni', '/images/flags/burkina_faso.png'),
  ('Cabo Verde', 'Praia', 598682, 'Fish', 'Cidade Velha', '/images/flags/cabo_verde.png'),
  ('Côte d''Ivoire', 'Yamoussoukro', 31278282, 'Cocoa', 'Basilica of Our Lady of Peace', '/images/flags/cote_divoire.png'),
  ('Gambia', 'Banjul', 2791128, 'Peanuts', 'Kunta Kinteh Island', '/images/flags/gambia.png'),
  ('Ghana', 'Accra', 34121985, 'Gold', 'Cape Coast Castle', '/images/flags/ghana.png'),
  ('Guinea', 'Conakry', 14786509, 'Bauxite', 'Mount Nimba', '/images/flags/guinea.png'),
  ('Guinea-Bissau', 'Bissau', 2150842, 'Cashew nuts', 'Bijagós Archipelago', '/images/flags/guinea_bissau.png'),
  ('Liberia', 'Monrovia', 5538165, 'Iron ore', 'Sapo National Park', '/images/flags/liberia.png'),
  ('Mali', 'Bamako', 23293698, 'Gold', 'Great Mosque of Djenné', '/images/flags/mali.png'),
  ('Niger', 'Niamey', 27202843, 'Uranium', 'Agadez Mosque', '/images/flags/niger.png'),
  ('Nigeria', 'Abuja', 232679478, 'Petroleum', 'Yankari National Park', '/images/flags/nigeria.png'),
  ('Senegal', 'Dakar', 18275736, 'Fish', 'Gorée Island', '/images/flags/senegal.png'),
  ('Sierra Leone', 'Freetown', 8791092, 'Diamonds', 'Tacugama Chimpanzee Sanctuary', '/images/flags/sierra_leone.png'),
  ('Togo', 'Lomé', 9266001, 'Phosphates', 'Koutammakou', '/images/flags/togo.png')
ON CONFLICT (country_name) DO NOTHING;