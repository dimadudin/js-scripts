function getLabel(numStars) {
    if (numStars > 7) {
        return 'great'
    } else if (numStars > 3) {
        return 'okay'
    } else {
        return 'awful'
    }
}

// don't touch below this line

function test(numStars) {
    console.log(`Stars=${numStars}, The movie was ${getLabel(numStars)}`)
}

test(10)
test(9)
test(8)
test(7)
test(6)
test(5)
test(4)
test(3)
