export interface IFilter {
    columnName: string;
    columnFilter: IFilterItem[];
}

export interface IFilterItem {
    key: string;
    fieldName: string;
    option: string;
    checked: boolean;
}