document.getElementById('formularioo').addEventListener('submit', crear);

function crear(e) {
    dni = document.getElementById("id").value
    nombres = document.getElementById("nombres").value
    apellidos = document.getElementById("apellidos").value
    email = document.getElementById("correo").value
    tel = document.getElementById("telefono").value
    dir = document.getElementById("direccion").value
    pass = document.getElementById("password").value

    let afiliado = { dni, nombres, apellidos, email, tel, dir, pass }

    if (localStorage.getItem("Afiliados") === null) {
        let afiliados = [];
        afiliados.push(afiliado);
        localStorage.setItem("Afiliados", JSON.stringify(afiliados))
    } else {
        let afiliados = JSON.parse(localStorage.getItem("Afiliados"))
        afiliados.push(afiliado)
        localStorage.setItem("Afiliados", JSON.stringify(afiliados))
    }

    // leer();
    document.getElementById("formularioo").reset();
    e.preventDefault();

    alert("Datos del Afiliado Guardados Correctamente")
}


function redireccionar(){
window.location.href="./inicio.html"
//location.replace("./inicio.html")
};

function validar(){

  let afiliados = JSON.parse(localStorage.getItem("Afiliados"));
  u = document.getElementById('user').value;
  c = document.getElementById('contra').value;
 

  const afiliado = afiliados.find(afiliado => afiliado.dni === u && afiliado.pass === c); 
  
  if(afiliado){
    alert('Bienvenido(a)!')
    redireccionar();
  }
  else{
    alert('Aún no estas registrado')
  }
}

function limpiarCampos() {
  document.getElementById('user').value = ""
  document.getElementById('contra').value = ""
}