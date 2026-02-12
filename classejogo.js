// Classe que representa um defensor em uma aventura
class Defensor {
  constructor(nome, idade, classe) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
    this.nivel = 1;
  }

  // Método que executa a defesa
  defender() {
    let tipoDefesa = "";
    
    // Estrutura de decisão para determinar o tipo de defesa
    if (this.classe === "paladino") {
      tipoDefesa = "levantou seu escudo sagrado";
    } else if (this.classe === "arqueiro") {
      tipoDefesa = "rolou para o lado";
    } else if (this.classe === "druida") {
      tipoDefesa = "invocou uma barreira de natureza";
    } else if (this.classe === "assassino") {
      tipoDefesa = "desapareceu nas sombras";
    } else {
      tipoDefesa = "se defendeu";
    }
    
    console.log(`O ${this.classe} ${tipoDefesa}`);
  }

  // Método adicional usando laço de repetição
  treinar(horas) {
    console.log(`${this.nome} começou o treinamento...`);
    
    for (let i = 1; i <= horas; i++) {
      console.log(`Hora ${i} de treinamento concluída`);
    }
    
    this.nivel += horas;
    console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
  }
}

// Função auxiliar para criar personagens
function criarPersonagem(nome, idade, classe) {
  return new Defensor(nome, idade, classe);
}

// Criando personagens usando variáveis
let heroi1 = criarPersonagem("Arthur", 28, "paladino");
let heroi2 = criarPersonagem("Legolas", 150, "arqueiro");
let heroi3 = criarPersonagem("Merlin", 45, "druida");

// Usando operadores e testando os métodos
heroi1.defender();
heroi2.defender();
heroi3.defender();

// Usando laço de repetição no treinamento
heroi1.treinar(3);