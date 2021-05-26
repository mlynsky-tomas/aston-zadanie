export const getUIDate = (date) => {
    let dateString
    dateString = `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth()+1)).slice(-2)}.${date.getFullYear()}`
    return dateString
}

export const convertDate = (date) => {
    let dateArray
    let dateString

    dateArray = date.split(".")
    dateString = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
    return dateString
}