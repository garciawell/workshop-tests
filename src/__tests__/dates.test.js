import { parse } from "date-fns";
import { convertStringToDate, formatDate, getNextMonths } from "../utils/dates";

describe('getNextMonths', () => {
    let realDate;
    let currentDate;
  
    beforeEach(async () => {
      realDate = Date;
      global.Date = class extends Date {
        constructor(date) {
          if (date) {
            // eslint-disable-next-line constructor-super
            return super(date);
          }
          return currentDate;
        }
      };
    });
  
    afterEach(() => {
      global.Date = realDate;
    });
  
    it('should be able to getNext months', () => {
      currentDate = new Date('2021-03-14T11:01:58.135Z');
      const month = getNextMonths();
      const expectResult = [
        { name: 'Abril', id: '04/2021' },
        { name: 'Maio', id: '05/2021' },
      ];
  
      expect(month).toEqual(expectResult);
    });
  
    it('should be able to getNext months of next year', () => {
      currentDate = new Date('2021-12-14');
  
      const month = getNextMonths();
  
      const expectResult = [
        { name: 'Janeiro', id: '01/2022' },
        { name: 'Fevereiro', id: '02/2022' },
      ];
  
      expect(month).toEqual(expectResult);
    });
  });

  describe('formatDate', () => {
    it('should be able to formart date ptBr to En', () => {
      const date = '16/12/1994';
  
      expect(formatDate({ date, outFormat: 'yyyy-MM-dd' })).toEqual('1994-12-16');
    });
  });
  describe('convertStringToDate', () => {
    it('should be able to convert string to Date', () => {
      const date = '16/12/1994';
  
      expect(convertStringToDate({ date, inFormat: 'dd/MM/yyyy' })).toEqual(
        parse('16/12/1994', 'dd/MM/yyyy', new Date())
      );
    }); 
  });