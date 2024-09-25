class Feladtview {
  constructor(adat, szuloelem) {
    szuloelem.append("<p>");
    this.pelem = szuloelem.children("p");
    this.setErtek(adat);
  }
  setErtek(jel) {
    this.pelem.html(jel);
  }
}
export default Feladtview;
