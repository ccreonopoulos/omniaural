import OmniAural from "../src/OmniAural";
import OmniObject from "../src/OmniObject";

export default class MyOmniObject extends OmniObject {
    constructor() {
        super()
        OmniAural.register(this, ["dev_mode", "account.address"])
    }

    stateChanged = (obj) => {
        console.log("Changes: " + JSON.stringify(obj))
    }
}