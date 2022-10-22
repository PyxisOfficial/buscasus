<?php
class Connection {
	public static function connect() {
		$connection = new PDO("mysql:host=localhost;dbname=bdbuscasus", "root", "");
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$connection->exec("SET CHARACTER SET utf8");
		return $connection;
	}
}
?>