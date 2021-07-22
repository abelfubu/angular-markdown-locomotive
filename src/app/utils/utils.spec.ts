import { calcWinsize, getMousePos, lerp, map, randomFloat } from './utils';

fdescribe('utils', () => {
  it('should maap numbers', () => {
    const mapResult = map(1, 2, 3, 4, 5);
    expect(mapResult).toBe(3);
  });

  it('should lerp numbers', () => {
    const lerpResult = lerp(1, 2, 3);
    expect(lerpResult).toBe(4);
  });

  it('should calculate window size', () => {
    const calcResult = calcWinsize({ innerWidth: 100, innerHeight: 100 } as Window);
    expect(calcResult).toEqual({ width: 100, height: 100 });
  });

  it('should get mouse position page x and page y', () => {
    const mouseResult = getMousePos({ pageX: 100, pageY: 100 } as MouseEvent);
    expect(mouseResult).toEqual({ x: 100, y: 100 });
  });

  it('should get mouse position client x and client y', () => {
    const mouseResult = getMousePos({ clientX: 100, clientY: 100 } as MouseEvent);
    expect(mouseResult).toEqual({ x: 100, y: 100 });
  });

  it('should get random float', () => {
    const randomResult = randomFloat(100, 200);
    expect(randomResult).toBeGreaterThan(100);
  });
});
