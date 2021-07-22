<?php
use PDOException;
use PDO;
use Exception;

class bdd {
    
    private static $bdd;
    
    public static function auth() {
        try{
            self::$bdd = new PDO('');
        }catch(PDOException $ex){
            print($ex);
            exit();
        }
    }
    
    public static function getBdd() {
        if(isset(self::$bdd)) {
            return self::$bdd;
        } else {
            throw new Exception("bdd.class.php: opération invalide: bdd non initialisé");
        }
    }

    
}