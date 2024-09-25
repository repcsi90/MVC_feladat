class FeladatModell {
  #modeladat;
  constructor() {
    this.#modeladat = 22;
  }
  getModelAdat() {
    this.#modeladat *= 2;
    return this.#modeladat;
  }
}
export default FeladatModell;
