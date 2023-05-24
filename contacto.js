function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
  
function validateName(nombre){
    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
    }
}


function validateForm() {
    // Retrieve the input values
    var nombre = document.getElementById("nombre").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
  
    // Perform validation
    if (!validateName(nombre)) {
        return false; // Prevent form submission
    }
  
    if (celular.trim()== "" || isNaN(celular) || celular[0]=="-") {
        alert("El número de celular no es correcto");
        return false;
    }
  
    if (email.trim() == "" || !validateEmail(email.trim()) ) {
        alert("La dirección de email no es correcta");
        return false;
    }
    
    // Additional validation rules can be added here
    alert("El formulario se envió correctamente")

    // If all validations pass, allow form submission
    return true;
}

 