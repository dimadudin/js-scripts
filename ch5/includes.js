function getCleanRank(reviewWords) {
    cnt = 0
    if (reviewWords.includes('dang')) {
        cnt++;
    }
    if (reviewWords.includes('shoot')) {
        cnt++;
    }
    if (reviewWords.includes('heck')) {
        cnt++;
    }
    let message = 'clean';
    if (cnt > 1) {
        message = 'filthy';
    } else if (cnt > 0) {
        message = 'dirty';
    }
    return message
}


// Don't edit below this line

function test(reviewWords) {
    const cleanRank = getCleanRank(reviewWords)
    console.log(`'${reviewWords}' has rank: ${cleanRank}`)
}

test(['avril', 'lavigne', 'has', 'best', 'dang', 'tour'])
test(['what', 'a', 'bad', 'film'])
test(['oh', 'my', 'heck', 'I', 'hated', 'it'])
test(['ripoff'])
test(['That', 'was', 'a', 'pleasure'])
test(['shoot!', 'I', 'cant', 'say', 'I', 'liked', 'the', 'dang', 'thing'])
test(['shoot', 'dang', 'heck'])

