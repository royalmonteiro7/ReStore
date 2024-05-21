import { TextField, debounce } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { setProductParams } from './catalogSlice';
import { useState } from 'react';

function ProductSearch() {
    const { productParams } = useAppSelector(state => state.catalog);
    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
    const dispatch = useAppDispatch();

    const debouncedSearch = debounce((event: any) => {
        dispatch(setProductParams({ searchTerm: event.target.value }))
    }, 2000)

    return (
        <TextField
            label='Search products'
            variant="outlined"
            fullWidth
            value={searchTerm || ''}
            onChange={(event) => {
                setSearchTerm(event.target.value)
                debouncedSearch(event)
            }}
        />
    )
}

export default ProductSearch