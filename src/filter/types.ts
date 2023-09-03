export type FilterStatus = 'awaitingСhoice' | 'selected';

export type NumberEntrySettings = {
   kind: 'numberEntry';
   max: number;
   min: number;
   maxLength?: number;
}

type SelectItem = {
   value: string;
   text: string;
}

export type SelectSettings = {
   kind: 'select';
   items: SelectItem[];
};

type FilterItemSettings =
   NumberEntrySettings |
   SelectSettings;

export type FilterItemType = {
   id: string;
   text: string;
   settings: FilterItemSettings;
};

export type SelectedFilterItem = {
   title: string;
   onHide(): void;
};

export type InsideFilterItemType = FilterItemType & {
   status: FilterStatus;
};

export type FilterProps<T> = {
   items: T[];
   width: number;
   headerText: string;
};