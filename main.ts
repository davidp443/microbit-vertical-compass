let offset = 0
let rad = 0
let z = 0
let x = 0
let neswn = images.createBigImage(`
# . . . # . # # # . . . # # . . # . # .# . . . #
# # . . # . # . . . . # . . . . # . # .# # . . #
# . # . # . # # # . . . # . . . # # # .# . # . #
# . . # # . # . . . . . . # . . # # # .# . . # #
# . . . # . # # # . . # # . . . # . # .# . . . #
`)
let nwsen = images.createBigImage(`
# . . . # . # . # . . . # # . . # # # .# . . . #
# # . . # . # . # . . # . . . . # . . .# # . . #
# . # . # . # # # . . . # . . . # # # .# . # . #
# . . # # . # # # . . . . # . . # . . .# . . # #
# . . . # . # . # . . # # . . . # # # .# . . . #
`)
basic.forever(function () {
    x = input.magneticForce(Dimension.X)
    z = input.magneticForce(Dimension.Z)
    // forward facing: 0 if the north is facing the screen
    rad = Math.atan2(x, 0 - z)
    // let deg = rad * 360 / 2 / Math.PI
    // 20 pixels / round
    offset = Math.round(rad * 20 / 2 / Math.PI)
    offset = (offset + 20) % 20
    nwsen.showImage(offset)
})
