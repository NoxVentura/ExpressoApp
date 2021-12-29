function showUser() {
    document.getElementById('user').style.display="block";
    document.getElementById('staff').style.display="none";
    document.getElementById('vendor').style.display="none";
    
}
function showStaff() {
    document.getElementById('user').style.display="none";
    document.getElementById('staff').style.display="block";
    document.getElementById('vendor').style.display="none";
}

function showUserLogin() {
    document.getElementById('userLogin').style.display="block";
    document.getElementById('staffLogin').style.display="none";
    document.getElementById('vendorLogin').style.display="none";
    
}
function showStaffLogin() {
    document.getElementById('userLogin').style.display="none";
    document.getElementById('staffLogin').style.display="block";
    document.getElementById('vendorLogin').style.display="none";
}
 
function showVendor() {
    document.getElementById('user').style.display="none";
    document.getElementById('staff').style.display="none";
    document.getElementById('vendor').style.display="block";
}

 function showVendorLogin() {
     document.getElementById('userLogin').style.display="none";
     document.getElementById('staffLogin').style.display="none";
    document.getElementById('vendorLogin').style.display="block";

 } 