<?php
class action {
    
    public static function invoke() {
        global $_GET, $_POST;
        if(isset($_GET['action'])) {
            if(file_exists("action/".$_GET['action'].".php")) {
                require("action/".$_GET['action'].".php");
            } else {
                //erreur interne action inéxistante
                exit();
            }
            
        }
    }
}