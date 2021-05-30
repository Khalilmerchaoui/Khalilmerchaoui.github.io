	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Walnuts",
		imageSrc: "https://res-3.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1558619544/linkisin/production/product/Walnuts-Slider-1_gv4hks.png",
		lactose: true,
		nutAllergy: false,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		imageSrc: "https://butterwithasideofbread.com/wp-content/uploads/2019/07/White-Bread_10.bsb_.jpg",
		lactose: true,
		nutAllergy: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		imageSrc: "https://static01.nyt.com/images/2016/04/13/dining/13PAIRING/13PAIRING-articleLarge.jpg",
		lactose: true,
		nutAllergy: true,
		organic: false,
		price: 10.05
	},
	{
		name: "Eggs",
		imageSrc: "https://i5.walmartimages.com/asr/8c9b9170-0c7f-40f2-a366-740d6edfe308_1.ccc95ee672954b6f801ba94fde24bb10.png?odnWidth=612&odnHeight=612&odnBg=ffffff",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 6.00
	},
	{
		name: "Cheese",
		imageSrc: "https://3ner1e34iilsjdn1qohanunu-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/BeemsterGouda_ftr.jpg",
		lactose: false,
		nutAllergy: true,
		organic: true,
		price: 5.35
	},
	{
		name: "Chicken nuggets",
		imageSrc: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.826.620.suffix/1383770571120.jpeg",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 18.99
	},
	{
		name: "Milk",
		imageSrc: "data:image/jpeg;base64,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",
		lactose: false,
		nutAllergy: true,
		organic: false,
		price: 4.25
	},
	{
		name: "Yogurt",
		imageSrc: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3LnNlYXNvbmFsY3JhdmluZ3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2hpZ2hwcm90ZWlucXVpbm9heW9ndXJ0cGFyZmFpdDEwLmpwZyIsImV4cGlyZXNfYXQiOjE2NTE2ODc0ODd9.I_jEcZmhO-MvpfQMFi2GtKIwKWXGLyVqV9qIdmJ8YLg/img.jpg?width=2000&height=2000",
		lactose: false,
		nutAllergy: true,
		organic: false,
		price: 5.00
	},
	{
		name: "Almonds",
		imageSrc: "https://www.chieftainwildrice.com/images/custom/2018%20Nuts%20and%20Seeds/N14-raw-almonds-whole-main.jpg",
		lactose: true,
		nutAllergy: false,
		organic: true,
		price: 3.19
	},
	{
		name: "Nutella",
		imageSrc: "https://www.artisanalfoods.com/wp-content/uploads/2017/12/NUTELLA.jpg",
		lactose: false,
		nutAllergy: false,
		organic: false,
		price: 4
	},
];
	
var organicFoodIcon = "https://itsjillicious.com/wp-content/uploads/2014/07/organic.jpeg";

var organicOnly = false;
var quantityMap = [];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let list = products.slice();

	console.log(restriction);
	if ( restriction == "lactose" ) {
		list = applyFilter(restriction, list, true);
	}
	if ( restriction == "nutAllergy" ) {
		list = applyFilter(restriction, list, true);
	}

	if ( organicOnly ) {
		list = applyFilter( "organic", list, true);
	}

	return list;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts, quantityMap) {
	totalPrice = 0;

	for (let i = 0; i < chosenProducts.length; i++) {
		totalPrice += chosenProducts[i].price * quantityMap[chosenProducts[i].name];
	}
	return totalPrice;
}

function applyFilter(attribute, list, pass ) {
	return list.filter(function( item ){ 
		return item[attribute] === pass;
	});
}
