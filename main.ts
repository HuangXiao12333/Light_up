//% weight=100  color=#00A654   block="Light_up" icon="\uf067"
namespace ledTricks {
    /**
    * Blinks the LED once.
    */
    //% block
    export function blink() {
        led.point(1, 1)
        pause(500)
        led.point(5, 5)
        pause(500)
    }
}