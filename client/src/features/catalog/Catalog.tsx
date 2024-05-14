import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";

function Catalog() {
    //const [products, setProducts] = useState<Product[]>([]);
    //const [loading, setLoading] = useState(true);

    const products = useAppSelector(productSelectors.selectAll)
    const { productsLoaded, status } = useAppSelector(state => state.catalog)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
        // agent.Catalog.list()
        //     .then(products => setProducts(products))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false))
    }, [dispatch, productsLoaded])

    if (status.includes('pendingFetchProducts')) return <LoadingComponent message="Loading products..." />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}

export default Catalog