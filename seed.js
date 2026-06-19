const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const db = new sqlite3.Database('prisma/dev.db');

async function seed() {
  const hash = await bcrypt.hash("admin123", 10);
  const id = "admin-uuid-" + Date.now();
  
  db.run(`INSERT OR IGNORE INTO User (id, username, password, role) VALUES (?, ?, ?, ?)`, 
    [id, "admin", hash, "Admin"], 
    function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log("Admin user created or already exists!");
    }
  );
}

seed();
