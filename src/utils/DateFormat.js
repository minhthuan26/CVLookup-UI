export const dateFormat = (date, format) => {
    if (format === 'yyyy/mm/dd') {
        return new Date(date.getYear(), date.getMonth(), date.getDate())
    }
    else if (format === 'mm/dd/yyyy') {
        return new Date(date.getMonth(), date.getDate(), date.getYear())
    }
    else if (format === 'dd/mm/yyyy') {
        return new Date(date.getDate(), date.getMonth(), date.getYear())
    } else {
        return date
    }
}