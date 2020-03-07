import Bottle from "bottlejs";
import Http from "./http";
import ApiSearch from "./api/apiSearch";
import ApiTicket from "./api/apiTickets";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiSearch", ApiSearch, "Http");
bottle.service("ApiTicket", ApiTicket, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiSearch: ApiSearch;
        ApiTicket: ApiTicket;
    }
}
