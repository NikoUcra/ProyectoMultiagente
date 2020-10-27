class Comprador{

    constructor(ip,puerto,ipMonitor,puertoMonitor){
        this.ip=ip;
        this.ipMonitor=ipMonitor;
        this.puertoMonitor=puertoMonitor;
        this.id=null;
        this.listaCompra = [];
        this.listaTiendas = [];
    }

    run(){
        Agente.envios(this.ipMonitor,this.puertoMonitor,GestorMensajes.pedirID(),GestorMensajes.procesaID(),this);
        for(tienda in listaTiendas){
            if(this.listaCompra != []){
            this.entrarTienda(tienda);
            this.pideTienda(tienda);
            this.salirTienda(tienda);
            }else{
                this.desconectar();
            }
        }

    }

    entrarTienda(tienda){
        Agente.envios(tienda.ip,tienda.puerto,GestorMensajes.comprar(),GestorMensajes.procesaCompra(),this);
    }
    salirTienda(tienda){
        Agente.envios(tienda.ip,tienda.puerto,GestorMensajes.salir(),GestorMensajes.procesaSalida(),this);
    };
    desconectar(){
        Agente.envios(this.ipMonitor,this.puertoMonitor,GestorMensajes.desconectar(),GestorMensajes.procesaDesconecta(),this);
    }

}
