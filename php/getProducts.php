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

	$returnedData=[];
	$output = [];
	$x = 0;
	
	//If there are no search results, push a error message
	if(!isset($decode['data'])){
		$temp['errorMessage'] = 'There is no data';
		array_push($output, $temp);
	} else {
			$count = count($decode['data']);
			while($x < $count){
				$temp = null;
				$temp['title'] = $decode['data'][$x]['title'];
				$temp['destination'] = $decode['data'][$x]['dest'];
				$temp['image'] = $decode['data'][$x]['img_sml'];
				$temp['id'] = $decode['data'][$x]['id'];
				array_push($returnedData, $temp);
				$x++;
		}
		$output['data'] = $returnedData;
		$output['meta']['totalCount'] = $decode['meta']['total_count'];		
	}


	echo json_encode($output); 

?>