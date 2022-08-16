const monthNames: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

/**
 * A method to get the full english name of a month given it's number.
 * @param monthNumber The number of the month, using the current one as fallback.
 * @returns The full english name of the given month.
 */
export const getMonthName = (monthNumber: number = (new Date()).getMonth()): string => {
    return monthNames[monthNumber];
}

/**
 * A method to get the next month from a given date.
 * @param date The date to get the month from, if not present use current-date.
 * @returns The number of the month.
 */
export const getNextMonth = (date: Date = new Date()): number => {
    return (date.getMonth() + 1) % 12;
}