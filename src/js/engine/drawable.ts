export default interface Drawable {
  sprite: HTMLImageElement;
  loaded: boolean;
  clearRect(): void;
}
