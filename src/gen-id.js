let current = 0

const genID = () => {
    const id = current
    current += 1
    return `gradient${id}`
}

export default genID
