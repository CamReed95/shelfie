CREATE TABLE products (
    SERIAL PRIMARY KEY
    id TEXT,
    name TEXT,
    price INTEGER,
    img TEXT
);

INSERT INTO products (name)
VALUES ('John');

SELECT * FROM products