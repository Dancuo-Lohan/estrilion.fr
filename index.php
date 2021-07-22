<?php
ob_start();
error_reporting(E_ALL);
$lifetime = 3600;
ini_set("session.cookie_samesite", "Strict");
if (isset($_COOKIE["CookieSession"])) {
    session_id($_COOKIE["CookieSession"]);
    echo "<script>console.log('Session retrouvee - ". session_id() ."');</script>";
    session_start();
} else {
    session_start();
    setcookie("CookieSession",session_id(),time()+$lifetime,"/","estrilion.fr","true","false");
    echo "<script>console.log('Session creee - ". session_id() ."');</script>";
}


date_default_timezone_set('Europe/Paris');
setlocale(LC_TIME, "fr_FR");

$serverName = "Estrilion";

$rconHost = "secret";
$rconPort = "secret";
$rconPassword = "secret";
$timeout = "secret";

$queryHost = "secret";
$queryPort = "secret";

$host = $rconHost; // Server host name or IP
$port = $rconPort;                      // Port rcon is listening on
$password = $rconPassword; // rcon.password setting set in server.properties
$timeout = $timeout;                       // How long to timeout.


require_once 'rcon/index.php';
require_once 'action/verifPseudoMc.php';


/*require("modele/bdd.class.php");
bdd::auth();
$_BDD_ = bdd::getBdd();*/


/*
//bdd

//rcon

//
*/

if(isset($_GET['action'])) {
    require("modele/action.class.php");
    action::invoke();
} else {
   /* <form action="index.php?action=payeOffre" method="post">
        <input type="hidden" value="1" name="id"/>
        <button type="submit" >valider</button>
    </form> */
    include("public/index.php");
}


