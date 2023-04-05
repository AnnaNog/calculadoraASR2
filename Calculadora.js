export default {
    data() {
      return {
        valorCorrente: '',
        numeroAnterior: null,
        operador: null,
        operadorClicado: false,
      };
    },
    methods: {
      limpar() {
        this.valorCorrente = '';
      },
      sinal() {
        this.valorCorrente = this.valorCorrente.charAt(0) === '-' 
        ? this.valorCorrente.slice(1) 
        : `-${this.valorCorrente}`;
      },
      porcentagem() {
        this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
      },
      juntarNumeros(numero) {
        if (this.operadorClicado) {
          this.valorCorrente = '';
          this.operadorClicado = false;
        }
        this.valorCorrente = `${this.valorCorrente}${numero}`;
      },
      ponto() {
        if (this.valorCorrente.indexOf('.') === -1) {
          this.juntarNumeros('.');
        }
      },
      setarValor(){
        this.numeroAnterior = this.valorCorrente;
        this.operadorClicado = true;
      },
      resultado(){
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior), 
          parseFloat(this.valorCorrente)
        )}`;
        this.numeroAnterior = null;
      },
      dividir() {
        this.operador = (num1, num2) => num1 / num2;
        this.setarValor();
      },
      multiplicar() {
        this.operador = (num1, num2) => num1 * num2;
        this.setarValor();
      },
      diminuir() {
        this.operador = (num1, num2) => num1 - num2;
        this.setarValor();
      },
      somar() {
        this.operador = (num1, num2) => num1 + num2;
        this.setarValor();
      },
      log10() {
        if (this.valorCorrente === 0 || this.valorCorrente === "") {
            this.valorCorrente = 'Erro';
            return;
        }
        this.valorCorrente = `${Math.log10(parseFloat(this.valorCorrente))}`;
      },
      logco() {
        this.operador = (num1, num2) => {
            if (num2 === 0 || num2 === "") {
                return 'Erro';
            }
            return Math.log(num1) / Math.log(num2);
        }
        this.setarValor();
      },
      raizQuadrada() {
        if (this.valorCorrente < 0) {
            this.valorCorrente = 'Erro';
            return;
        }
        this.valorCorrente = `${Math.sqrt(parseFloat(this.valorCorrente))}`;
      },
      raizQuadradaCo() {
        this.operador = (num1, num2) => {
            if (num1 < 0) {
                return 'Erro';
            }
            return Math.pow(num1, 1 / num2);
        }
        this.setarValor();
      },
      elevado2() {
        this.valorCorrente = `${Math.pow(parseFloat(this.valorCorrente), 2)}`;
      },
      potencia() {
        this.operador = (num1, num2) => Math.pow(num1, num2);
        this.setarValor();
      },
    },
  };