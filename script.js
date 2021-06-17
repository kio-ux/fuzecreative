function validateRegist(){
    let name= document.getElementById("fullName");
    let email= document.getElementById("email");
    let address= document.getElementById("address");
    let username = document.getElementById("username");
    let label = document.getElementById("lblError");
    let patt = /^[A-Za-z]+$/g;
    let myEmail = email.value;
    let atEmail = myEmail.indexOf("@");
    let emailValAt = myEmail.substring(atEmail,myEmail.length+1)
    var valid = false;
    var x = document.formRegist.gender;
    var region = document.formRegist.region.value;
    var music = document.formRegist.music.value;


    for(var i=0;i<x.length;i++){
        if (x[i].checked) {
            valid=true;
            break
        }
    }
    let addressCount = document.getElementById("address").value.split(/\s+/).length;
    // let AtUser = username.value.startsWith('@',0));


    if(name.value.length < 5 || name.value.length >20){
        label.innerText = " Nama Harus 5-20 Karakter ";
        return false;
    }else if (name.value=="") {
        label.innerText= "Nama Lengkap harus diisi";
        return false;
    }else if (!/^[a-zA-Z]*$/g.test(name.value)) {
        label.innerText = "Nama Hanya bisa menggunakan Alfabet";
        return false;
    }else if(email.value ==""){
        label.innerText = "Email Harus diisi";
        return false;
    }else if (!(myEmail.indexOf("@")>=0) || !myEmail.endsWith(".com") || myEmail.length <6 ) {
        label.innerText = "Email Harus Menggunakan '@' dan '.com' ";
        return false;
    }
    else if (username.value=="") {
        label.innerText= "Username Harus diisi";
        return false;
    }
    else if (!(username.value.startsWith("@"))||username.value.length <2) {
        label.innerText = "Username Harus dimulai dengan '@' ";
        return false;
    }
    else if(address == ""){
        label.innerText = "Alamat harus Diisi";
        return false;
    }else if (addressCount < 5) {
        label.innerText = "Alamat harus Lebih dari 5 Kata";
        return false;
    }
    else if (address.value.indexOf("jalan")>=0) {
        label.innerText = "Text yang diisi harus mengandung kata 'Jalan'";
        return false;
    }else if (!valid) {
        label.innerText = "Pilih salah 1 Gender";
        return false;
    }else if (region=="Region") {
        label.innerText = "Pilih salah satu Region"
        return false;
    }else if (music=="Kategori Musik") {
        label.innerText = "Pilih salah satu Kategori Musik"
        return false;
    }
    else if(name.value==""||email.value=="" || address.value==""||username.value==""){
        label.innerText = "Semua Form harus diisi";
        return false;
    }else{
        alert("Registrasi Berhasil dilakukan!")
        return true;
    }
}
