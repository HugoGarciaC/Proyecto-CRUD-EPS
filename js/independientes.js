document.getElementById('formulario').addEventListener('submit', crear);

function crear(e) {
    tipoD = document.getElementById("tipoDoc").value
    dni = document.getElementById("id").value
    nombre = document.getElementById("nombre").value
    city = document.getElementById("ciudad").value
    dir = document.getElementById("direccion").value
    email = document.getElementById("correo").value
    barrio = document.getElementById("barrio").value
    sede = document.getElementById("sede").value

    let independiente = { tipoD, dni, nombre, city, dir, email, barrio, sede }

    if (localStorage.getItem("Independientes") === null) {
        let independientes = [];
        independientes.push(independiente);
        localStorage.setItem("Independientes", JSON.stringify(independientes))
    } else {
        let independientes = JSON.parse(localStorage.getItem("Independientes"))
        independientes.push(independiente)
        localStorage.setItem("Independientes", JSON.stringify(independientes))
    }

    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();

    alert("Datos del Independiente Guardados Correctamente")
}


function leer() {
    let independientes = JSON.parse(localStorage.getItem("Independientes"));
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < independientes.length; i++) {
        let tipoD = independientes[i].tipoD;
        let dni = independientes[i].dni;
        let _nombre = independientes[i].nombre;
        let _city = independientes[i].city;
        let _dir = independientes[i].dir;
        let _email = independientes[i].email;
        let _barrio = independientes[i].barrio;
        let _sede = independientes[i].sede;
        document.getElementById("tbody").innerHTML +=
            `<tr>
    <td>${tipoD}</td>
    <td>${dni}</td>
    <td>${_nombre}</td>
    <td>${_city}</td>
    <td>${_dir}</td>
    <td>${_email}</td>
    <td>${_barrio}</td>
    <td>${_sede}</td>
    <td><button class="btn btn-success" onclick="Editar('${dni}')"><b><i class='bx bx-search-alt-2'></i></b></button>
    <button class="btn btn-danger" onclick="eliminar('${dni}')"><b><i class='bx bxs-trash'></i></b></button></td>
    `
    }
}
leer();


function Editar(dni) {
    //var div = document.getElementById('body');
    let independientes = JSON.parse(localStorage.getItem("Independientes"));
    for (let i = 0; i < independientes.length; i++) {
        if (independientes[i].dni === dni) {
            document.getElementById("body").innerHTML = `
            <div class="container mt-2" id="body">
            <form class="row gy-2 gx-3 align-items-center" id="formulario">
                <h5 class="mb-2" style="text-align: center;">Modifica el Independiente</h5>
                <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                    <select class="form-select" id="ntipoDoc" value="${independientes[i].tipoD}">
                      <option selected>-- Seleccione Tipo de Identificación</option>
                      <option value="CC">Cedula Ciudadania</option>
                      <option value="CE">Cedula Extranjeria</option>
                      <option value="TI">Tarjeta de Identidad</option>
                      <option value="RC">Registro Civil</option>
                      <option value="P">Pasaporte</option>
                    </select>
                  </div>
                <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <input type="text" class="form-control" id="nid" placeholder="Número de Identificación" value="${independientes[i].dni}">
                    </div>
                  </div>
    
    
                <div class="col-auto col-6 mb-3">
                  <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input type="text" class="form-control" id="nnombre" placeholder="Empresa" value="${independientes[i].nombre}">
                  </div>
                </div>
                <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                    <select class="form-select" id="nciudad" value="${independientes[i].city}">
                      <option selected>-- Seleccione la Ciudad</option>
                      <option value="Medellín">Medellín</option>
                      <option value="Bogota">Bogota</option>
                      <option value="Cali">Cali</option>
                      <option value="Barranquilla">Barranquilla</option>
                    </select>
                  </div>
    
                  <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <input type="text" class="form-control" id="ndireccion" placeholder="Dirección" value="${independientes[i].dir}">
                    </div>
                  </div>
                  <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <input type="text" class="form-control" id="ncorreo" placeholder="Correo Eléctronico" value="${independientes[i].email}">
                    </div>
                  </div>
    
                  <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <input type="text" class="form-control" id="nbarrio" placeholder="Código Postal" value="${independientes[i].barrio}">
                    </div>
                  </div>
                  <div class="col-auto col-6 mb-3">
                      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select class="form-select" id="nsede" value="${independientes[i].sede}">
                        <option selected>-- Seleccione la Sede</option>
                        <option value="Norte">Norte</option>
                        <option value="Sur">Sur</option>
                        <option value="Este">Este</option>
                        <option value="Oeste">Oeste</option>
                        <option value="Centro">Centro</option>
                      </select>
                    </div>
    
                <div class="col-auto col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="acuerdo">
                    <label class="form-check-label" for="autoSizingCheck">
                      Estoy de Acuerdo
                    </label>
                  </div>
                </div>
    
                <div class="container-xl row mb-2 mt-3">
                  <button type="submit" class="btn btn-warning col-4 mx-auto" onclick="actualizar('${i}')"><b>Actualizar</b></button>
                  <button class="btn btn-secondary col-4 mx-auto"><b>Cancelar</b></button>
                </div>
              </form>
        </div>
            `
        }
    }
}


function actualizar(i) {
    //debugger;
    let independientes = JSON.parse(localStorage.getItem("Independientes"));
    independientes[i].tipoD = document.getElementById('ntipoDoc').value;
    independientes[i].dni = document.getElementById('nid').value;
    independientes[i].emp = document.getElementById('nnombre').value;
    independientes[i].city = document.getElementById('nciudad').value;
    independientes[i].dir = document.getElementById('ndireccion').value;
    independientes[i].email = document.getElementById('ncorreo').value;
    independientes[i].barrio = document.getElementById('nbarrio').value;
    independientes[i].sede = document.getElementById('nsede').value;
    localStorage.setItem("Independientes", JSON.stringify(independientes));
}


function eliminar(dni) {
    let independientes = JSON.parse(localStorage.getItem("Independientes"));
    for (let i = 0; i < independientes.length; i++) {
        if (independientes[i].dni == dni) {
            independientes.splice(i, 1);
            alert('Independiente eliminado(a) Exitosamente')
        }
    }
    localStorage.setItem("Independientes", JSON.stringify(independientes));
    leer();
}