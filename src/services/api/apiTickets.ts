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
                        price: ticket.price,
                        carrier: ticket.carrier,
                        segments: new Segments({
                            from: new Segment({
                                origin: ticket.segments[0].origin,
                                destination: ticket.segments[0].destination,
                                date: ticket.segments[0].date,
                                stops: List(ticket.segments[0].stops),
                                duration: ticket.segments[0].duration
                            }),
                            to: new Segment({
                                origin: ticket.segments[1].origin,
                                destination: ticket.segments[1].destination,
                                date: ticket.segments[1].date,
                                stops: List(ticket.segments[1].stops),
                                duration: ticket.segments[1].duration
                            })
                        })
                    });
                }),
                stop: response.stop
            };
        });
    };
}
