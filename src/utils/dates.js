import { format, addMonths, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { capitalizeString } from './global';



export const getNextMonths = () => {
    const dates = [];
  
    for (let i = 0; i < 2; i += 1) {
      dates.push({
        name: capitalizeString(
          format(addMonths(new Date(), i + 1), 'LLLL', { locale: ptBR })
        ),
        id: format(addMonths(new Date(), i + 1), 'MM/yyyy'),
      });
    }
  
    return dates;
  };
  

  export const convertStringToDate = ({ date, inFormat = 'dd/MM/yyyy' }) => {
    return parse(date, inFormat, new Date());
  };
  
  export const formatDate = ({
    date,
    inFormat = 'dd/MM/yyyy',
    outFormat = 'dd/MM/yyyy',
  }) => {
    const converteToDate = convertStringToDate({ date, inFormat });
    const formatDateString = format(converteToDate, outFormat);
    return formatDateString;
  };
  

  export const formatDateV2 = (date, format) => {
    let data = new Date(date);
    data = data.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    data = data.replace(/\//g, '.');
    if (format === 'dd-mm') {
      return data.substring(0, data.length - 5);
    }
    return data;
  };