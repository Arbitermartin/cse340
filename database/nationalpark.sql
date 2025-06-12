-- Creating table for national parks
CREATE TABLE IF NOT EXISTS nationalpark (
  park_id SERIAL PRIMARY KEY,
  park_name VARCHAR(100) NOT NULL,
  region VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(255)
);

-- Inserting national park data for Tanzania regions
INSERT INTO nationalpark (park_name, region, description, image_url) VALUES
  ('Serengeti National Park', 'Arusha', 'Famous for the Great Migration of wildebeest and zebras, Serengeti offers vast savannahs and abundant wildlife including lions, elephants, and cheetahs.', '/images/serengeti.jpg'),
  ('Ngorongoro Conservation Area', 'Arusha', 'Home to the Ngorongoro Crater, a UNESCO World Heritage Site, with diverse wildlife like rhinos, lions, and flamingos in a unique volcanic caldera.', '/images/ngorongoro.jpg'),
  ('Tarangire National Park', 'Manyara', 'Known for large elephant herds, baobab trees, and seasonal wildlife migrations, offering excellent game viewing and birdwatching.', '/images/tarangire.jpg'),
  ('Lake Manyara National Park', 'Manyara', 'Features tree-climbing lions, flamingo-filled lakes, and diverse ecosystems from groundwater forests to acacia woodlands.', '/images/parks/manyara.jpg'),
  ('Selous Game Reserve', 'Morogoro', 'Africa’s largest game reserve, with rivers, swamps, and forests hosting elephants, wild dogs, and boat safaris.', '/images/selous.jpg'),
  ('Mikumi National Park', 'Morogoro', 'Accessible savannah park with lions, giraffes, and zebras, resembling the Serengeti in miniature, ideal for road safaris.', '/images/mikumi.jpg'),
  ('Ruaha National Park', 'Iringa', 'Tanzania’s largest national park, with rugged landscapes, baobabs, and high predator concentrations including lions and leopards.', '/images/ruaha.jpg'),
  ('Katavi National Park', 'Katavi', 'Remote park with vast floodplains, hippo pools, and buffalo herds, offering an authentic wilderness experience.', '/images/katavi.jpg');