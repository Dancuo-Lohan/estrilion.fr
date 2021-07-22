<?php
if ( isset( $_POST['submit'] ) ) { //Si on reï¿½oit le formulaire

    $nameMc = $_POST['pseudo'];  
    htmlspecialchars ($nameMc); //Enlever les caractï¿½res spï¿½ciaux
    
    $serverV = new Rcon($host, $port, $password, $timeout);
    
    if(isset($_POST['cmd'])) return;
    if($serverV->connect()) {
        $serverV->send_command("manselect world");
        $serverV->send_command("manwhois $nameMc");
        //echo $rcon->get_response();
        $reponse = preg_replace("/Â§./", "", $serverV->get_response()); //remove some invalid char
        $reponseListe = explode("\n", $reponse);
        var_dump($reponseListe);
        if($reponseListe[0] == 'Player not found!' ||( strlen($reponseListe[0]) == 47 && strlen($reponseListe[1]) == 2 )) {
            //Pseudo du joueur non trouvé
            //unset($_SESSION['grade']);
            $_SESSION['erreur'] = "pseudo"; //on crée une variable Session avec comme nom erreur où l'on met l'erreur qui est survenue
            include("public/achatLogin.php"); 
        }else if( (strlen($reponseListe[0]) == 86 && strlen($reponseListe[1]) == 0) || (strlen($reponseListe[0]) == 193 && strlen($reponseListe[1]) == 0)) {
            //Le serveur est éteint
            //unset($_SESSION['grade']);
            $_SESSION['erreur'] = "serveur"; //erreur serveur du coup
            include("public/achatLogin.php"); 
        }else {
            $reponseGrade = explode(" ", $reponseListe[1]);
            $grade = $reponseGrade[1];
            if($grade == $nameMc) {
                var_dump("Une erreur s'est produite");
            } else {
                var_dump($grade);
                $_SESSION['grade'] = $grade;
                $_SESSION['pseudoMc'] = $nameMc;
                var_dump($_SESSION['grade']);
                var_dump($_SESSION['pseudoMc']);
                header('location: /?page=confirmPayement');
            }
        }
    } else {//Si on ne peut pas se connecter au serveur
        $reponse = preg_replace("/Â§./", "", $serverV->get_response()); //remove some invalid char
        $reponseListe = explode("\n", $reponse);
        if( (strlen($reponseListe[0]) == 86 && strlen($reponseListe[1]) == 0) || (strlen($reponseListe[0]) == 193 && strlen($reponseListe[1]) == 0)) {//On regarde les erreurs qu'on rï¿½cupï¿½re
            echo "le serveur est eteint";
        } else { //Si le serveur vient juste de s'ï¿½teindre :
            echo "Une erreur est survenue";
        }
    }
    echo '<h3>Form POST Method</h3>'; echo 'Your name is ' . $nameMc; exit;
} else {
    echo 'erreur';
}

