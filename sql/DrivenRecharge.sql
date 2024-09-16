CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL UNIQUE
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

CREATE TABLE phones (
	id SERIAL PRIMARY KEY,
	phone VARCHAR(11) NOT NULL UNIQUE,
	carriers_code INTEGER REFERENCES carriers(code) NOT NULL,
	customer_name TEXT NOT NULL,
	description TEXT NOT NULL,
	cpf VARCHAR(11) NOT NULL UNIQUE
);

CREATE TABLE recharges (
	id SERIAL PRIMARY KEY,
	phone_id INTEGER REFERENCES phones(id) NOT NULL,
	credit INTEGER NOT NULL,
	recharge_date TIMESTAMP NOT NULL DEFAULT NOW()
);
