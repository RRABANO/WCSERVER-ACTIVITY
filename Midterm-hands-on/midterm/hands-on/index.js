const express = require('express');

const app = express();

const dishes = [{
    type: 'Sisig',
    province: 'Pampanga' , 
    price: 220

},
{
    type: 'Salpicao' , 
    province: 'Quezon',
    price: 180
},
{ 
    type: 'Bagnet', 
    province: 'ilocos',
    price: 370
}
];

app.get('/api/dishes', (req, res) => {
    res.send(dishes);
});

app.get('/api/dishes/:search', (req, res) => {
    const search = req.params.search;
    const Dish = dishes.find (
        (h) =>
        h.type.toLowerCase().includes(search.toLowerCase()) ||
        h.province.toLowerCase().includes(search.toLowerCase()) ||
        h.price === parseInt(search));
    if (!Dish) return res.status(404).send('The dish is not found');
    res.send(Dish);
});

app.listen(3000, () => console.log('Listening on port 3000'));