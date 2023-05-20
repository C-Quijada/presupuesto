var Presupuesto = function (name, monto){
    this.name = name
    this.monto = monto
    this.gastos = []
    this.saldo 
    this.calcular={}

  

}


var presupuestoUno = new Presupuesto('mi primer presupuesto' , 500000)

presupuestoUno.gastos.push(1)
console.log(presupuestoUno.gastos)


var btnAddPresupuesto = document.getElementById('agregar_presupuesto')

btnAddPresupuesto.addEventListener('submit', function (e){

    if(parseInt(document.getElementById('monto_presupuesto').value)){
        
    }
    e.preventDefault()
})


