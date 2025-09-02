const Utilitarios = require("../src/utilitarios");

const str = "testando"
const n1 = 8
const n2 = 5
const arr = [3,5,9,1]

describe("Classe Utilitários - Método Inverter String", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Inverter String", async () => {
    expect(utilitarios.inverterString(str)).toEqual("odnatset");
  });
});

describe("Classe Utilitários - Método Contar Caracteres", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Contar Caracteres", async () => {  
    expect(utilitarios.contarCaracteres(str)).toEqual(8);
  });
});

describe("Classe Utilitários - Método Para Maiúsculas", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Para Maiúsculas", async () => {  
    expect(utilitarios.paraMaiusculas(str)).toEqual("TESTANDO");
  });
});

describe("Classe Utilitários - Método Para Minúsculas", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Para Maiúsculas", async () => {  

    const upper = utilitarios.paraMinusculas(str)

    expect(utilitarios.paraMinusculas(upper)).toEqual("testando");
  });
});

describe("Classe Utilitários - Método Primeira Letra Maiúscula", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Letra Maiúscula", async () => {  
    expect(utilitarios.primeiraLetraMaiuscula(str)).toEqual("Testando");
  });
});

describe("Classe Utilitários - Método Somar", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Somar", async () => {  
    expect(utilitarios.somar(n1, n2)).toEqual(13);
  });
});

describe("Classe Utilitários - Método Subtrair", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Subtrair", async () => {  
    expect(utilitarios.subtrair(n1, n2)).toEqual(3);
  });
});

describe("Classe Utilitários - Método Multiplicar", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Multiplicar", async () => {  
    expect(utilitarios.multiplicar(n1, n2)).toEqual(40);
  });
});

describe("Classe Utilitários - Método Dividir", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Dividir", async () => {  
    expect(utilitarios.dividir(n1, n2)).toEqual(1.6);
    expect(() => utilitarios.dividir(n1, 0)).toThrow("Divisão por zero");
  });
});

describe("Classe Utilitários - Método É Par", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("É Par", async () => {  
    expect(utilitarios.ehPar(n1)).toEqual(true);
  });
});

describe("Classe Utilitários - Método Primeiro Elemento", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Primeiro Elemento", async () => {  
    expect(utilitarios.primeiroElemento(arr)).toEqual(3);
  });
});

describe("Classe Utilitários - Método Último Elemento", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Último Elemento", async () => {  
    expect(utilitarios.ultimoElemento(arr)).toEqual(1);
  });
});

describe("Classe Utilitários - Método Tamanho Array", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Tamanho Array", async () => {  
    expect(utilitarios.tamanhoArray(arr)).toEqual(4);
  });
});

describe("Classe Utilitários - Método Tamanho Array", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Tamanho Array", async () => {  
    expect(utilitarios.ordenarArray(arr)).toEqual([1,3,5,9]);
  });
});

describe("Classe Utilitários - Método Inverter Array", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Inverter Array", async () => {  
    expect(utilitarios.inverterArray(arr)).toEqual([1,9,5,3]);
  });
});

describe("Classe Utilitários - Método Gerar Número Aleatório", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Gerar Número Aleatório", async () => {  
    const numero = utilitarios.gerarNumeroAleatorio(n1)

    expect(numero).toBeGreaterThanOrEqual(0);
    expect(numero).toBeLessThan(9);
  });
});

describe("Classe Utilitários - Método É Número", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("É Número", async () => {  
    expect(utilitarios.ehNumero(n1)).toBeTruthy();
  });
});

describe("Classe Utilitários - Método Remover Espaços", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Remover Espaços", async () => {  
    expect(utilitarios.removerEspacos(str + " ")).toBe("testando");
  });
});

describe("Classe Utilitários - Método Repetir Texto", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Repetir Texto", async () => {  
    expect(utilitarios.repetirTexto(str, 2)).toBe("testandotestando");
  });
});

describe("Classe Utilitários - Método Juntar Array", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Juntar Array", async () => {  
    expect(utilitarios.juntarArray(arr)).toBe("3,5,9,1");
  });
});

describe("Classe Utilitários - Método Contar Palavras", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Contar Palavras", async () => {  
    expect(utilitarios.contarPalavras(str + " " + str)).toBe(2);
  });
});

describe("Classe Utilitários - Método Media Array", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Media Array", async () => {  
    expect(utilitarios.mediaArray(arr)).toBe(4.5);
  });
});

describe("Classe Utilitários - Método Remover Duplicados", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Remover Duplicados", async () => {  
    expect(utilitarios.removerDuplicados([...arr, 3])).toEqual(arr);
  });
});

describe("Classe Utilitários - Método É Palindromo", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("É Palindromo", async () => {  
    expect(utilitarios.ehPalindromo(str)).toBeFalsy();
  });
});

describe("Classe Utilitários - Método Mesclar Objetos", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios(); 
  });

  test("Mesclar Objetos", async () => {  
    expect(utilitarios.mesclarObjetos({ teste1: "teste1" }, { teste2: "teste2" })).toEqual({ teste1: "teste1", teste2: "teste2" });
  });
});