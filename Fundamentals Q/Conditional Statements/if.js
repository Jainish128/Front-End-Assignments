
// ========================= IF =========================
// ---------- Age Check for License ----------
var age = 18;
if (age >= 18) 
{
    document.getElementById('ageCheck').innerHTML=("You are eligible for License.");    
}

// ---------- Permission Check ----------
var firReg = "yes";

if (firReg == "yes") 
{
    document.getElementById("visa").innerHTML=("You are not Eligible for VISA.");    
}







// ========================= IF ELSE =========================
// ---------- Age Check for License ----------
var ageInput = document.getElementById("ageInput");

function ageCheck0() 
{
    if (ageInput.value >= 18) 
    {
        document.getElementById("ageCheck2").innerHTML = "You are Eligible for License."    
    } 
    else 
    {
        document.getElementById("ageCheck2").innerHTML = "You are not Eligible for License."    
    }
}

// ---------- Trip Permission Check ----------
var tripYes = document.getElementById("tripYes");

function tripParCheck() 
{
    if (tripYes.checked) 
    {
        document.getElementById("trip").innerHTML = "Your Welcome for this Trip.";    
    } 
    else 
    {
        document.getElementById("trip").innerHTML = "Sorry, you will not come for this Trip.";    
    }    
}







// ========================= if elseif else =========================
// ---------- who is elder ----------
var getAge = document.getElementById("getAge");

function age2() 
{
    if (getAge.value == 17) 
    {
        document.getElementById("age2").innerHTML = "You are Eligible for only Learner License."
    }  
    else if (getAge.value > 18) 
    {
        document.getElementById("age2").innerHTML = "You are Eligible for License."    
    }  
    else
    {
        document.getElementById("age2").innerHTML = "You are not Eligible for License."
    }
}

// ---------- Check Result ----------
function result() 
{
    var eng = document.getElementById("eng").value;
    var hindi = document.getElementById("hindi").value;
    var guj = document.getElementById("guj").value;
    
    // Total of Marks
    var total;
    total =+ eng + +hindi + +guj;
    document.getElementById("total").innerHTML = "Total Marks : " + total;

    // Percentage on behalf of Total
    var per = (total/300) * 100;
    document.getElementById("per").innerHTML = "Percentag : " + per;

    // Grade on Behalf of Percentage
    if (per >= 90) 
    {
        document.getElementById("grade").innerHTML = "PASS with Grade  A";    
    }
    else if (per >= 70) 
    {
        document.getElementById("grade").innerHTML = "PASS with Grade B";    
    }
    else if (per >= 40) 
    {
        document.getElementById("grade").innerHTML = "PASS with Grade C";    
    }
    else
    {
        document.getElementById("grade").innerHTML = "FAIL";
    }

}







// ========================= Nested if =========================
// ---------- Login Check ----------
var correct_email = "jainish@gmail.com";
var correct_pass = "Jainish123";
var status0 = "Block";
var user_email = document.getElementById("email");
var user_pass = document.getElementById("pass");

function login() 
{
    if (user_email.value == correct_email) 
    {
        if (user_pass.value == correct_pass) 
        {
            if (status0 == "Unblock") 
            {
                document.getElementById("success").innerHTML = "Login Successfully.";
            } 
            else 
            {
                document.getElementById("problem").innerHTML = "Your Status is Blocked !";
            }
        } 
        else 
        {
            document.getElementById("problem").innerHTML = "Password is Incorrect !";                
        }
    }
    else
    {
        document.getElementById("problem").innerHTML = "Email is Incorrect !";
    }
};

// ---------- Check Job Role ----------

var lang = document.getElementById("lang");
var fw = document.getElementById("fw"); 
var pl = document.getElementById("pl");
var fw2 = document.getElementById("fw2");
var jr = document.getElementById("jr");

function jobRole() 
{
    if (lang.value == "js") 
    {
        if (fw.value == "react") 
        {
            jr.innerHTML = "Your Job Role is Front-End Developer.";    
        }
        else
        {
            fw2.innerHTML = "Please Select your Framework of your Programming Language !";
        }
    }
    else if (lang.value == "php") 
    {
        if (fw.value == "laravel") 
        {
            jr.innerHTML = "Your Job Role is Back-End Developer.";    
        }
        else
        {
            fw2.innerHTML = "Please Select your Framework of your Programming Language !";
        }
    }
    else
    {
        pl.innerHTML = "Please Select your Programming Language !";
    }
}







// ========================= Switch case =========================

// ---------- Days ----------
var day = "Saturday";
switch (day) 
{
    case "Monday":
        document.getElementById("day").innerHTML = ('Today is Monday.');
        break;
    case "Tuesday":
        document.getElementById("day").innerHTML = ('Today is Tuesday.');
        break;
    case "Wednesday":
        document.getElementById("day").innerHTML = ('Today is Wednesday.');
        break;
    case "Thursday":
        document.getElementById("day").innerHTML = ('Today is Thursday.');
        break;
    case "Friday":
        document.getElementById("day").innerHTML = ('Today is Friday.');
        break;
    case "Saturday":
        document.getElementById("day").innerHTML = ('Today is Saturday.');
        break;
        
    default:
        document.getElementById("day").innerHTML = ('Today is Sunday.')
        break;
}


// ---------- Check Grade by Entering Percentage ----------

var ans = "Diwali"


    switch (ans) 
    {
        case "Makar Sankranti":
            document.getElementById("festival").innerHTML = "Makar Sankranti"
            break;
        case "Mahashivratri":
            document.getElementById("festival").innerHTML = "Mahashivratri"
            break;
        case "Holi":
            document.getElementById("festival").innerHTML = "Holi"
            break;
        case "Ganesh Chaturthi":
            document.getElementById("festival").innerHTML = "Ganesh Chaturthi"
            break;
        case "Navaratri":
            document.getElementById("festival").innerHTML = "Navaratri"
            break;
        case "Diwali":
            document.getElementById("festival").innerHTML = "Diwali"
            break;
        case "New Year":
            document.getElementById("festival").innerHTML = "New Year"
            break;
        
        default:
            document.getElementById("festival").innerHTML = 'No Festival'
            break;
    }    








// =========================  =========================