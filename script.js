// ATIVIDADE 1: Regras Tradicionais vs IA
function classificarFilme() {
    const genero = document.getElementById("filmeInput").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("resultadoFilme");
    resultadoDiv.style.display = "block";
    resultadoDiv.className = "resultado neutro";

    if (genero === "ação") {
        resultadoDiv.innerText = "🎬 Recomendação: Vingadores";
    } else if (genero === "terror") {
        resultadoDiv.innerText = "🎬 Recomendação: Invocação do Mal";
    } else if (genero === "") {
        resultadoDiv.innerText = "Por favor, digite um gênero.";
    } else {
        // Mostra o limite do código tradicional se o aluno digitar algo diferente
        resultadoDiv.innerText = ` 🤔 O código não conhece o gênero "${genero}". Uma IA saberia associar sinônimos ou gostos parecidos!`;
    }
}

// ATIVIDADE 2: Detector de Bullying (Moderação de Texto)
function moderarTexto() {
    const texto = document.getElementById("textoInput").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("resultadoTexto");
    resultadoDiv.style.display = "block";

    const palavrasToxicas = ["feio", "bobo", "odiar", "fracassado"];
    const palavrasTexto = texto.split(/\s+/);
    
    // Filtra quais palavras da lista estão no texto do aluno
    const gatilhosEncontrados = palavrasTexto.filter(palavra => palavrasToxicas.includes(palavra));

    if (gatilhosEncontrados.length > 0) {
        resultadoDiv.className = "resultado alerta";
        resultadoDiv.innerText = `🚨 Alerta de Moderação! Palavras bloqueadas encontradas: [${gatilhosEncontrados.join(", ")}]. Reflita: essa frase é necessariamente maldosa ou depende do contexto?`;
    } else if (texto === "") {
        resultadoDiv.className = "resultado neutro";
        resultadoDiv.innerText = "Por favor, escreva um comentário para testar.";
    } else {
        resultadoDiv.className = "resultado sucesso";
        resultadoDiv.innerText = "✅ Comentário liberado pelo sistema.";
    }
}

// ATIVIDADE 3: Simulador de Crédito (Viés Algorítmico)
function analisarCredito() {
    const historico = document.getElementById("historicoInput").value;
    const bairro = document.getElementById("bairroInput").value;
    const resultadoDiv = document.getElementById("resultadoCredito");
    resultadoDiv.style.display = "block";

    let pontuacao = 0;

    if (historico === "bom") pontuacao += 50;
    
    // O viés inserido de forma oculta no código
    if (bairro === "periferia") {
        pontuacao -= 40; // Penalização geográfica injusta baseada em dados históricos viciados
    } else {
        pontuacao += 10;
    }

    if (pontuacao >= 50) {
        resultadoDiv.className = "resultado sucesso";
        resultadoDiv.innerText = `💳 Crédito Aprovado! (Pontuação: ${pontuacao}).`;
    } else {
        resultadoDiv.className = "resultado alerta";
        resultadoDiv.innerText = `❌ Crédito Negado devido ao perfil de risco. (Pontuação: ${pontuacao}). Repare: se mudar o bairro para "Central", o crédito é aprovado instantaneamente com o mesmo histórico!`;
    }
}
