<!-- for connection  -->
<?php
$mysql = mysqli_connect("localhost", "root","", "alumniform");
error_reporting(0);
//check whether connection is ok or not
if($mysql){
     echo"connection was successful";
}
else{
    echo"sorry we failed to connect:".mysqli_connect_error();

}

?>


<?php
if(isset($_POST['submit']))
{   
   
    
    $Email=$_POST['Email'];
    $Password=$_POST['Password'];
    $Name=$_POST['Name'];
    $Father_name=$_POST['Father_name'];
    $Mobile=$_POST['Mobile'];
    $dob=$_POST['dob'];
    $Course=$_POST['Course'];
    $Present_job=$_POST['Present_job'];
    $Other=$_POST['Other'];
    $Designation=$_POST['Designation'];
    $Offc_add=$_POST['Offc_add'];
    $P_add=$_POST['P_add'];
    $Admsn_in=$_POST['Admsn_in'];
    $Admsn_out=$_POST['Admsn_out'];
    $Achievement=$_POST['Achievement'];
    
    $filename=$_FILES["Photo"]["name"];
    $tempname=$_FILES["Photo"]["tmp_name"];
    $file1="image/".$filename;
    move_uploaded_file($tempname,$file1);

    $filename2=$_FILES["Fee"]["name"];
    $tempname2=$_FILES["Fee"]["tmp_name"];
    $file2="image2/".$filename2;
    move_uploaded_file($tempname2,$file2);

    $sqli="INSERT INTO alumni (Email,Password,Name, Father_name, Mobile, dob,Course,Present_job, Other, Designation, Offc_add, P_add, Admsn_in, Admsn_out, Achievement,Photo,Fee) 
    VALUES ('$Email', '$Password', '$Name', '$Father_name', '$Mobile', '$dob', '$Course', '$Present_job', '$Other', '$Designation', '$Offc_add', '$P_add', '$Admsn_in', '$Admsn_out', '$Achievement','$file1','$file2');";

    $connection=mysqli_query($mysql,$sqli);
    if($connection)
    {
        echo"<script> alert('Registration successfully')</script>";
        ?>
        <meta http-equiv="refresh" content="0; url=http://localhost/project/form.html"/>
        <?php
    }
    else{
        echo"<script>alert('Failed')</script>";

    }
}

?>