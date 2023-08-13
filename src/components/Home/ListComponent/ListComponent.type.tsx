export interface IText{
    text:string
}
export interface IItemList{
    children: string | JSX.Element | JSX.Element[];
    text: string
}
export interface IComponentList {
    name: string;
    source: string | JSX.Element | JSX.Element[];
}