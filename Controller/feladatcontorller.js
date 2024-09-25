import Feladtview from "../View/feladatView.js";
import FeladatModell from "../Modell/feladatmodell.js";
class FeladatController {
  constructor() {
    const szuloelem = $("div.eredmeny");
    const feladatview = new Feladtview("adat", szuloelem);
    const gomb = $("button");
    const feladatmodell = new FeladatModell();
    gomb.on("click", () => {
      let eredmeny = feladatmodell.getModelAdat();
      feladatview.setErtek(eredmeny);
    });
  }
}
export default FeladatController;
