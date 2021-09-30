const url = new URL(location)

export default Object.fromEntries(
    url.searchParams.entries()
)
