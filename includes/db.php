﻿<?php
require_once 'config.php';

class Database {
    private \;

    public function __construct() {
        \->connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if (\->connection->connect_error) {
            die("Connection failed: " . \->connection->connect_error);
        }
    }
    // ... rest of the Database class ...
}
?>
