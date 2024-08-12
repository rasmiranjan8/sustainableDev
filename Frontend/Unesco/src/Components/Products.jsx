import ProductItem from "./ProductItem";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  const products = [
    {
      name: "Paper bag",
      img: "paperBag.jpg",
      price: 30,
      rating: 4.0,
      category: "Daily Life Use",
    },
    {
      name: "Bamboo Toothbrush",
      img: "bambooToothbrush.jpg",
      price: 50,
      rating: 4.3,
      category: "Daily Life Use",
    },
    {
      name: "Organic Hair Oil",
      img: "organicHairOil.jpg",
      price: 350,
      rating: 4.6,
      category: "Daily Life Use",
    },
    {
      name: "Face Cream",
      img: "faceCream.jpg",
      price: 450,
      rating: 4.5,
      category: "Daily Life Use",
    },
    {
      name: "Soap",
      img: "soap.jpg",
      price: 100,
      rating: 4.4,
      category: "Daily Life Use",
    },
    {
      name: "Cups",
      img: "cups.jpg",
      price: 150,
      rating: 4.3,
      category: "Daily Life Use",
    },
  
    {
      name: "Cotton shopping bags",
      img: "cottonBags.jpg",
      price: 80,
      rating: 4.2,
      category: "Daily Life Use",
    },
    {
      name: "Wooden cutlery",
      img: "woodenCutlery.jpg",
      price: 200,
      rating: 4.4,
      category: "Daily Life Use",
    },
    {
      name: "Beeswax food wraps",
      img: "beeswaxFoodWraps.jpg",
      price: 300,
      rating: 4.5,
      category: "Food Item",
    },
    {
      name: "Hemp clothing",
      img: "hempClothing.jpg",
      price: 1200,
      rating: 4.7,
      category: "Wearable Item",
    },
    {
      name: "Coconut shell bowls",
      img: "coconutShellBowls.jpg",
      price: 350,
      rating: 4.4,
      category: "Food Item",
    },
    
    {
      name: "Jute rugs",
      img: "juteRugs.jpg",
      price: 2000,
      rating: 4.8,
      category: "Luxury Item",
    },
 
    {
      name: "Biodegradable plant pots",
      img: "biodegradablePlantPots.jpg",
      price: 250,
      rating: 4.3,
      category: "Daily Life Use",
    },
    
    
    {
      name: "Organic cotton towels",
      img: "organicCottonTowels.jpg",
      price: 800,
      rating: 4.6,
      category: "Daily Life Use",
    },
    {
      name: "Recycled paper notebooks",
      img: "recycledPaperNotebooks.jpg",
      price: 150,
      rating: 4.2,
      category: "Daily Life Use",
    },
    {
      name: "Bamboo straws",
      img: "bambooStraws.jpg",
      price: 100,
      rating: 4.3,
      category: "Food Item",
    },
    {
      name: "Linen napkins",
      img: "linenNapkins.jpg",
      price: 250,
      rating: 4.4,
      category: "Daily Life Use",
    },
    {
      name: "Soy wax candles",
      img: "soyWaxCandles.jpg",
      price: 500,
      rating: 4.6,
      category: "Luxury Item",
    },
    {
      name: "Compostable trash bags",
      img: "compostableTrashBags.jpg",
      price: 180,
      rating: 4.3,
      category: "Daily Life Use",
    },
    {
      name: "Reusable silicone food storage bags",
      img: "reusableSiliconeFoodStorageBags.jpg",
      price: 400,
      rating: 4.5,
      category: "Food Item",
    },
    {
      name: "Bamboo hairbrushes",
      img: "bambooHairbrushes.jpg",
      price: 250,
      rating: 4.4,
      category: "Daily Life Use",
    },
    {
      name: "Natural rubber yoga mats",
      img: "naturalRubberYogaMats.jpg",
      price: 1200,
      rating: 4.7,
      category: "Luxury Item",
    },
    
    
    {
      name: "Organic cotton bedding",
      img: "organicCottonBedding.jpg",
      price: 2000,
      rating: 4.8,
      category: "Daily Life Use",
    },
    {
      name: "Organic fertilizer",
      img: "organicFertilizer.jpg",
      price: 250,
      rating: 4.5,
      category: "Farming Purpose",
    },
    {
      name: "Compost bin",
      img: "compostBin.jpg",
      price: 1200,
      rating: 4.7,
      category: "Farming Purpose",
    },
    {
      name: "Seed starters",
      img: "seedStarters.jpg",
      price: 100,
      rating: 4.3,
      category: "Farming Purpose",
    },
    {
      name: "Garden gloves",
      img: "gardenGloves.jpg",
      price: 150,
      rating: 4.6,
      category: "Farming Purpose",
    },
    {
      name: "Drip irrigation kit",
      img: "dripIrrigationKit.jpg",
      price: 1500,
      rating: 4.8,
      category: "Farming Purpose",
    },
    {
      name: "Recycled paper napkins",
      img: "recycledPaperNapkins.jpg",
      price: 80,
      rating: 4.1,
      category: "Recyclable Product",
    },
    {
      name: "Recycled plastic containers",
      img: "recycledPlasticContainers.jpg",
      price: 350,
      rating: 4.2,
      category: "Recyclable Product",
    },
    {
      name: "Recycled aluminum foil",
      img: "recycledAluminumFoil.jpg",
      price: 200,
      rating: 4.3,
      category: "Recyclable Product",
    },
    {
      name: "Recycled glass jars",
      img: "recycledGlassJars.jpg",
      price: 250,
      rating: 4.4,
      category: "Recyclable Product",
    },
    {
      name: "Recycled cardboard boxes",
      img: "recycledCardboardBoxes.jpg",
      price: 300,
      rating: 4.5,
      category: "Recyclable Product",
    },
    {
      name: "Organic cotton T-shirt",
      img: "organicCottonTShirt.jpg",
      price: 400,
      rating: 4.6,
      category: "Wearable Item",
    },
    {
      name: "Bamboo socks",
      img: "bambooSocks.jpg",
      price: 100,
      rating: 4.4,
      category: "Wearable Item",
    },
    {
      name: "Hemp hat",
      img: "hempHat.jpg",
      price: 300,
      rating: 4.5,
      category: "Wearable Item",
    },
    {
      name: "Recycled polyester jacket",
      img: "recycledPolyesterJacket.jpg",
      price: 1500,
      rating: 4.7,
      category: "Wearable Item",
    },
    {
      name: "Cork sandals",
      img: "corkSandals.jpg",
      price: 800,
      rating: 4.5,
      category: "Wearable Item",
    },
    {
      name: "Linen scarf",
      img: "linenScarf.jpg",
      price: 500,
      rating: 4.4,
      category: "Wearable Item",
    },
    {
      name: "Recycled wool sweater",
      img: "recycledWoolSweater.jpg",
      price: 2000,
      rating: 4.6,
      category: "Wearable Item",
    },
    
    {
      name: "Organic cotton underwear",
      img: "organicCottonUnderwear.jpg",
      price: 150,
      rating: 4.4,
      category: "Wearable Item",
    },
    {
      name: "Hemp backpack",
      img: "hempBackpack.jpeg",
      price: 2000,
      rating: 4.6,
      category: "Wearable Item",
    },
    {
      name: "Organic honey",
      img: "organicHoney.jpeg",
      price: 500,
      rating: 4.7,
      category: "Food Item",
    },
    {
      name: "Herbal tea",
      img: "herbalTea.jpg",
      price: 300,
      rating: 4.5,
      category: "Food Item",
    },
    {
      name: "Organic spices",
      img: "organicSpices.jpg",
      price: 400,
      rating: 4.6,
      category: "Food Item",
    },
    {
      name: "Gluten-free pasta",
      img: "glutenFreePasta.jpg",
      price: 350,
      rating: 4.5,
      category: "Food Item",
    },
    {
      name: "Silk pillowcases",
      img: "silkPillowcases.jpg",
      price: 1000,
      rating: 4.8,
      category: "Luxury Item",
    },
    {
      name: "Cashmere blanket",
      img: "cashmereBlanket.jpg",
      price: 3000,
      rating: 4.9,
      category: "Luxury Item",
    },
    {
      name: "Essential oil diffuser",
      img: "essentialOilDiffuser.jpg",
      price: 800,
      rating: 4.7,
      category: "Luxury Item",
    },
    {
      name: "Designer bamboo furniture",
      img: "designerBambooFurniture.jpg",
      price: 5000,
      rating: 4.9,
      category: "Luxury Item",
    },
    {
      name: "Eco-friendly smartwatch",
      img: "ecoFriendlySmartwatch.jpg",
      price: 1500,
      rating: 4.8,
      category: "Luxury Item",
    },
    {
      name: "Organic seeds",
      img: "organicSeeds.jpg",
      price: 200,
      rating: 4.4,
      category: "Farming Purpose",
    },
    {
      name: "Biodegradable seedling pots",
      img: "biodegradableSeedlingPots.jpg",
      price: 250,
      rating: 4.5,
      category: "Farming Purpose",
    },
    {
      name: "Organic pest control spray",
      img: "organicPestControlSpray.jpg",
      price: 300,
      rating: 4.6,
      category: "Farming Purpose",
    },
    {
      name: "Recycled cotton tote bags",
      img: "recycledCottonToteBags.jpg",
      price: 150,
      rating: 4.3,
      category: "Recyclable Product",
    },
    {
      name: "Recycled rubber mulch",
      img: "recycledRubberMulch.jpg",
      price: 400,
      rating: 4.4,
      category: "Recyclable Product",
    },
    {
      name: "Recycled steel water bottles",
      img: "recycledSteelWaterBottles.jpg",
      price: 600,
      rating: 4.5,
      category: "Recyclable Product",
    },
  ];

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container">
      <h1 className="text-center">PRODUCTS</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="border border-dark">{category}</h2>
          <div className="product-container">
            <ProductItem
              products={products.filter(
                (product) => product.category === category
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
