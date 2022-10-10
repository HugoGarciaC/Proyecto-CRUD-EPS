document.getElementById('formulario').addEventListener('submit', crear);

function crear(e) {
    tipoD = document.getElementById("tipoDoc").value
    dni = document.getElementById("id").value
    emp = document.getElementById("empresa").value
    city = document.getElementById("ciudad").value
    dir = document.getElementById("direccion").value
    email = document.getElementById("correo").value
    cPostal = document.getElementById("codPostal").value
    regim = document.getElementById("regimen").value

    let empleador = { tipoD, dni, emp, city, dir, email, cPostal, regim }

    if (localStorage.getItem("Empleadores") === null) {
        let empleadores = [];
        empleadores.push(empleador);
        localStorage.setItem("Empleadores", JSON.stringify(empleadores))
    } else {
        let empleadores = JSON.parse(localStorage.getItem("Empleadores"))
        empleadores.push(empleador)
        localStorage.setItem("Empleadores", JSON.stringify(empleadores))
    }

    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();

    alert("Datos del Empleador Guardados Correctamente")
}


function leer() {
    let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < empleadores.length; i++) {
        let tipoD = empleadores[i].tipoD;
        let dni = empleadores[i].dni;
        let _emp = empleadores[i].emp;
        let _city = empleadores[i].city;
        let _dir = empleadores[i].dir;
        let _email = empleadores[i].email;
        let _cPostal = empleadores[i].cPostal;
        let _regim = empleadores[i].regim;
        document.getElementById("tbody").innerHTML +=
            `<tr>
    <td>${tipoD}</td>
    <td>${dni}</td>
    <td>${_emp}</td>
    <td>${_city}</td>
    <td>${_dir}</td>
    <td>${_email}</td>
    <td>${_cPostal}</td>
    <td>${_regim}</td>
    <td><button class="btn btn-success" onclick="Editar('${dni}')"><b><i class='bx bx-search-alt-2'></i></b></button>
    <button class="btn btn-danger" onclick="eliminar('${dni}')"><b><i class='bx bxs-trash'></i></b></button></td>
    `
    }
}
leer();


function Editar(dni) {
    //var div = document.getElementById('body');
    let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
    for (let i = 0; i < empleadores.length; i++) {
        if (empleadores[i].dni === dni) {
            document.getElementById("body").innerHTML = `
            <div class="container mt-2" id="body">
            <form class="row gy-2 gx-3 align-items-center" id="formulario">
                <h5 class="mb-2" style="text-align: center;">Modifica el Empleador</h5>
                <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                    <select class="form-select" id="ntipoDoc" value="${empleadores[i].tipoD}">
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
                      <input type="text" class="form-control" id="nid" placeholder="Número de Identificación" value="${empleadores[i].dni}">
                    </div>
                  </div>
    
    
                <div class="col-auto col-6 mb-3">
                  <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input type="text" class="form-control" id="nempresa" placeholder="Empresa" value="${empleadores[i].emp}">
                  </div>
                </div>
                <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                    <select class="form-select" id="nciudad" value="${empleadores[i].city}">
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
                      <input type="text" class="form-control" id="ndireccion" placeholder="Dirección" value="${empleadores[i].dir}">
                    </div>
                  </div>
                  <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <input type="text" class="form-control" id="ncorreo" placeholder="Correo Eléctronico" value="${empleadores[i].email}">
                    </div>
                  </div>
    
                  <div class="col-auto col-6 mb-3">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <input type="text" class="form-control" id="ncodPostal" placeholder="Código Postal" value="${empleadores[i].cPostal}">
                    </div>
                  </div>
                  <div class="col-auto col-6 mb-3">
                      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select class="form-select" id="nregimen" value="${empleadores[i].regim}">
                        <option selected>-- Seleccione el Regimen</option>
                        <option value="Responsable de IVA">Responsable de IVA</option>
                        <option value="Persona Natural Responsable de IVA">Persona Natural Responsable de IVA</option>
                        <option value="Regimen Especial">Regimen Especial</option>
                        <option value="Persona Natural NO Responsable de IVA">Persona Natural NO Responsable de IVA</option>
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
    let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
    empleadores[i].tipoD = document.getElementById('ntipoDoc').value;
    empleadores[i].dni = document.getElementById('nid').value;
    empleadores[i].emp = document.getElementById('nempresa').value;
    empleadores[i].city = document.getElementById('nciudad').value;
    empleadores[i].dir = document.getElementById('ndireccion').value;
    empleadores[i].email = document.getElementById('ncorreo').value;
    empleadores[i].cPostal = document.getElementById('ncodPostal').value;
    empleadores[i].regim = document.getElementById('nregimen').value;
    localStorage.setItem("Empleadores", JSON.stringify(empleadores));
}


function eliminar(dni) {
    let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
    for (let i = 0; i < empleadores.length; i++) {
        if (empleadores[i].dni == dni) {
            empleadores.splice(i, 1);
            alert('Empleador(a) eliminado(a) Exitosamente')
        }
    }
    localStorage.setItem("Empleadores", JSON.stringify(empleadores));
    leer();
}