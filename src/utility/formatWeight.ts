export const formatWeight = (value: number) => {
    if (!value || value === 0) {
        return 0;
    }

    return Math.floor(value / 1000);
};