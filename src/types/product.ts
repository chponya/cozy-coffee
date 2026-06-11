export interface Product {
    id: number
    name: string
    slug: string

    description: string
    price: number
    image: string
    category: ProductCategory
}

export type ProductCategory =
  | 'coffee'
  | 'tea'
  | 'cold-drinks'
  | 'dessert'
  | 'food'


//   export type DrinkSize =
//   | 'small'
//   | 'medium'
//   | 'large'

//   export type MilkType =
//   | 'regular'
//   | 'oat'
//   | 'almond'
//   | 'coconut'