basic.forever(function () {
    if (input.acceleration(Dimension.X) <= 5 && input.acceleration(Dimension.X) >= -5) {
        basic.showIcon(IconNames.Heart)
    } else {
        if (input.acceleration(Dimension.X) > 5 && input.acceleration(Dimension.X) <= 200) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # #
                . . . . #
                . . . . .
                `)
        } else {
            if (input.acceleration(Dimension.X) > 200 && input.acceleration(Dimension.X) <= 1023) {
                basic.showLeds(`
                    . . . # .
                    . . # # .
                    . # # # #
                    . . # # .
                    . . . # .
                    `)
            } else {
                if (input.acceleration(Dimension.X) < -5 && input.acceleration(Dimension.X) >= -200) {
                    basic.showLeds(`
                        . . . . .
                        # . . . .
                        # # . . .
                        # . . . .
                        . . . . .
                        `)
                } else {
                    if (input.acceleration(Dimension.X) < -200 && input.acceleration(Dimension.X) >= -1023) {
                        basic.showLeds(`
                            . # . . .
                            . # # . .
                            # # # # .
                            . # # . .
                            . # . . .
                            `)
                    }
                }
            }
        }
    }
})
