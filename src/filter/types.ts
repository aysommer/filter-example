export type FilterItemType = {
   id: string;
   text: string;
};

export type FilterProps = {
   items: FilterItemType[];
   width: number;
   headerText: string;
};