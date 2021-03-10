import { validateEmail } from "../utils/email";



  describe('EMAIL VALIDATION', () => {
    it('should be able to valid email', () => {
      expect(validateEmail('teste@gmail.com')).toEqual(true);
      expect(validateEmail('teste.teste@gmail.com')).toEqual(true);
      expect(validateEmail('teste+teste@gmail.com')).toEqual(true);
      expect(validateEmail('aeae@bae3e.com')).toEqual(true);
      expect(validateEmail('teste@gmail.com')).toEqual(true);
      expect(validateEmail('teste@gmail.com.br')).toEqual(true);
      expect(validateEmail('teste-teste@gmail.com')).toEqual(true);
      expect(validateEmail('teste@222.com')).toEqual(true);
      expect(validateEmail('TESTE@gmail.com')).toEqual(true);
      expect(validateEmail('Teste@gmail.com')).toEqual(true);
      expect(validateEmail('teste-@gmail.com')).toEqual(true);
      expect(validateEmail('teste_@gmail.com')).toEqual(true);
      expect(validateEmail('teste-teste-@gmail.com')).toEqual(true);
      expect(validateEmail('bb@teste.com')).toEqual(true);
      expect(validateEmail('teste@aa.com')).toEqual(true);
    });
  
    it('should be able to not valid email', () => {
      expect(validateEmail('fabriciofor..@bol.com.br')).toEqual(false);
      expect(validateEmail('bruno@teste..com')).toEqual(false);
      expect(validateEmail('br@a.com')).toEqual(false);
      expect(validateEmail('b@teste.com')).toEqual(false);
      expect(validateEmail('bruno@a.com')).toEqual(false);
      expect(validateEmail('fabriciofor..@bol.com.br')).toEqual(false);
      expect(validateEmail('22.tegmail.com..')).toEqual(false);
      expect(validateEmail('22.teste.com')).toEqual(false);
      expect(validateEmail('teste.com')).toEqual(false);
      expect(validateEmail('22@teste.com')).toEqual(false);
      expect(validateEmail('22.@teste.com ')).toEqual(false);
      expect(validateEmail('te ste@gmail.com')).toEqual(false);
      expect(validateEmail('222.@gmail.com')).toEqual(false);
      expect(validateEmail('ddd.@gmail.com')).toEqual(false);
      expect(validateEmail('d2d.@gmail.com')).toEqual(false);
      expect(validateEmail('d2d+@gmail.com')).toEqual(false);
      expect(validateEmail('teste@gmail.commmmmmmmmmm')).toEqual(false);
  
      expect(validateEmail('teste@$sd.com')).toEqual(false);
      expect(validateEmail('teste@2__.com')).toEqual(false);
      expect(validateEmail('test%e@teste.com')).toEqual(false);
      expect(validateEmail('//@teste.com')).toEqual(false);
      expect(validateEmail('[/@teste.com')).toEqual(false);
      expect(validateEmail('ll/@teste.com')).toEqual(false);
      expect(validateEmail('fabriciofor§@bol.com.br')).toEqual(false);
      expect(validateEmail('bruno#@bol.com.br')).toEqual(false);
    });
  });