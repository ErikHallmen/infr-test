basic.forever(function () {
	
})
let brightness = 0

input.onButtonPressed(Button.A, function () {
    // Öka ljusstyrkan med 51 varje gång (255 / 5 steg)
    brightness += 51
    if (brightness > 255) {
        brightness = 0
    }
    pins.analogWritePin(AnalogPin.P0, brightness)
})