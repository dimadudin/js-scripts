function isMovieValid(title) {
    function movieLength(title) {
        const len = title.length
        return len
    }

    // don't touch above this line

    len = movieLength(title)
    return len > 2
}

// don't touch below this line

function test(title) {
    const valid = isMovieValid(title)
    console.log(`'${title}' is valid: ${valid}`)
}

test('ballin')
