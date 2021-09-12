import numbro from 'numbro'

export const formatWatchCount = count => numbro(count).format({ average: true, spaceSeparated: true })