/*if(isset($_GET['page'])=="boutique") { //gros bordel mais �a fonctionne
    //en gros si j'include le ficher code. �a ne fonctionne pas pour get la SESSION au tout premier achat.
    if (!isset($_SESSION['grade']))
    {
        echo '
        <div id="login" class="login">
            <form class="loginForm" autocomplete="off" action="?action=verifPseudoMc" method="post">
                <div class="loginText">
                    <label for="nameMc">Entrez votre pseudo Minecraft :</label>
                    <input class="loginPseudo" type="text" name="pseudo" id="nameMc" placeholder="Votre pseudo" required>
                </div>
                <div class="loginDivConfirm">
                    <input class="loginConfirm" type="submit" name="submit" value="Confirmer!">
                </div>
            </form>
        </div>';
    } else {
        $grade = $_SESSION['grade'];
        if ($grade == "Joueur"){
            echo '<script type="text/JavaScript">
                document.getElementById("btPaladin").classList.remove("blockBt");
                document.getElementById("dpPaladin").setAttribute("data-dedipass", "3e83b5b785a5d6260f51e48810f17613");
                
                document.getElementById("btEclaireur").classList.remove("blockBt");
                document.getElementById("dpEclaireur").setAttribute("data-dedipass", "ec002c5022f51282dffc558cdf7feff7");
                
                document.getElementById("btExilé").classList.remove("blockBt");
                document.getElementById("dpExile").setAttribute("data-dedipass", "2eeb3eafe7f41779c856dfad2db2d797");
                
                document.getElementById("btTyran").classList.remove("blockBt");
                document.getElementById("dpTyran").setAttribute("data-dedipass", "cd43a14fab640f42ee83799ad1a4b69f");
                
                document.getElementById("btMonarque").classList.remove("blockBt");
                document.getElementById("dpMonarque").setAttribute("data-dedipass", "af8c24627404e269ce8b14a0719bb287");
              </script>';
            
        } else if ($grade == "Paladin"){
            echo '<script type="text/JavaScript">
                document.getElementById("btPaladin").value = "Acheté";
                
                document.getElementById("btEclaireur").classList.remove("blockBt");
                document.getElementById("btEclaireur").value = "5€";
                document.getElementById("dpEclaireur").setAttribute("data-dedipass", "3e83b5b785a5d6260f51e48810f17613");
                
                document.getElementById("btExilé").classList.remove("blockBt");
                document.getElementById("btExilé").value = "10€";
                document.getElementById("dpExile").setAttribute("data-dedipass", "ec002c5022f51282dffc558cdf7feff7");
                
                document.getElementById("btTyran").classList.remove("blockBt");
                document.getElementById("btTyran").value = "20€";
                document.getElementById("dpTyran").setAttribute("data-dedipass", "e8e61e6fd65ec69c58499a93a6530bee");
                
                document.getElementById("btMonarque").classList.remove("blockBt");
                document.getElementById("btMonarque").value = "25€";
                document.getElementById("dpMonarque").setAttribute("data-dedipass", "cd43a14fab640f42ee83799ad1a4b69f");
              </script>';
            
        } else if ($grade == "Eclaireur"){
            echo '<script type="text/JavaScript">
                document.getElementById("btPaladin").value = "Acheté";
                
                document.getElementById("btEclaireur").value = "Acheté";
                
                document.getElementById("btExilé").classList.remove("blockBt");
                document.getElementById("btExilé").value = "5€";
                document.getElementById("dpExile").setAttribute("data-dedipass", "3e83b5b785a5d6260f51e48810f17613");
                
                document.getElementById("btTyran").classList.remove("blockBt");
                document.getElementById("btTyran").value = "15€";
                document.getElementById("dpTyran").setAttribute("data-dedipass", "2eeb3eafe7f41779c856dfad2db2d797");
                
                document.getElementById("btMonarque").classList.remove("blockBt");
                document.getElementById("btMonarque").value = "20€";
                document.getElementById("dpMonarque").setAttribute("data-dedipass", "e8e61e6fd65ec69c58499a93a6530bee");
              </script>';
            
        } else if ($grade == "Exile"){
            echo '<script type="text/JavaScript">
                document.getElementById("btPaladin").value = "Acheté";
                
                document.getElementById("btEclaireur").value = "Acheté";
                
                document.getElementById("btExilé").value = "Acheté";
                
                document.getElementById("btTyran").classList.remove("blockBt");
                document.getElementById("btTyran").value = "10€";
                document.getElementById("dpTyran").setAttribute("data-dedipass", "ec002c5022f51282dffc558cdf7feff7");
                
                document.getElementById("btMonarque").classList.remove("blockBt");
                document.getElementById("btMonarque").value = "15€";
                document.getElementById("dpMonarque").setAttribute("data-dedipass", "2eeb3eafe7f41779c856dfad2db2d797");
              </script>';
            
        } else if ($grade == "Tyran"){
            echo '<script type="text/JavaScript">
                document.getElementById("btPaladin").value = "Acheté";
                
                document.getElementById("btEclaireur").value = "Acheté";
                
                document.getElementById("btExilé").value = "Acheté";
                
                document.getElementById("btTyran").value = "Acheté";
                
                document.getElementById("btMonarque").classList.remove("blockBt");
                document.getElementById("btMonarque").value = "5€";
                document.getElementById("dpMonarque").setAttribute("data-dedipass", "3e83b5b785a5d6260f51e48810f17613");
              </script>';
            
        } else if ($grade == "Monarque"){
            echo '<script type="text/JavaScript">
                document.getElementById("btPaladin").value = "Acheté";
                
                document.getElementById("btEclaireur").value = "Acheté";
                
                document.getElementById("btExilé").value = "Acheté";
                
                document.getElementById("btTyran").value = "Acheté";
                
                document.getElementById("btMonarque").value = "Acheté";
              </script>';
            
        } else if ($grade == "Visiteur"){
            
        }
        
        $_SESSION['gradeV'] = $grade;
        unset($_SESSION['grade']);
    }
}*/

ob_end_flush();
?>