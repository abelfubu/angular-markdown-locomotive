declare module 'locomotive-scroll' {
  type Direction = 'horizontal' | 'vertical'

  interface MobileOptions {
    smooth?: boolean
    direction: Direction
    horizontalGesture?: boolean
  }

  interface TabletOptions extends MobileOptions {
    breakpoint?: number
  }

  interface ScrollOptions {
    el?: HTMLElement
    name?: string
    offset?: [number, number]
    repeat?: boolean
    smooth?: boolean
    initPosition?: { x: number; y: number }
    direction?: Direction
    lerp?: number
    getDirection?: boolean
    getSpeed?: boolean
    class?: string
    initClass?: string
    scrollingClass?: string
    draggingClass?: string
    smoothClass?: string
    scrollBackContainer?: HTMLElement
    scrollbarClass?: string
    multiplier?: number
    firefoxMultiplier?: number
    scrollFromAnywhere?: boolean
    gestureDirection?: string
    smartphone?: MobileOptions
    tablet?: TabletOptions
    reloadOnContextChange?: boolean
    resetNativeScroll?: boolean
  }

  export default class {
    constructor(options: ScrollOptions)
    init: () => void
    on: (eventName: 'scroll' | 'call', callback: (...args: unknown[]) => unknown) => unknown
    update: () => void
    destroy: () => void
    start: () => void
    stop: () => void
    scrollTo: (element: HTMLElement) => void
  }
}
