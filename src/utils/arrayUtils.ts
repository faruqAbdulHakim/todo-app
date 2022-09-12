type Item = {
  id: number;
};

export function findItemIndexById<TItem extends Item>(
  items: TItem[],
  id: number
) {
  return items.findIndex((item) => item.id === id);
}

export function removeItemAtIndex<TItem>(items: TItem[], index: number) {
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

export function insertItemAtIndex<TItem>(
  items: TItem[],
  item: TItem,
  index: number
) {
  return [...items.slice(0, index), item, ...items.slice(index)];
}
