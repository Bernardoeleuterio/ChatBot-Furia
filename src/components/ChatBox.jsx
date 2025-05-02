
import React, { useState } from "react";

export default function ChatBox() {
  const [mensagens, setMensagens] = useState([]);
  const [entrada, setEntrada] = useState("");

  const handleEnviar = () => {
    if (entrada.trim() === "") return;

    const novaMensagem = { texto: entrada, tipo: "usuario" };
    const resposta = gerarResposta(entrada);

    setMensagens([...mensagens, novaMensagem, { texto: resposta, tipo: "bot" }]);
    setEntrada("");
  };

  const gerarResposta = (pergunta) => {
    
    const perguntaLower = pergunta.toLowerCase();
    

    if (perguntaLower.includes("proximo jogo")) return "O próximo jogo da FURIA ainda não foi devinido, fique ligado nas redes sociais para saber os próximos jogos";
    if (perguntaLower.includes("capitão") || perguntaLower.includes("capitao")) return "O capitão do time de CS:GO é o Fallen!";
    if (perguntaLower.includes("camiseta")) return "Você pode comprar na loja oficial em loja.furia.gg!";
    if (perguntaLower.includes("resultado")) return "A FURIA perdeu o último jogo por 2x0!";
    if (perguntaLower.includes("time")) return "A nova Line-Up da Furia consiste em Fallen, KSCERATO, yuurih, YEKENDAR, Molodoy e o Sidde sendo o coach"
    if (perguntaLower.includes("lineup")) return "A nova Line-Up da Furia consiste em Fallen, KSCERATO, yuurih, YEKENDAR, Molodoy e o Sidde sendo o coach"
    if (perguntaLower.includes("onde assistir os jogos") || perguntaLower.includes("stream")) return "Você pode assistir aos jogos da FURIA no canal oficial da ESL no Twitch e no Gaules! ";
    if (perguntaLower.includes("história") || perguntaLower.includes("fundação")) return "A FURIA foi fundada em 2017 com a missão de transformar o cenário de esports brasileiro! ";
    if (perguntaLower.includes("quem é o coach") || perguntaLower.includes("treinador")) return "O coach do time é o Sidde, peça fundamental na evolução da equipe! ";
    if (perguntaLower.includes("valeu") || perguntaLower.includes("obrigado") || perguntaLower.includes("vlw")) return "Tamo junto, FURIOSO(A)! ";
    if (perguntaLower.includes("oi") || perguntaLower.includes("olá") || perguntaLower.includes("e aí") || perguntaLower.includes("ola")) return "Fala, FURIOSO(A)! Tudo certo? ";
    if (perguntaLower.includes("tudo bem") || perguntaLower.includes("como você está")) return "Tô ótimo, pronto pra torcer pela FURIA! E você, tudo certo? ";
    if (perguntaLower.includes("obrigado") || perguntaLower.includes("valeu")) return "Tamo junto! Se precisar, tô por aqui. ";
    if (perguntaLower.includes("instagram") || perguntaLower.includes("redes sociais")) return "Segue a FURIA no Insta! 📱 https://www.instagram.com/furiagg/";
    


    return "Desculpa, não entendi 😅. Tente outra pergunta!";
  };

  return (
    <div className="chatbox">
      <div className="mensagens">
        {mensagens.map((msg, index) => (
          <div key={index} className={msg.tipo}>
            {msg.texto}
          </div>
        ))}
      </div>
      <div className="entrada">
        <input
          type="text"
          placeholder="Digite sua pergunta..."
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEnviar()}
        />
        <button onClick={handleEnviar}>Enviar</button>
      </div>
    </div>
  );
}
