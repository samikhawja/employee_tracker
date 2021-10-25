INSERT INTO department (id, name) VALUES
    (1, "Sales"),
    (2, "Engineer"),
    (3, "C-Level");

INSERT INTO role (id, title, salary, department_id) VALUES
    (1, "Retailer", 45000, 1),
    (2, "Sales Lead", 55000, 1),
    (3, "Junior Engineer", 125000, 2),
    (4, "Senior Engineer", 300000, 2),
    (5, "COO", 750000, 3),
    (6, "CEO", 1000000, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
    (1, "Andres", "Lui", 1, 2),
    (2, "Daniel", "Vo", 2, null),
    (3, "Matt", "Weichel", 3, 4),
    (4, "Sami", "Khawja", 4, null),
    (5, "Manuel", "Nunes", 5, 6),
    (6, "Jerome", "Chenette", 6, null);