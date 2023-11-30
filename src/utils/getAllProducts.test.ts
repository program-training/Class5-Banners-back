import 'dotenv/config'
import { expectTypeOf } from "vitest"
import getAllProducts from "./getAllProducts"

console.log('url', process.env.ERP_BASE_URL);


describe('get all products', () => {
  it('get the products', async () => {
    const allProducts = await getAllProducts()
    const product1 = allProducts[0]

    expectTypeOf(allProducts).toBeArray()
    expect(product1).toHaveProperty('id')
    expect(product1).toHaveProperty('name')
    expect(product1).toHaveProperty('description')
    expect(product1).toHaveProperty('category')
    expect(product1).toHaveProperty('imageUrl')
  })
})