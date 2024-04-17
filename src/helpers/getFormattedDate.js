export const getFormattedDate = (release_date) => {
    const date = new Date(release_date);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year;
    return formattedDate;
}