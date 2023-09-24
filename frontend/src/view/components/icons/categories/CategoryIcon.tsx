import { iconsMap } from './iconsMap'

interface CategoryIconProps {
  type: 'EXPENSE' | 'INCOME';
  category?: string;
}

export function CategoryIcon({ type, category }: CategoryIconProps) {
  const Icon = iconsMap[type][
    category as keyof (typeof iconsMap.EXPENSE | typeof iconsMap.INCOME)
  ] ?? iconsMap[type].default

  return <Icon />
}
