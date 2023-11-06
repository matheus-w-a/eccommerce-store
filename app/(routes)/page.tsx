import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard('f66ccaa0-b4fd-432c-97af-89f00727dd8c')
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title='Produtos em destaque' items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage