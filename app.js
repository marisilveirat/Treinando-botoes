<meta charset="utf-8">
<input/>
<button>compare o segredo</button>

<script>

var segredos = [5, 7, 10, 12];

var input = document.querySelector("input");
input.focus();

function verifica() {

	var achou = false;
	for(var posicao = 0; posicao < segredos.length; posicao++) {
	if(input.value == segredos[posicao]) {
		alert("ACERTOU!");
		achou = true;
		break;
	}
	}
	if(achou == false) {
	alert("ERROU!");
	}
	
	input.value = "";
	input.focus();
}

var button = document.querySelector("button");
button.onclick = verifica;
	
</script>
