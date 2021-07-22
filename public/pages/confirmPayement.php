<?php
$code = isset($_POST['code']) ? preg_replace('/[^a-zA-Z0-9]+/', '', $_POST['code']) : '';
if( empty($code) && !isset($_SESSION["valeur"]) ) {
    echo 'Vous devez saisir un code';
}
else {
    $dedipass = file_get_contents('http://api.dedipass.com/v1/pay/?public_key=3e83b5b785a5d6260f51e48810f17613&private_key=f02c597cce8ec841ca02400b8441abf894ddc580&code=' . $code);
    $dedipass = json_decode($dedipass);
    
    
    
    
    //INFO SERVEUR MINECRAFT
    $rconHost = "46.105.245.71";
    $rconPort = 25566;
    $rconPassword = "seHQ3cQDZqq6ug5TJzRu";
    $timeout = 3;
    
    $queryHost = "46.105.245.71";
    $queryPort = 25565;
    
    $host = $rconHost; // Server host name or IP
    $port = $rconPort;                      // Port rcon is listening on
    $password = $rconPassword; // rcon.password setting set in server.properties
    $timeout = 3;                       // How long to timeout.
    
    
    //CONNEXION SERVEUR MINECRAFT
    $serverB = new Rcon($host, $port, $password, $timeout);
    if($serverB->connect()) {
        if($dedipass->status == 'success' || $_SESSION["valeur"] == 5) {//5�
            // Le transaction est valid�e et pay�e.
            if(!isset($_SESSION['pseudoMc']) || !isset($_SESSION['valeur'])) {
                //ERREUR RECEPTION PSEUDO
                $_SESSION["valeur"] = 5;
                include("public/achatLogin.php"); 
            }
    
            $pseudoMc = $_SESSION["pseudoMc"];
            $gradeV = $_SESSION['gradeV'];
            if ($gradeV == "Joueur") {
                var_dump($serverB->send_command("manuadd $pseudoMc Paladin"));
                header('location: /?page=confirmation');
                
            } else if ($gradeV == "Paladin") {
                $serverB->send_command("manuadd $pseudoMc Eclaireur");
                header('location: /?page=confirmation');
                
            } else if ($gradeV == "Eclaireur") {
                $serverB->send_command("manuadd $pseudoMc Exile");
                header('location: /?page=confirmation');
    
            } else if ($gradeV == "Exile") {
                header('location: /?page=confirmation');
                
            } else if ($gradeV == "Tyran") {
                $serverB->send_command("manuadd $pseudoMc Monarque");
                header('location: /?page=confirmation');
                
            } else {
                ;
            }
        } else {//10�
            $dedipass = file_get_contents('http://api.dedipass.com/v1/pay/?public_key=ec002c5022f51282dffc558cdf7feff7&private_key=14b4da5626b0f71f28b06614a37aacaa5793a0a8&code=' . $code);
            $dedipass = json_decode($dedipass);
            if($dedipass->status == 'success' || $_SESSION["valeur"] == 10) {
                if(!isset($_SESSION['pseudoMc']) || !isset($_SESSION['valeur'])) {
                    //ERREUR RECEPTION PSEUDO
                    $_SESSION["valeur"] = 10;
                    include("public/achatLogin.php"); 
                }
    
                $pseudoMc = $_SESSION["pseudoMc"];
                $gradeV = $_SESSION['gradeV'];
                if ($gradeV == "Joueur") {
                    $serverB->send_command("manuadd $pseudoMc Eclaireur");
                    header('location: /?page=confirmation');
                    
                } else if ($gradeV == "Paladin") {
                    $serverB->send_command("manuadd $pseudoMc Exile");
                    header('location: /?page=confirmation');
                    
                } else if ($gradeV == "Eclaireur") {
                    header('location: /?page=confirmation');
                    
                } else if ($gradeV == "Exile") {
                    $serverB->send_command("manuadd $pseudoMc Tyran");
                    header('location: /?page=confirmation');
                    
                } else if ($gradeV == "Tyran") {
                    ;
                } else {
                    ;
                }
            } else {//15�
                $dedipass = file_get_contents('http://api.dedipass.com/v1/pay/?public_key=2eeb3eafe7f41779c856dfad2db2d797&private_key=b825feb09663929781337b90e0ae21e26ae45d07&code=' . $code);
                $dedipass = json_decode($dedipass);
                if($dedipass->status == 'success' || $_SESSION["valeur"] == 15) {
                    if(!isset($_SESSION['pseudoMc']) || !isset($_SESSION['valeur'])) {
                        //ERREUR RECEPTION PSEUDO
                        $_SESSION["valeur"] = 15;
                        include("public/achatLogin.php"); 
                    }
    
                    $pseudoMc = $_SESSION["pseudoMc"];
                    $gradeV = $_SESSION['gradeV'];
                    echo "pseudo =".$pseudoMc;
                    echo "<br>grade =".$gradeV;
                    if ($gradeV == "Joueur") {
                        $serverB->send_command("manuadd $pseudoMc Exile");
                        
                    } else if ($gradeV == "Paladin") {
                        header('location: /?page=confirmation');
                        
                    } else if ($gradeV == "Eclaireur") {
                        $serverB->send_command("manuadd $pseudoMc Tyran");
                        header('location: /?page=confirmation');
                        
                    } else if ($gradeV == "Exile") {
                        $serverB->send_command("manuadd $pseudoMc Monarque");
                        header('location: /?page=confirmation');
                        
                    } else if ($gradeV == "Tyran") {
                        header('location: /?page=confirmation');
                        
                    } else {
                        ;
                    }
                } else {//20�
                    $dedipass = file_get_contents('http://api.dedipass.com/v1/pay/?public_key=e8e61e6fd65ec69c58499a93a6530bee&private_key=fa327b5d987fc1027cc44e7687eded956658392b&code=' . $code);
                    $dedipass = json_decode($dedipass);
                    if($dedipass->status == 'success' || $_SESSION["valeur"] == 20) {
                        if(!isset($_SESSION['pseudoMc']) || !isset($_SESSION['valeur'])) {
                            //ERREUR RECEPTION PSEUDO
                            $_SESSION["valeur"] = 20;
                            include("public/achatLogin.php"); 
                        }
    
                        $pseudoMc = $_SESSION["pseudoMc"];
                        $gradeV = $_SESSION['gradeV'];
                        if ($gradeV == "Joueur") {
                            ;
                            
                        } else if ($gradeV == "Paladin") {
                            $serverB->send_command("manuadd $pseudoMc Tyran");
                            header('location: /?page=confirmation');
                            
                        } else if ($gradeV == "Eclaireur") {
                            $serverB->send_command("manuadd $pseudoMc Monarque");
                            header('location: /?page=confirmation');
                            
                        } else if ($gradeV == "Exile") {
                            header('location: /?page=confirmation');
                            
                        } else if ($gradeV == "Tyran") {
                            header('location: /?page=confirmation');
                            
                        } else {
                            ;
                        }
                    } else {//25�
                        $dedipass = file_get_contents('http://api.dedipass.com/v1/pay/?public_key=cd43a14fab640f42ee83799ad1a4b69f&private_key=144a3d666c3207b7cfa14aaedeb59420d8a90318&code=' . $code);
                        $dedipass = json_decode($dedipass);
                        if($dedipass->status == 'success' || $_SESSION["valeur"] == 25) {
                            if(!isset($_SESSION['pseudoMc']) || !isset($_SESSION['valeur'])) {
                                //ERREUR RECEPTION PSEUDO
                                $_SESSION["valeur"] = 25;
                                include("public/achatLogin.php"); 
                            }
    
                            $pseudoMc = $_SESSION["pseudoMc"];
                            $gradeV = $_SESSION['gradeV'];
                            if ($gradeV == "Joueur") {
                                $serverB->send_command("manuadd $pseudoMc Tyran");
                                header('location: /?page=confirmation');
                                
                            } else if ($gradeV == "Paladin") {
                                $serverB->send_command("manuadd $pseudoMc Monarque");
                                header('location: /?page=confirmation');
                                
                            } else if ($gradeV == "Eclaireur") {
                                header('location: /?page=confirmation');
                                
                            } else if ($gradeV == "Exile") {
                                header('location: /?page=confirmation');
                                
                            } else if ($gradeV == "Tyran") {
                                header('location: /?page=confirmation');
                                
                            } else {
                                ;
                            }
                        } else {//30�
                            $dedipass = file_get_contents('http://api.dedipass.com/v1/pay/?public_key=af8c24627404e269ce8b14a0719bb287&private_key=5c501fdb891dcfd2ec2df2fcd06faf6965e8d48e&code=' . $code);
                            $dedipass = json_decode($dedipass);
                            if($dedipass->status == 'success' || $_SESSION["valeur"] == 30) {
                                if(!isset($_SESSION['pseudoMc']) || !isset($_SESSION['valeur'])) {
                                    //ERREUR RECEPTION PSEUDO
                                    $_SESSION["valeur"] = 30;
                                    include("public/achatLogin.php"); 
                                }
    
                                $pseudoMc = $_SESSION["pseudoMc"];
                                $gradeV = $_SESSION['gradeV'];
                                if ($gradeV == "Joueur") {
                                    $serverB->send_command("manuadd $pseudoMc Monarque");
                                    header('location: /?page=confirmation');
                                    
                                } else if ($gradeV == "Paladin") {
                                    header('location: /?page=confirmation');
                                    
                                } else if ($gradeV == "Eclaireur") {
                                    header('location: /?page=confirmation');
                                    
                                } else if ($gradeV == "Exile") {
                                    header('location: /?page=confirmation');
                                    
                                } else if ($gradeV == "Tyran") {
                                    header('location: /?page=confirmation');
                                    
                                } else {
                                    ;
                                }
                            } else {
                                // Le code est invalide
                                echo 'Le code '.$code.' est invalide';
                            }
                        }
                    }
                }
            }
        }   
    } //Fin if($serverB->connect())
}
