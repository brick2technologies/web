declare module "lenis" {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    gestureOrientation?: "vertical" | "horizontal";
    wheelMultiplier?: number;
    lerp?: number;
    syncTouch?: boolean;
    syncTouchLerp?: number;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    on(event: "scroll", callback: (e: { scroll: number }) => void): void;
    off(event: "scroll", callback: (e: { scroll: number }) => void): void;
    destroy(): void;
  }
}
