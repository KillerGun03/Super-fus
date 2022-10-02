const userAction = async () => {
    const response = await fetch('http://localhost:9090/api/producto');
    const myJson = await response.json(); //extract JSON from the http response
    var divProducto = document.getElementById("producto");
    document.getElementById("seccion");
    for(x in myJson){
        var test = myJson[x];
        console.log(test);
        var divProducto = document.getElementById("producto");
        var span = document.getElementById("nombre");
        var spanDesc = document.getElementById("descripcion");
        var spanPres = document.getElementById("precio");
        var hiddenID = document.getElementById("id_Producto");
        span.textContent = test["nombre"];
        spanDesc.textContent = test["descripcion"];
        spanPres.textContent = "$ "+test["precio"];
        hiddenID.textContent = test["id_Producto"];
        var clone = divProducto.cloneNode(true);
        if(test["visibilidad" == true]){
            clone.removeAttribute("hidden");
        }
        clone.setAttribute("id", test["id_Producto"]);
        const rest = document.getElementById("seccion");
        rest.appendChild(clone);
    }
}
userAction();
