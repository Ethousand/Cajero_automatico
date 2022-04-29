class Billete
{
    constructor(v, c)
    {
        this.value = v;
        this.cantidad = c;
    }

}



function Entregar_dinero()
{
    result.innerHTML = ""; // reinicia y 
    var dinero_pedido = parseInt(pedido.value);

    cant_entregar = 0; //variables que mide el dinero a entregar
    div = 0; // indica cuantos billetes se requieren en la iteracion

    // dentro del for solo se contaran los billetes, si estos solo se entregan a la cifra exacta

    for (bi of caja) //bi es el tipo de billete que itera dentro de la caja
    {
        if (dinero_pedido > 0)
        {
            div = Math.floor(dinero_pedido / bi.value);

            if (div > bi.cantidad)
            {
                cant_entregar = bi.cantidad;     
            }
            else
            {
                cant_entregar = div;
            }

            // tarea, no mostrar el billete si se uso 0 veces  --check--
            if (cant_entregar > 0 )
                {
                    result.innerHTML += "<br>" + cant_entregar + " billetes de $" + bi.value; + "<br>";
                }
            
            entregar.push(new Billete(bi.value, cant_entregar));
            dinero_pedido -= (cant_entregar * bi.value);


            //cambiar el valor de la caja una vez retirado los billetes --check--

        }
    }

    if (dinero_pedido > 0 )
    {
        result.innerHTML = "no puedo darte la cantidad que me pides";
    }
    else
    {
        // bi es el billete que se está contando para entregar
        
        // se utliza un ciclo for in para tener una variable iteradora comun entre los arrays de -caja- y -entregar- luego 

        for (const bi in entregar)
        {
            caja[bi].cantidad -= entregar[bi].cantidad;
            console.log(caja);
            //mostrar historial de retiro
        }
        dinero_entregado = contar(entregar);
        historia.innerHTML += "retiro de " + dinero_entregado + "</br>";

    }

    //mostrar cuanto dinero tiene disponible para entregar

    dinero_disponible = contar(caja);
    label.innerHTML = dinero_disponible;

    entregar = [];
}


//función para automatizar el contar los billetes

function contar(box)
{
    var resume = 0;
    for (bi of box)
    {
        resume = bi.value * bi.cantidad + resume;
    }
    return resume
}

caja = [];
entregar = [];

pedido = document.getElementById("pedir_Billete");

boton = document.getElementById("retirar_Billete");
boton.addEventListener("click", Entregar_dinero);

var result = document.getElementById("resultado");
var label = document.getElementById("$_disponible");
var historia = document.getElementById("historial");

historia.innerHTML = "transacciones realizadas: </br>";

// history = variable que muestra el historial de las transacciones 

caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

dinero_disponible = contar(caja);
dinero_pedido = pedido.value;

label.innerHTML = dinero_disponible;