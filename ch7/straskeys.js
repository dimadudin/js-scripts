const getCountsByTitle = (movies) => {
    counts = {}
    for (let movie of movies) {
        if (!counts[movie]) {
            counts[movie] = 1;
        } else {
            counts[movie]++;
        }
    }
    return counts
}

// don't touch below this line

function test(movies) {
    const counts = getCountsByTitle(movies)
    for (const [movie, count] of Object.entries(counts)) {
        console.log(`'${movie}' has ${count} reviews`)
    }
    console.log('---')
}

test([
    'Ice Age',
    'The Forgotten',
    'The Northman',
    'American Psycho',
    'Ice Age',
    'Ice Age',
    'American Psycho'
])

test([
    'Big Daddy',
    'Big Daddy',
    'The Big Short',
    'The Big Short',
    'The Big Short'
])
