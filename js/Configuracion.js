    let ingresos = [
        new Ingreso('SALARIO NSC', 20000),
        new Ingreso('VENTA TC250', 50000),
        new Ingreso('MARIA ES JUANA', 15000)
    ];

    let egresos = [
        new Egreso('RENTA DEL DEPA', 4000),
        new Egreso('COMPRAR ROPA DE PACA', 800),
        new Egreso('RENTA DE LOCAL', 800),
        new Egreso('COMPRA DE BOMBAS NUCLEARES', 15000)
    ];

    const totalIngresos = () => {
        let totalIngreso = 0;
        for (const c of ingresos) {
        totalIngreso += c.valor;
        }
        return totalIngreso;
    };
  
    const totalEgresos = () => {
        let totalEgreso = 0;
        for (const c of egresos) {
        totalEgreso += c.valor;
    }
    return totalEgreso;
    };
  
    const formatoMoneda = (valor) => {
        return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
    }
  
    const formatoPorcentaje = (valor) => {
        return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
    }

    const cargarIngresos = () => {
        let ingresosHTML = '';
        for (const ingreso of ingresos) {
          ingresosHTML += crearIngresoHTML(ingreso);
          console.log(ingreso._descripcion);
        }
        document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
    }

    const crearIngresoHTML = (ingreso) => {
        const ingresoHTML = 
        `<div class="elemento limpiarEstilos">
                        <div class="elemento_descripcion">${ingreso._descripcion}</div>
                        <div class="derecha limpiarEstilos">
                            <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>            
                            <button class="elemento_eliminar_btn" onclick="eliminarIngreso(${ingreso._id})">
                                <ion-icon name="close-circle-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                        </div>
            </div>
        </div>`;
            return ingresoHTML;
    }
      
    const cargarEgresos = () => {
        let egresosHTML = '';
        for (const egreso of egresos) {
            egresosHTML += crearEgresoHTML(egreso);
            console.log(egreso._descripcion);
        }
        document.getElementById('lista-egresos').innerHTML = egresosHTML;
    }
    
    const crearEgresoHTML = (egreso) => {
        const PresupuestoTotalElem = document.getElementById('ingresos');
        const PresupuestoTotal = parseFloat(PresupuestoTotalElem.textContent.replace(/[^\d.-]/g, ''));
        const PorcentajeInd = formatoPorcentaje((egreso._valor / PresupuestoTotal));
        const ingresoHTML = 
        `<div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso._descripcion}</div>
                        <div class="derecha limpiarEstilos">
                            <div class="elemento_valor">${formatoMoneda(egreso._valor)}</div>
                            <div class="elemento_porcentaje">${PorcentajeInd}</div>
                            <div class="elemento_eliminar">
                            <button class="elemento_eliminar_btn" onclick="eliminarEgreso(${egreso._id})">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                            </div>
                        </div>
                        </div>
            </div>
        </div>`;
        return ingresoHTML;
    }

    //metodo que impide que el usuario ingrese los caracteres + y - por que sino truena esta baina
    document.getElementById('valor').addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === '-' || key === '+') { 
          event.preventDefault();
        }
        }
    );

    const miApp = new App();
    miApp.cargarApp();
  
    let app = new App();
  
    const eliminarIngreso = (id) => {
      const indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
      ingresos.splice(indiceEliminar, 1);
      miApp.cargarCabecero();
      cargarIngresos();
    }
  
    const eliminarEgreso = (id) => {
      const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
      egresos.splice(indiceEliminar, 1);
      miApp.cargarCabecero();
      cargarEgresos();
    }