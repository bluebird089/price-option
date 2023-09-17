import { useEffect, useState } from "react";

const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([]);

    useEffect(() => {
        fetch('price-option.json')
        .then(res => res.json())
        .then(data => setPriceOptions(data))
    }, [])

    return (
        <div>
            <p>Price Options: {priceOptions.length}</p>
        </div>
    );
};

export default PriceOptions;