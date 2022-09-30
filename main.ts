input.onButtonPressed(Button.A, function () {
    Num1 += 1
    basic.showNumber(Num1)
})
input.onButtonPressed(Button.AB, function () {
    sum = Num1 + Num1
    basic.showNumber(sum)
})
input.onButtonPressed(Button.B, function () {
    Num1 += -1
    basic.showNumber(Num2)
})
input.onGesture(Gesture.Shake, function () {
    a = Num1 + 9
    b = Num1 - 9
    c = Num1 ** 2
    d = Num1 / 3
    e = Num1 % 4
    f = Math.sqrt(Num1)
    g = Math.round(0.75)
    h = Math.ceil(0.33)
    i = Num1 ** 3
    j = randint(Num1, 100)
})
let j = 0
let i = 0
let h = 0
let g = 0
let f = 0
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
let sum = 0
let Num2 = 0
let Num1 = 0
Num1 = 0
Num2 = 0
let Num3 = 0
basic.forever(function () {
	
})
