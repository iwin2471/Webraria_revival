export default class Canvas {
  private element: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private static instance: Canvas;
  private constructor() {}

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new Canvas();
    }
    return this.instance;
  }

  //TODO:
  //게임 카메라 등 설정 모두 다 옮기기
  //스타듀, 샌드박스, 테라리아, 노맨스스카이, 굴착기
  public initElement(canvasId: string) {
    this.element = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.element.getContext("2d");
    this.context.scale(2, 2);
    this.context.translate(0, -2500);
  }

  public getContext() {
    return this.context;
  }

  public getElement() {
    return this.element;
  }
}
