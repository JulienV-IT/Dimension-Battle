<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styleArena.css">
        <title>Document</title>
    </head>
    <body>
        

     <!-- Choix arene liste + division qui contient image arene -->
        <h2>Choix de l'arène</h2>
        <select name="maps" id="map-select" onchange="chooseArena()">
            <option value="">Choose a map</option>
            <option value="Namek">Namek</option>
            <option value="Glaciale">Glaciale</option>
            <option value="Jungle">Jungle</option>
            <option value="Nocturne">Nocturne</option>
        </select>
        <div id="imgarene" class="arena" >
 
        </div>
    <script type="text/javascript" src="Arena.js"></script>
    </body>
</html>