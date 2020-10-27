class Agente {
    constructor(ipMonitor, portMonitor, nCompradores) {
        this.ipMonitor = ipMonitor;
        this.portMonitor = portMonitor;
        this.nCompradores = nCompradores;
        this.ip = "111";
        this.ListaCompradores = [];
    }
    generarcompradores() {
        for (var i = 0; i < this.nCompradores; i++) {
            var comprador = new Comprador(this.ip, this.ipMonitor, this.portMonitor);
            comprador.run();
            this.ListaCompradores.push(comprador);
        }
    }
    run() {
        this.generarcompradores();
    }
    static envios(ip, puerto, xml, funcion,objeto) {
        var URL = "http://" + ip + ":" + puerto;
        $.ajax({
            url: URL,
            type: "POST",
            data: xml,
            dataType: 'text',
            success: function (result) {
                funcion(result,objeto);
            }
        })
    }
    static copiaMensaje(mensaje) {
        var URL = "http://" + this.ipMonitor + ":" + this.portMonitor;
        $.ajax({
            url: URL,
            type: "POST",
            data: mensaje,
            dataType: 'text',
        })
    }

}