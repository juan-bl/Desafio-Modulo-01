function solucao(jogadores) {
  //seu codigo aqui
  let index0 = [], index1 = [];

  for (let i = 0; i < jogadores.length; i++) {
      if (jogadores[i].jogada === 0) {
          index0.push(i);
      } else {
          index1.push(i);
      };
  };

  if (index0.length === 1) {
      console.log(jogadores[index0].nome);
  } else if (index1.length === 1) {
      console.log(jogadores[index1].nome);
  } else {
      console.log('NINGUEM');
  };
  
};

const jogadores = [
  {
    nome: "Herman",
    jogada: 1,
  },
  {
    nome: "Rhodes",
    jogada: 0,
  },
  {
    nome: "Beach",
    jogada: 0,
  },
  {
    nome: "Laurel",
    jogada: 0,
  },
  {
    nome: "Beatrice",
    jogada: 0,
  },
  {
    nome: "Alison",
    jogada: 0,
  },
  {
    nome: "Saundra",
    jogada: 0,
  },
  {
    nome: "Klein",
    jogada: 0,
  },
];

solucao(jogadores);