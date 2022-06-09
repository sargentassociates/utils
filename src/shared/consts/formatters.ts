export const getFormatterFns = () => {
    const formatPercent = (value: number) => `${value}%`
    const formatCurrency = (value: number) => `$ ${value}`

    return { formatCurrency, formatPercent }
}
