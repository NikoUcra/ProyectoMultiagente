function main() {
	var ipM = $("#ip").val();
	var portM = $("#port").val();
	var nC = $("#ncompradores").val();
	const agente = new Agente(ipM, portM, nC);
	agente.run();
}
