<#
.SYNOPSIS
    Sets up the Mhappy Store Management System directory structure and basic files.
#>

$rootPath = "E:\MhappyStore"
$assetsPath = "$rootPath\assets"
$cssPath = "$assetsPath\css"
$jsPath = "$assetsPath\js"
$includesPath = "$rootPath\includes"
$apiPath = "$rootPath\api"

# Create directories
New-Item -ItemType Directory -Path $rootPath -Force
New-Item -ItemType Directory -Path $assetsPath -Force
New-Item -ItemType Directory -Path $cssPath -Force
New-Item -ItemType Directory -Path $jsPath -Force
New-Item -ItemType Directory -Path $includesPath -Force
New-Item -ItemType Directory -Path $apiPath -Force

# Create config.php
@"
<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'mhappy_store');
define('APP_NAME', 'Mhappy Store Management System');
define('APP_VERSION', '1.0.0');
?>
"@ | Out-File -FilePath "$includesPath\config.php" -Encoding utf8

# Create db.php
@"
<?php
require_once 'config.php';

class Database {
    private \$connection;

    public function __construct() {
        \$this->connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if (\$this->connection->connect_error) {
            die("Connection failed: " . \$this->connection->connect_error);
        }
    }
    // ... rest of the Database class ...
}
?>
"@ | Out-File -FilePath "$includesPath\db.php" -Encoding utf8

Write-Host "Setup completed in $rootPath" -ForegroundColor Green
