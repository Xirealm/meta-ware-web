export const isAnyFieldEmpty = (data:object) =>  {
    return Object.values(data).some(value => !value);
}