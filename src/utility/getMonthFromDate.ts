export function getMonthFromDate (date: string): number {
    const [, month,] = date?.split('/');

    return Number(month);
}