<?php
class page {
    
    public static function invoke() {
        global $_GET, $_POST;
        if(isset($_GET['page'])) {
            if(file_exists("public/pages/".$_GET['page'].".php")) {
                require("public/pages/".$_GET['page'].".php");
            } else {
                //erreur interne action inéxistante
                exit();
            }
            
        }
    }
}