import { IHttp } from "../IHttp";
import Ticket from "src/models/ticket";
import { List } from "immutable";
import Segment from "src/models/segment";
import Segments from "src/models/segments";

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

export interface IApiTickets {
    tickets: IApiTicket[];
    stop: boolean;
}

export default class ApiTicket {
    constructor(private http: IHttp, private url: string = "tickets") {}

    loadTickets = (searchId: string) => {
        return this.http.get(this.url + "?searchId=" + searchId).then((response: IApiTickets) => {
            return {
                tickets: response.tickets.map((ticket: IApiTicket) => {
                    return new Ticket({
                        ...ticket,
                        segments: new Segments({
                            from: new Segment({
                                ...ticket.segments[0],
                                stops: List(ticket.segments[0].stops)
                            }),
                            to: new Segment({
                                ...ticket.segments[1],
                                stops: List(ticket.segments[1].stops)
                            })
                        })
                    });
                }),
                stop: response.stop
            };
        });
    };
}
