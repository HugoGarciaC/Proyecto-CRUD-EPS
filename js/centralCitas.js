document.getElementById('formulario1').addEventListener('submit', crear);

function crear(e) {
    tipoD = document.getElementById("tipoDoc").value
    dni = document.getElementById("id").value
    nombreP = document.getElementById("paciente").value
    date = document.getElementById("fecha").value
    espec = document.getElementById("especialidad").value

    let cita = { tipoD, dni, nombreP, date, espec }

    if (localStorage.getItem("Citas") === null) {
        let citas = [];
        citas.push(cita);
        localStorage.setItem("Citas", JSON.stringify(citas))
    } else {
        let citas = JSON.parse(localStorage.getItem("Citas"))
        citas.push(cita)
        localStorage.setItem("Citas", JSON.stringify(citas))
    }

    leer();
    document.getElementById("formulario1").reset();
    e.preventDefault();

    alert("Datos de la Cita Guardados Correctamente")
}


function leer() {
    let citas = JSON.parse(localStorage.getItem("Citas"));
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < citas.length; i++) {
        let tipoD = citas[i].tipoD;
        let dni = citas[i].dni;
        let nombreP = citas[i].nombreP;
        let date = citas[i].date;
        let espec = citas[i].espec;
        document.getElementById("tbody").innerHTML +=
            `<tr>
    <td>${tipoD}</td>
    <td>${dni}</td>
    <td>${nombreP}</td>
    <td>${date}</td>
    <td>${espec}</td>
    <td><button class="btn btn-success" onclick="Editar('${dni}')"><b><i class='bx bx-search-alt-2'></i></b></button>
    <button class="btn btn-danger" onclick="eliminar('${dni}')"><b><i class='bx bxs-trash'></i></b></button>
    </td>
    `
    }
}
leer();


function Editar(dni) {
    //var div = document.getElementById('body');
    let citas = JSON.parse(localStorage.getItem("Citas"));
    for (let i = 0; i < citas.length; i++) {
        if (citas[i].dni === dni) {
            document.getElementById("body").innerHTML = `
            <div class="container mt-2" id="body">
            <div class="card d-grid gap-2 col-6 mx-auto" style="width: 70%;">
                <div class="card-body">
                    <form id="formulario1">
                        <h5 class="mb-2" style="text-align: center;">Modifica tu Cita</h5>
                        <div class="input-group mt-3 mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class='bx bxs-credit-card'></i></span>
                            <select class="form-select" aria-label="Default select example" id="ntipoDoc" value="${citas[i].tipoD}">
                                <option selected>-- Seleccione Tipo de Documento</option>
                                <option value="CC">Cedula Ciudadania</option>
                                <option value="CE">Cedula Extranjeria</option>
                                <option value="TI">Tarjeta de Identidad</option>
                                <option value="RC">Registro Civil</option>
                                <option value="P">Pasaporte</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class='bx bxs-id-card'></i></span>
                            <input type="text" class="form-control" placeholder="Identificación" aria-label="Username"
                                aria-describedby="basic-addon1" id="nid" value="${citas[i].dni}">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class='bx bxs-user'></i></span>
                            <input type="text" class="form-control" placeholder="Paciente" aria-label="Username"
                                aria-describedby="basic-addon1" id="npaciente" value="${citas[i].nombreP}">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class='bx bxs-time'></i></span>
                            <input type="datetime-local" class="form-control" aria-label="Username"
                                aria-describedby="basic-addon1" id="nfecha" value="${citas[i].date}">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class='bx bx-health'></i></span>
                            <select class="form-select" aria-label="Default select example" id="nespecialidad" value="${citas[i].espec}">
                                <option selected>-- Seleccione la Especialidad</option>
                                <option value="Medicina General">Medicina General</option>
                                <option value="Oftalmología">Oftalmología</option>
                                <option value="Pediatria">Pediatria</option>
                                <option value="Ginecología">Ginecología</option>
                                <option value="Odontología">Odontología</option>
                            </select>
                        </div>
                        <hr>
                        <div class="container-xl row mb-2 mt-3">
                            <button type="btn bt-warning" class="btn btn-warning col-4 mx-auto" onclick="actualizar('${i}')"><b>Actualizar</b></button>
                            <button class="btn btn-secondary col-4 mx-auto"><b>Cancelar</b></button>
                          </div>
                    </form>
                </div>
            </div>
        </div>
            `
        }
    }
}


function actualizar(i) {
    //debugger;
    let citas = JSON.parse(localStorage.getItem("Citas"));
    citas[i].tipoD = document.getElementById('ntipoDoc').value;
    citas[i].dni = document.getElementById('nid').value;
    citas[i].nombreP = document.getElementById('npaciente').value;
    citas[i].date = document.getElementById('nfecha').value;
    citas[i].espec = document.getElementById('nespecialidad').value;
    localStorage.setItem("Citas", JSON.stringify(citas));
}


function eliminar(dni) {
    let citas = JSON.parse(localStorage.getItem("Citas"));
    for (let i = 0; i < citas.length; i++) {
        if (citas[i].dni == dni) {
            citas.splice(i, 1);
            alert('Cita eliminada Exitosamente')
        }
    }
    localStorage.setItem("Citas", JSON.stringify(citas));
    leer();
}

function limpiarCampos() {
    document.getElementById('tipoDoc').value = ""
    document.getElementById('id').value = ""
    document.getElementById('paciente').value = ""
    document.getElementById('fecha').value = ""
    document.getElementById('especialidad').value = ""
}