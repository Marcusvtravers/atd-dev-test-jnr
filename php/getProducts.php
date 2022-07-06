<?php
	header('Access-Control-Allow-Origin: *');
    $executionStartTime = microtime(true) / 1000;
	$country=$_POST['country'];
	if(isset($_POST['data']))
	{
		$title=$_POST['data'];
		
		$url='https://global.atdtravel.com/api/products?geo='.$country.'&title='.$title.'';
	}
	else {
		$url='https://global.atdtravel.com/api/products?geo='.$country;
	}


    //$url='https://global.atdtravel.com/api/products?geo=en&title='.$title.'';
    $ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

    curl_close($ch);
	
	$decode = json_decode($result,true);

	$output = [];
	$x = 0;
	$count = count($decode['data']);
	
	
	while($x < $count){
	$temp = null;
	$temp['title'] = $decode['data'][$x]['title'];
	$temp['destination'] = $decode['data'][$x]['dest'];
	$temp['image'] = $decode['data'][$x]['img_sml'];
	array_push($output, $temp);
	$x++;
	};
	
	echo json_encode($output); 

?>