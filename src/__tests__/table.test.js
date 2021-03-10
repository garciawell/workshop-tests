import orderSalesByDate from "../utils/table";


describe('orderSalesByDate', () => {
  it('should be able to add number sale between date start and end Date && order ASC by sale_date', () => {
    const salesData = [
      {
        period: {
          start_date: '2020-07-15T03:00:00.000-00:00',
          end_date: '2020-07-22T03:00:00.000-00:00',
          title: '15.07 a 21.07',
        },
        sales_amount: 2,
        sales: [
          {
            customer_name: 'Helber Fernandes Lopes',
            sale_date: '2020-07-21T22:05:28.000-00:00',
          },
          {
            customer_name: 'Thainá Damasceno De Jesus',
            sale_date: '2020-07-15T20:58:28.000-00:00',
          },
          {
            customer_name: 'Thainá Damasceno De Jesus',
            sale_date: '2020-07-17T20:58:28.000-00:00',
          },
        ],
      },
      {
        period: {
          start_date: '2020-07-08T03:00:00.000-00:00',
          end_date: '2020-07-15T03:00:00.000-00:00',
          title: '08.07 a 14.07',
        },
        sales_amount: 1,
        sales: [
          {
            customer_name: 'Alison Henrique Bressiano',
            sale_date: '2020-07-08T15:32:11.000-00:00',
          },
        ],
      },
    ];

    const execFunction = orderSalesByDate(salesData[0]);


    const responseDates = [
      { date: '15.07', sales: 1 },
      { date: '16.07', sales: 0 },
      { date: '17.07', sales: 1 },
      { date: '18.07', sales: 0 },
      { date: '19.07', sales: 0 },
      { date: '20.07', sales: 0 },
      { date: '21.07', sales: 1 },
    ];

    expect(execFunction).toEqual(responseDates);
  });
});