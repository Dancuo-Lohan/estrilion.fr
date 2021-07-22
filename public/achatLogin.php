<?php
if (!isset($_SESSION['grade'])) {
    if(isset($_SESSION['erreur'])) {
        //Si nous avons une erreur
        if($_SESSION['erreur'] == "pseudo") {
            //Si le pseudo est inconnu 
            echo '
            <div class="infopay">
                <strong>Le pseudo rentré précedemment est inconnu</strong>
                <p>Vous devez impérativement vous connecter au moins une fois sur le serveur pour que votre pseudo soit connu de nos systèmes</p>
            </div>

            <div id="login" class="login">
                <form class="loginForm" autocomplete="off" action="?action=pseudoVerifAchat" method="post">
                    <div class="loginText">
                        <label for="nameMc">Confirmez votre pseudo Minecraft :</label>
                        <input class="loginPseudo" type="text" name="pseudo" id="nameMc" placeholder="Votre pseudo" required>
                    </div>
                    <div class="loginDivConfirm">
                        <input class="loginConfirm" type="submit" name="submit" value="Confirmer!">
                    </div>
                </form>
            </div>';
            
        } else if($_SESSION['erreur'] == "serveur") {
            //Si le serveur est �teint
            echo '
            <div class="infopay">
                <strong>Le serveur est actuellement éteint, veuillez réesssayer dans quelques minutes...</strong>
                <p>Si ce message persiste merci de contacter un administrateur ou modérateur en jeu ou sur discord</p>
            </div>

            <div id="login" class="login">
                <form class="loginForm" autocomplete="off" action="?action=pseudoVerifAchat" method="post">
                    <div class="loginText">
                         <label for="nameMc">Confirmez votre pseudo Minecraft :</label>
                        <input class="loginPseudo" type="text" name="pseudo" id="nameMc" placeholder="Votre pseudo" required>
                    </div>
                    <div class="loginDivConfirm">
                        <input class="loginConfirm" type="submit" name="submit" value="Confirmer!">
                    </div>
                </form>
            </div>';
            
        }
        unset($_SESSION['erreur']);
    } else {
        
        echo '
        <div id="login" class="login">
            <form class="loginForm" autocomplete="off" action="?action=pseudoVerifAchat" method="post">
                <div class="loginText">
                    <label for="nameMc">Confirmez votre pseudo Minecraft :</label>
                    <input class="loginPseudo" type="text" name="pseudo" id="nameMc" placeholder="Votre pseudo" required>
                </div>
                <div class="loginDivConfirm">
                    <input class="loginConfirm" type="submit" name="submit" value="Confirmer!">
                </div>
            </form>
        </div>';
    }

}

?>