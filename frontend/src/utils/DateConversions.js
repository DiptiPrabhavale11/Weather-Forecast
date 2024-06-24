

const convertDate = (date, dayFlag) => {
    const currentDate = new Date(date);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get the respective day name
    const dayName = days[currentDate.getDay()];

    // Get the respective month name
    const monthName = months[currentDate.getMonth()];

    // Get the respective day of the month
    const dayOfMonth = currentDate.getDate();

    // Format the date
    let formattedDate = ``;
    if (dayFlag) {
        formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`;
    }
    else {
        formattedDate = `${monthName} ${dayOfMonth}`
    }
    return formattedDate
}

export default { convertDate };

