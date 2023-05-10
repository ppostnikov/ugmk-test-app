export const factoryIdToFactoryName = (factoryId: number) => {
    switch (factoryId) {
        case 1:
            return 'А';
        case 2:
            return 'Б';
        default:
            return 'Неизвестная фабрика'
    }
}