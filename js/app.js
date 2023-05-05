class App {    
    cargarCabecero = () => {
    const _totalI = totalIngresos();
    const _totalE = totalEgresos();
    const presupuesto = formatoMoneda(_totalI - _totalE); 
    const porcentajeEgreso = formatoPorcentaje(_totalE / _totalI);

    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = formatoMoneda(_totalI);
    document.getElementById('egresos').innerHTML = formatoMoneda(_totalE);
  }

  cargarApp() {
    this.cargarCabecero();
    cargarIngresos();
    cargarEgresos();
  }

  //agregarDato = () => {
  agregarDato = (accion = false) => {
    if(!accion)
        return;

    const forma = document.getElementById('forma');

    const tipo = forma.tipo.value;
    const descripcion = forma.descripcion.value.toUpperCase();
    const valor = parseFloat(forma.querySelector(".agregar_valor").value);

    if (descripcion !== "" && valor !== "") {
      if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, valor));
      }else if (tipo === 'egreso'){
        egresos.push(new Egreso(descripcion, valor));
      }else{
        alert("Ingrese el tipo de gasto Ingreso o Egreso");
        return;
      }
      miApp.cargarCabecero();
        cargarIngresos();
        cargarEgresos();      
    }else{
      alert("Ingrese la descripcion y valor del elemento que quiere agregar");
    }
  }
}