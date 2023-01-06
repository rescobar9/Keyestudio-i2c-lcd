I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOff()
basic.pause(500)
I2C_LCD1602.BacklightOn()
I2C_LCD1602.BacklightOn()
basic.forever(function () {
    I2C_LCD1602.ShowString("Does this", 3, 0)
    I2C_LCD1602.ShowString("really work?", 3, 1)
})
