import Bottle from "bottlejs";
import Http from "./http";
import ApiSearch from "./api/apiSearch";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiSearch", ApiSearch, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiSearch: ApiSearch;
    }
}
