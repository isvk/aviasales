import { Record } from "immutable";

export interface ITicket {
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

const initialTicket: ITicket = {
    price: 0,
    carrier: "",
    segments: [
        {
            origin: "",
            destination: "",
            date: "",
            stops: [],
            duration: 0
        },
        {
            origin: "",
            destination: "",
            date: "",
            stops: [],
            duration: 0
        }
    ]
};

export default class Ticket extends Record(initialTicket) implements ITicket {}
