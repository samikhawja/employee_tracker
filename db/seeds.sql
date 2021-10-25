INSERT INTO department (name) VALUES
    ("Sales"),
    ("Engineer"),
    ("C-Level");

INSERT INTO role (title, salary, department_id) VALUES
    ("Retailer", 45000, 1),
    ("Sales Lead", 55000, 1),
    ("Junior Engineer", 125000, 2),
    ("Senior Engineer", 300000, 2),
    ("COO", 750000, 3),
    ("CEO", 1000000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ("Daniel", "Vo", 2, null),
    ("Andres", "Lui", 1, 2),
    ("Sami", "Khawja", 4, null),
    ("Matt", "Weichel", 3, 4),
    ("Jerome", "Chenette", 6, null);
    ("Manuel", "Nunes", 5, 6),