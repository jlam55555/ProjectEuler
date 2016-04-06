<?php 
  $files = scandir("../");
  $query = false;
  if(str_replace(" ", "", $_POST["query"]) !== "")
    $query = str_replace(" ", "", $_POST["query"]);
  foreach($files as $file) {
    if($file == "." || $file == ".." || $file == "index.php" || $file == "res" || substr($file, strlen($file)-1, 1) == "~" || ($query != false && stripos(str_replace(".html", "", $file), $query) === false))
	  continue;
    preg_match("/^[0-9]+/", $file, $number);
    preg_match("/^[^\.]+/", $file, $realFile);
    preg_match("/<script id=\"script\">\/\/.+?\nvar t1.+?;\n([\n\w\W]+?)\nvar t2.+?\n<\/script>/", file_get_contents("../" . $file), $script);
    $words = preg_split("/(?=[A-Z])/", substr($realFile[0], strlen($number[0])));
    echo '<div class="indexLink" data-href="' . $file . '"><span class="indexTitle">'. $number[0] . " " . implode($words, " ") . '</span><span class="indexShow"> Code</span><pre class="indexCode"><code>' . $script[1] . '</code></pre></div>';
  }
?>
