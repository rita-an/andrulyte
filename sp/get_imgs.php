
<?php

$img_dir = "img/";
$images = scandir($img_dir);


$html = '';

$html .='';
foreach($images as $img) 	{
		if($img === '.' || $img === '..') {continue;}

			if (  (preg_match('/.jpg/',$img))  ||  (preg_match('/.gif/',$img)) || (preg_match('/.tiff/',$img)) || (preg_match('/.png/',$img)) ) {

			 $html .='<img class="images" id="image" src="'.$img_dir.$img.'" >' ;

			} else { continue; }
	}
$html .='' ;

echo $html ;

?>
