<?php
/*
This file is part of Minecraft-RCON-Console.

    Minecraft-RCON-Console is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Minecraft-RCON-Console is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Minecraft-RCON-Console.  If not, see <http://www.gnu.org/licenses/>.
*/

require_once 'rcon.class.php';   

    $server = new Rcon($host, $port, $password, $timeout);
    
    if(!isset($_POST['cmd'])) return;
    
    if ($server->connect())
    {
        $server->send_command($_POST["cmd"]);
    	//echo $rcon->get_response();
    	echo preg_replace("/§./", "", $server->get_response()); //remove some invalid char
    }



//if(!isset($_REQUEST['case'])) return;

/*switch ($_REQUEST['case'])
{
case "give" : 
if(!isset($_REQUEST[playername]) || !isset($_REQUEST[itemid]) || !isset($_REQUEST[amount])) return;
$playername = $_REQUEST[playername];
$itemid = $_REQUEST[itemid];
$amount = $_REQUEST[amount];
if ($rcon->connect())
{
	$rcon->send_command("give $playername $itemid $amount");
	echo $rcon->get_response();
}
break;
default: break;

}
*/
?>