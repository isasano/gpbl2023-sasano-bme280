OLED.init(128, 64)
basic.forever(function () {
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_pressure))
    basic.pause(1000)
    OLED.clear()
})
