import { Button, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

function BasketPage() {
    //const { basket, setBasket, removeItem } = useStoreContext();
    // const [status, setStatus] = useState({
    //     loading: false,
    //     name: ''
    // });
    const { basket } = useAppSelector(state => state.basket);

    // function handleAddItem(productId: number, name: string) {
    //     setStatus({ loading: true, name });
    //     agent.Basket.addItem(productId)
    //         .then(basket => dispatch(setBasket(basket)))
    //         .catch(error => console.log(error))
    //         .finally(() => setStatus({ loading: false, name: '' }))
    // }

    // function handleRemoveItem(productId: number, quantity = 1, name: string) {
    //     setStatus({ loading: true, name });
    //     agent.Basket.deleteItem(productId, quantity)
    //         .then(() => dispatch(removeItem({ productId, quantity })))
    //         .catch(error => console.log(error))
    //         .finally(() => setStatus({ loading: false, name: '' }))
    // }

    if (!basket) return <Typography variant="h3"> Your Basket is Empty</Typography>

    return (
        <>
            <BasketTable items={basket.items} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button component={Link} to="/checkout" variant="contained" size='large' fullWidth>
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default BasketPage