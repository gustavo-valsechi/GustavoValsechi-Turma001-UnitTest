const AnaliseDeDados = require("../src/analiseDeDados");

describe("Classe Análise De Dados - Método Adicionar Dados", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Adicionar dados com formato correto", async () => {
    analiseDeDados.adicionarDados([1,2,3,4,5])    
    expect(analiseDeDados.dados).toEqual([1,2,3,4,5]);
  });
  
  test("Adicionar dados com formato errado", async () => {
    expect(() => analiseDeDados.adicionarDados(5)).toThrow("Os dados devem ser um array.");
  });
});

describe("Classe Análise De Dados - Método Limpar Dados", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Adionar dados novos e limpar eles em seguida", async () => {
    analiseDeDados.adicionarDados([1,2,3,4,5])    
    expect(analiseDeDados.dados).toEqual([1,2,3,4,5]);
    analiseDeDados.limparDados()    
    expect(analiseDeDados.dados).toEqual([]);
  });
});

describe("Classe Análise De Dados - Método Ordenar Dados", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve ordernar os números de forma decrescente", async () => {
    analiseDeDados.adicionarDados([2,3,1,5,4]) 
    expect(analiseDeDados.ordenarDados()).toEqual([1,2,3,4,5]);
  });
});

describe("Classe Análise De Dados - Método Calcular Média", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular a média dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,2])
    expect(analiseDeDados.calcularMedia()).toEqual(3);
  });
});

describe("Classe Análise De Dados - Método Calcular Mediana", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular a mediana dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,2])
    expect(analiseDeDados.calcularMediana()).toEqual(3);
  });
});

describe("Classe Análise De Dados - Método Calcular Moda", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular a moda dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,2])
    expect(analiseDeDados.calcularModa()).toEqual([2,4]);
  });
});

describe("Classe Análise De Dados - Método Calcular Variancia", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular a variancia dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,2])
    expect(analiseDeDados.calcularVariancia()).toEqual(1);
  });
});

describe("Classe Análise De Dados - Método Calcular Desvio Padrão", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular o desvio padrão dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,2])
    expect(analiseDeDados.calcularDesvioPadrao()).toEqual(1);
  });
});

describe("Classe Análise De Dados - Método Encontrar Mínimo", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve encontrar o valor mínimo", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.encontrarMinimo()).toEqual(2);
  });
});

describe("Classe Análise De Dados - Método Encontrar Máximo", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve encontrar o valor máximo", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.encontrarMaximo()).toEqual(8);
  });
});

describe("Classe Análise De Dados - Método Normalizar Dados", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve normalizar os dados", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.normalizarDados()).toEqual([0, 0.3333333333333333, 0.3333333333333333, 1]);
  });
});

describe("Classe Análise De Dados - Método Calcular Percentil", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular o percentil dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.calcularPercentil(50)).toEqual(4);
  });
});

describe("Classe Análise De Dados - Método Calcular Soma", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular a soma dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.calcularSoma()).toEqual(18);
  });
});

describe("Classe Análise De Dados - Método Calcular Produto", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular o produto dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.calcularProduto()).toEqual(256);
  });
});

describe("Classe Análise De Dados - Método Calcular Amplitude", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular a amplitude dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.calcularAmplitude()).toEqual(6);
  });
});

describe("Classe Análise De Dados - Método Calcular Coeficiente Variacao", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular o coeficiente de variação dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.calcularCoeficienteVariacao()).toEqual(48.43221048378526);
  });
});

describe("Classe Análise De Dados - Método Remover Outliers", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve remover outliers dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    analiseDeDados.removerOutliers(0.5)
    expect(analiseDeDados.dados).toEqual([4,4]);
  });
});

describe("Classe Análise De Dados - Método Calcular Correlação", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
  });

  test("Deve calcular a correlação dos valores", async () => {
    analiseDeDados.adicionarDados([2,4,4,8])
    expect(analiseDeDados.calcularCorrelacao([2,4,2,4])).toEqual(0.6882472016116852);
  });
});