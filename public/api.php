<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'database.php';



if(!array_key_exists('action',$_REQUEST)) {
    
    $response = array('statusCode'=>404,'message'=>"Invalid request");
    
    sendResponse($response);

    return; 
}

$action = $_REQUEST['action'];

if($action=='login'){

    $request = json_decode(file_get_contents("php://input"), true);

    $CheckQuery = "select `userName` from user where `userName`='".$request['userName']."' AND `password`='".$request['password']."'";

    $result = $conn->query($CheckQuery);

    if ($result !== false && $result->num_rows > 0) {

        $response = array('statusCode'=>200,'message'=>"Login successful");
        sendResponse($response);

    } else {

        $response = array('statusCode'=>400,'message'=>"Incorrect credentials");
        sendResponse($response);
    }    

}

if($action=='register'){
    

    $request = json_decode(file_get_contents("php://input"), true);

    $CheckQuery = "select `userName` from user where `userName`='".$request['userName']."'";

    $result = $conn->query($CheckQuery);
    
    if ($result !== false && $result->num_rows > 0) {

        $response = array('statusCode'=>201,'message'=>"user already exists");
        sendResponse($response);

    } else {


        $Query = "insert into user (userName,firstName, lastName, email, phone, role, password) values ('".$request['userName']."','".$request['firstName']."','".$request['lastName']."','".$request['email']."','".$request['phone']."','".$request['role']."','".$request['password']."')";
        if ($result = $conn->query($Query) === TRUE){

            $response = array('statusCode'=>200,'message'=>"user created successfully");
            sendResponse($response);
        } else {

            echo "Error: " . $conn->error;
            $response = array('statusCode'=>500,'message'=>"Can't create user");
            sendResponse($response);
        }

    }

}


if($action=='getAllUsers'){


    $Query = "select * from user";


    $result = $conn->query($Query);

    if ($result !== false && $result->num_rows > 0) {

        $Users = array();
        
        while($row = mysqli_fetch_assoc($result)) {
            $Users[] = $row;
        }

        $response = array('statusCode'=>200,'users'=>$Users);

        sendResponse($response);

    } else {

        $response = array('statusCode'=>400,'message'=>"No Data Found");
        sendResponse($response);
    }    

}

if($action=='getUserByUserName'){


    $request = $_REQUEST;

    $Query = "select * from user where `userName`='".$request['userName']."'";

    $result = $conn->query($Query);



    if ($result !== false && $result->num_rows > 0) {
        $result = mysqli_fetch_assoc($result);
        $response = array('statusCode'=>200,'message'=>"Users data available","users" => $result);
        sendResponse($response);

    } else {

        $response = array('statusCode'=>400,'message'=>"Incorrect data");
        sendResponse($response);
    }    

}


if($action=='updateUser'){


    $request = json_decode(file_get_contents("php://input"), true);

    $Query = "update user set userName = '".$request['userName']."',firstName = '".$request['firstName']."', lastName = '".$request['lastName']."', email = '".$request['email']."', phone = '".$request['phone']."', role = '".$request['role']."', password = '".$request['password']."' where `userName`='".$request['userName']."'";

    if ($result = $conn->query($Query) === TRUE){

        $response = array('statusCode'=>200,'message'=>"user updated successfully");
        sendResponse($response);
    } else {

        $response = array('statusCode'=>500,'message'=>"Can't update user");
        sendResponse($response);
    }

}

if($action=='deleteUser'){


    $request = $_REQUEST;

    $Query = "delete from user where `userName`='".$request['userName']."'";

    if ($result = $conn->query($Query) === TRUE) {

        $response = array('statusCode'=>200,'message'=>"Users deleted successfully");
        sendResponse($response);

    } else {

        $response = array('statusCode'=>400,'message'=>"Incorrect data");
        sendResponse($response);
    }    

}


function sendResponse($response){
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($response);
}


?>