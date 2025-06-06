1. 1.1 use anime_store
    1.2 db.createCollection("products")


2. db.products.insertOne(
    {
  sku: "A101",
  name: "Figura Naruto Uzumaki",
  category: "Figuras",
  price: 120000,
  stock: 10,
  anime: "Naruto",
  rating: 4.8,
  tags: ["coleccionable", "resina", "edición especial"],
  provider: {
  name: "OtakuDistribuciones",
  country: "Japón"
  }
  }
  )


3. db.products.updateMany(
    {},
    {
  $set:{
  available: true,
  origin: "Importado"
  }
  }
  )


4. 4.1 db.products.updateOne(
    {sku: "A034"},
    {$set:{ stock: 15}}
  )

  4.2 db.products.updateOne(
    {sku: "A018"},
    {$set:{ provider: {country: "Colombia"}}}
  )

  4.3 db.products.updateOne(
    {sku: "A059"},
    {$addToSet: { tags: "oferta"}}
  )

  4.4 db.products.updateOne(
    {sku: "A012"},
    {$addToSet: { tags: { $each: ["nuevo", "popular"]}}}
  )

  4.5 db.products.updateOne(
    {sku: "A025"},
    {$addToSet: { tags: { $each: ["descuento", "outlet"]}}}
  )

  4.6 db.products.updateOne(
    {name: "Camiseta Goku Ultra Instinct"},
    {$set: { price: 45000}}
  )


5. db.products.updateMany(
    {origin: { $exists: true}},
    {$rename: { "origin": "import_type"}}
  )


6. db.products.updateMany(
    {country: "Colombia"},
    {$set: {import_type: "Nacional"}}
  )


7. 7.1 db.products.countDocuments({ category: "Mangas"})

    7.2 b.products.countDocuments({ price: {$gte: 50000}})

    7.3 db.products.countDocuments({ category: {$ne: "Figuras"}})

    7.4 db.products.find(
        {rating: {$gte: 4.5}},
      {_id: 0, sku: 1, name: 1, tags: 1}
      )

    7.5 db.products.find(
        { stock: { $lt: 5}},
        { _id: 0, sku: 1, name: 1, price:1}
      )


8. db.products.updateMany(
    { available: { $exists: true}},
    { $unset: { available:""}}
  )


9. db.products.updateOne(
    { sku: "A025"},
    { $pull: {tags: "descuento"}}
  )


10. db.products.updateOne(
    { sku: "A012"},
    { $pull: { tags: { $in: ["nuevo", "popular"]}}}
  )


11. db.products.deleteOne({ sku:"A043" })


12. db.products.deleteMany({ stock: {$eq:0}})