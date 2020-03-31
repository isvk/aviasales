export interface IApiTicket {
    price: number; // Цена в рублях
    carrier: string; // Код авиакомпании (iata)
    // Массив перелётов. В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
        {
            origin: string; // Код города (iata)
            destination: string; // Код города (iata)
            date: string; // Дата и время вылета туда
            stops: string[]; // Массив кодов (iata) городов с пересадками
            duration: number; // Общее время перелёта в минутах
        },
        {
            origin: string; // Код города (iata)
            destination: string; // Код города (iata)
            date: string; // Дата и время вылета обратно
            stops: string[]; // Массив кодов (iata) городов с пересадками
            duration: number; // Общее время перелёта в минутах
        }
    ];
}
