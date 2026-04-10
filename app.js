var allProducts = {
  beautyProducts: {
    skincare: {
      ponds: {
        lotion: {
          name: "ponds moisturizing lotion",
          price: 500,
          src: "https://enemmall.com/cdn/shop/files/3310796_639f0a87-b872-497b-81d5-abcde531b83c_1800x1800.jpg?v=1757331072",
          description:
            "POND'S Moisturising Lotion is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
        "face wash": {
          name: "ponds face wash",
          price: 1500,
          src: "https://www.urbanbeauty.pk/cdn/shop/files/Ponds_Bright_Miracle_Niasorcinol_Facial_Foam_50g_754x.jpg?v=1731929645",
          description:
            "POND'S face wash is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
        "vanishing cream": {
          name: "ponds vanishing cream",
          price: 2500,
          src: "https://www.beautybulletin.com/wp-content/uploads/2015/08/14942-pond-s-lasting-oil-control-vanishing-cream-26-1438940517-1-1.jpg",
          description:
            "POND'S vanishing cream is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
      },
      vaseline: {
        lotion: {
          name: "vaseline moisturizing lotion",
          price: 500,
          src: "https://www.catchnpack.pk/wp-content/uploads/2023/03/Vaseline-Intensive-Care-Cocoa-Glow-Pure-Cocoa-Butter-Lotion-200ml.jpg",
          description:
            "vaseline'S Moisturising Lotion is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
        "face wash": {
          name: "vaseline face wash",
          price: 1500,
          src: "https://www.catchnpack.pk/wp-content/uploads/2024/12/Vaseline-Men-Healthy-White-Face-Wash-100gm.jpg",
          description:
            "vaseline'S face wash is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
        "vanishing cream": {
          name: "vaseline vanishing cream",
          price: 2500,
          src: "https://media.naheed.pk/catalog/product/cache/2f2d0cb0c5f92580479e8350be94f387/1/1/1187840-1.jpg",
          description:
            "vaseline'S vanishing cream is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
      },
      "saeed ghani": {
        lotion: {
          name: "saeed ghani moisturizing lotion",
          price: 500,
          src: "",
          description:
            "saeed ghani'S Moisturising Lotion is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
        "face wash": {
          name: "saeed ghani face wash",
          price: 1500,
          src: "",
          description:
            "saeed ghani'S face wash is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
        "vanishing cream": {
          name: "saeed ghani vanishing cream",
          price: 2500,
          src: "",
          description:
            "saeed ghani'S vanishing cream is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin.",
        },
      },
    },
    nailcare: {
      "Nail It by Masarrat Misbah": {
        "nail polish red": {
          name: "Nail It Red Elegance",
          price: 450,
          src: "https://example.com/nail-it-red.jpg",
          description:
            "Long-lasting, chip-resistant red nail polish with a glossy finish.",
        },
        "nail hardener": {
          name: "Nail It Strengthener",
          price: 350,
          src: "https://example.com/nail-hardener.jpg",
          description: "Strengthens brittle nails and prevents breakage.",
        },
      },
      "ST London": {
        "gel top coat": {
          name: "ST London Gel Top Coat",
          price: 550,
          src: "https://example.com/st-london-topcoat.jpg",
          description:
            "Salon-quality gel top coat for a shiny, long-lasting finish.",
        },
        "cuticle oil": {
          name: "ST London Cuticle Oil",
          price: 300,
          src: "https://example.com/cuticle-oil.jpg",
          description: "Nourishing cuticle oil with vitamin E.",
        },
      },
    },
    haircare: {
      pantene: {
        shampoo: {
          name: "Pantene Pro-V Shampoo",
          price: 450,
          src: "https://example.com/pantene-shampoo.jpg",
          description:
            "Repairs damage and strengthens hair with Pro-V nutrients.",
        },
        conditioner: {
          name: "Pantene Pro-V Conditioner",
          price: 450,
          src: "https://example.com/pantene-conditioner.jpg",
          description:
            "Silky smooth conditioner that detangles and moisturizes.",
        },
        "hair serum": {
          name: "Pantene Hair Serum",
          price: 600,
          src: "https://example.com/pantene-serum.jpg",
          description: "Frizzy hair serum for smooth, shiny hair.",
        },
      },
      dove: {
        shampoo: {
          name: "Dove Intense Repair Shampoo",
          price: 500,
          src: "https://example.com/dove-shampoo.jpg",
          description: "Repairs damaged hair and restores natural softness.",
        },
        conditioner: {
          name: "Dove Intense Repair Conditioner",
          price: 500,
          src: "https://example.com/dove-conditioner.jpg",
          description: "Deep conditioning for smooth, manageable hair.",
        },
      },
    },
    makeup: {
      maybelline: {
        foundation: {
          name: "Maybelline Fit Me Foundation",
          price: 1200,
          src: "https://example.com/maybelline-foundation.jpg",
          description:
            "Natural, matte finish foundation that blends perfectly.",
        },
        lipstick: {
          name: "Maybelline Superstay Lipstick",
          price: 850,
          src: "https://example.com/maybelline-lipstick.jpg",
          description: "24-hour wear liquid lipstick in matte finish.",
        },
        mascara: {
          name: "Maybelline Lash Sensational Mascara",
          price: 950,
          src: "https://example.com/maybelline-mascara.jpg",
          description: "Volumizing mascara for full, dramatic lashes.",
        },
      },
      loreal: {
        concealer: {
          name: "L'Oreal Infallible Concealer",
          price: 750,
          src: "https://example.com/loreal-concealer.jpg",
          description:
            "Full coverage concealer for dark circles and blemishes.",
        },
        eyeliner: {
          name: "L'Oreal Matte Signature Eyeliner",
          price: 650,
          src: "https://example.com/loreal-eyeliner.jpg",
          description: "Intense black matte liquid eyeliner.",
        },
      },
    },
  },
  electronicItems: {
    mobiles: {
      samsung: {
        "galaxy a14": {
          name: "Samsung Galaxy A14",
          price: 45000,
          src: "https://example.com/samsung-a14.jpg",
          description: "6.6-inch display, 50MP camera, 5000mAh battery.",
        },
        "galaxy s23": {
          name: "Samsung Galaxy S23",
          price: 180000,
          src: "https://example.com/samsung-s23.jpg",
          description:
            "Flagship smartphone with Snapdragon 8 Gen 2, 120Hz AMOLED.",
        },
      },
      iphone: {
        "iphone 14": {
          name: "Apple iPhone 14",
          price: 220000,
          src: "https://example.com/iphone14.jpg",
          description: "A15 Bionic chip, 6.1-inch Super Retina XDR display.",
        },
        "iphone 13": {
          name: "Apple iPhone 13",
          price: 170000,
          src: "https://example.com/iphone13.jpg",
          description: "A15 Bionic, dual-camera system, battery life all day.",
        },
      },
    },
    laptops: {
      dell: {
        "xps 15": {
          name: "Dell XPS 15",
          price: 250000,
          src: "https://example.com/dell-xps.jpg",
          description: "15.6-inch 3.5K OLED, Intel i7, 16GB RAM, 512GB SSD.",
        },
        "inspiron 15": {
          name: "Dell Inspiron 15",
          price: 120000,
          src: "https://example.com/dell-inspiron.jpg",
          description: "Affordable laptop for everyday use, Intel i5, 8GB RAM.",
        },
      },
      hp: {
        "spectre x360": {
          name: "HP Spectre x360",
          price: 200000,
          src: "https://example.com/hp-spectre.jpg",
          description:
            "Convertible laptop with touchscreen, Intel i7, 16GB RAM.",
        },
        "pavilion 15": {
          name: "HP Pavilion 15",
          price: 110000,
          src: "https://example.com/hp-pavilion.jpg",
          description: "Reliable performance for work and entertainment.",
        },
      },
    },
    audio: {
      sony: {
        wh1000xm5: {
          name: "Sony WH-1000XM5",
          price: 55000,
          src: "https://example.com/sony-headphones.jpg",
          description: "Industry-leading noise canceling headphones.",
        },
        wf1000xm4: {
          name: "Sony WF-1000XM4",
          price: 40000,
          src: "https://example.com/sony-earbuds.jpg",
          description:
            "True wireless earbuds with exceptional noise cancellation.",
        },
      },
      apple: {
        "airpods pro 2": {
          name: "Apple AirPods Pro 2",
          price: 65000,
          src: "https://example.com/airpods-pro.jpg",
          description:
            "Active noise cancellation, spatial audio, MagSafe charging.",
        },
      },
    },
  },
  // clothes: {
  //     "mens": {
  //         "shirts": {
  //             "denim shirt": {
  //                 name: "Men's Denim Shirt",
  //                 price: 1800,
  //                 src: "https://example.com/denim-shirt.jpg",
  //                 description: "Classic blue denim shirt, 100% cotton, regular fit."
  //             },
  //             "linen shirt": {
  //                 name: "Men's Linen Shirt",
  //                 price: 1500,
  //                 src: "https://example.com/linen-shirt.jpg",
  //                 description: "Breathable linen fabric, perfect for summer."
  //             }
  //         },
  //         "trousers": {
  //             "chinos": {
  //                 name: "Men's Chino Pants",
  //                 price: 2200,
  //                 src: "https://example.com/chinos.jpg",
  //                 description: "Comfortable cotton chinos, slim fit, multiple colors."
  //             },
  //             "jeans": {
  //                 name: "Men's Slim Jeans",
  //                 price: 2500,
  //                 src: "https://example.com/mens-jeans.jpg",
  //                 description: "Stretchable denim, slim fit, dark blue."
  //             }
  //         }
  //     },
  //     "womens": {
  //         "dresses": {
  //             "floral dress": {
  //                 name: "Women's Floral Maxi Dress",
  //                 price: 3000,
  //                 src: "https://example.com/floral-dress.jpg",
  //                 description: "Beautiful floral print, lightweight fabric, flowy fit."
  //             },
  //             "party gown": {
  //                 name: "Elegant Party Gown",
  //                 price: 5500,
  //                 src: "https://example.com/party-gown.jpg",
  //                 description: "Sequined evening gown with floor-length design."
  //             }
  //         },
  //         "kurtis": {
  //             "cotton kurti": {
  //                 name: "Women's Cotton Kurti",
  //                 price: 1200,
  //                 src: "https://example.com/cotton-kurti.jpg",
  //                 description: "Comfortable everyday wear cotton kurti with block print."
  //             },
  //             "festive kurti": {
  //                 name: "Festive Embroidered Kurti",
  //                 price: 2800,
  //                 src: "https://example.com/festive-kurti.jpg",
  //                 description: "Heavy embroidered kurti for special occasions."
  //             }
  //         }
  //     },
  //     "kids": {
  //         "boys tshirt": {
  //             name: "Boys Graphic T-Shirt",
  //             price: 800,
  //             src: "https://example.com/boys-tshirt.jpg",
  //             description: "100% cotton, cartoon print, available in sizes 2-10 years."
  //         },
  //         "girls frock": {
  //             name: "Girls Party Frock",
  //             price: 1500,
  //             src: "https://example.com/girls-frock.jpg",
  //             description: "Pink net frock with floral detailing."
  //         }
  //     }
  // },
  // footwears: {
  //     "mens": {
  //         "sneakers": {
  //             "nike air max": {
  //                 name: "Nike Air Max",
  //                 price: 12000,
  //                 src: "https://example.com/nike-airmax.jpg",
  //                 description: "Air cushioning, breathable mesh, durable rubber sole."
  //             },
  //             "adidas running": {
  //                 name: "Adidas Ultraboost",
  //                 price: 15000,
  //                 src: "https://example.com/adidas-ultraboost.jpg",
  //                 description: "Energy-returning boost midsole, responsive running shoes."
  //             }
  //         },
  //         "formal shoes": {
  //             "leather oxfords": {
  //                 name: "Men's Leather Oxfords",
  //                 price: 4500,
  //                 src: "https://example.com/oxfords.jpg",
  //                 description: "Premium genuine leather, cushioned insole, formal wear."
  //             },
  //             "loafers": {
  //                 name: "Men's Loafers",
  //                 price: 3500,
  //                 src: "https://example.com/loafers.jpg",
  //                 description: "Slip-on design, synthetic leather, comfortable for daily use."
  //             }
  //         }
  //     },
  //     "womens": {
  //         "heels": {
  //             "stilettos": {
  //                 name: "Women's Stiletto Heels",
  //                 price: 3200,
  //                 src: "https://example.com/stilettos.jpg",
  //                 description: "4-inch heels, pointed toe, available in black and nude."
  //             },
  //             "block heels": {
  //                 name: "Women's Block Heels",
  //                 price: 2800,
  //                 src: "https://example.com/block-heels.jpg",
  //                 description: "Comfortable block heels with ankle strap."
  //             }
  //         },
  //         "sandals": {
  //             "flat sandals": {
  //                 name: "Women's Flat Sandals",
  //                 price: 1200,
  //                 src: "https://example.com/flat-sandals.jpg",
  //                 description: "Casual everyday sandals with soft footbed."
  //             },
  //             "wedges": {
  //                 name: "Women's Wedge Sandals",
  //                 price: 2200,
  //                 src: "https://example.com/wedges.jpg",
  //                 description: "Lightweight wedges for summer outings."
  //             }
  //         }
  //     },
  //     "kids": {
  //         "school shoes": {
  //             name: "Kids School Shoes",
  //             price: 1500,
  //             src: "https://example.com/kids-school.jpg",
  //             description: "Durable black school shoes with non-slip sole."
  //         },
  //         "sports shoes": {
  //             name: "Kids Sports Shoes",
  //             price: 1800,
  //             src: "https://example.com/kids-sports.jpg",
  //             description: "Velcro closure, breathable mesh, lightweight."
  //         }
  //     }
  // },
  acessories: {
    watches: {
      casio: {
        "g shock": {
          name: "Casio G-Shock",
          price: 12000,
          src: "https://example.com/gshock.jpg",
          description: "Shock resistant, water resistant, digital display.",
        },
        vintage: {
          name: "Casio Vintage Digital",
          price: 4500,
          src: "https://example.com/casio-vintage.jpg",
          description: "Retro stainless steel digital watch.",
        },
      },
      fossil: {
        chronograph: {
          name: "Fossil Chronograph",
          price: 18000,
          src: "https://example.com/fossil-chrono.jpg",
          description: "Analog chronograph watch with leather strap.",
        },
      },
    },
    bags: {
      backpacks: {
        "school backpack": {
          name: "Casual School Backpack",
          price: 2000,
          src: "https://example.com/backpack.jpg",
          description: "Multi-compartment backpack for college/office.",
        },
        "laptop backpack": {
          name: "Laptop Backpack",
          price: 3500,
          src: "https://example.com/laptop-bag.jpg",
          description:
            "Padded compartment for 15.6-inch laptop, water-resistant.",
        },
      },
      handbags: {
        "tote bag": {
          name: "Women's Tote Bag",
          price: 2500,
          src: "https://example.com/tote.jpg",
          description: "Spacious canvas tote with inner pockets.",
        },
        crossbody: {
          name: "Crossbody Bag",
          price: 1800,
          src: "https://example.com/crossbody.jpg",
          description: "Trendy PU leather crossbody bag.",
        },
      },
    },
    jewelry: {
      earrings: {
        studs: {
          name: "Crystal Stud Earrings",
          price: 800,
          src: "https://example.com/studs.jpg",
          description: "Shiny crystal studs, hypoallergenic.",
        },
        hoops: {
          name: "Gold Hoop Earrings",
          price: 1200,
          src: "https://example.com/hoops.jpg",
          description: "Classic gold-plated hoop earrings.",
        },
      },
      necklaces: {
        pendant: {
          name: "Silver Pendant Necklace",
          price: 1500,
          src: "https://example.com/pendant.jpg",
          description: "925 sterling silver with cubic zirconia.",
        },
      },
    },
  },
};
var allCards = document.getElementById("allCards");
for (var products in allProducts) {
  // console.log(allProducts[products]);
  for (var categories in allProducts[products]) {
    // console.log(allProducts[products][categories]);
    for (var brands in allProducts[products][categories]) {
      // console.log(allProducts[products][categories][brands]);
      for (var items in allProducts[products][categories][brands]) {
        // console.log(allProducts[products][categories][brands][items].price);
        allCards.innerHTML += `
                <div class="col">
          <div class="card h-100">
            <img src="${allProducts[products][categories][brands][items].src}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${allProducts[products][categories][brands][items].name.toUpperCase()}</h5>
              <p class="card-text">
               ${allProducts[products][categories][brands][items].description}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Price: ${allProducts[products][categories][brands][items].price}/-</small>
            </div>
          </div>
        </div>`;
      }
    }
  }
}

(async () => {
  await loadFireflyPreset(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "firefly",
      background: {
        color: "#C4C6C8",
      },
    },
  });
})();

tsParticles.load({
  id: "tsparticles",
  options: {
    particles: {
      shape: {
        type: "square", // starting from v2, this require the square shape script
      },
    },
    background: {
      color: "#C4C6C8",
    },
    preset: "firefly",
  },
});

var productMenu = document.getElementById("productMenu");
var categoryMenu = document.getElementById("categoryMenu");
for (var products in allProducts) {
  // console.log(products);
  productMenu.innerHTML += `
    <option value="${products}">${products}</option>
    `;
}
function productChange() {
  sidebar.style.display="none"
  categoryMenu.innerHTML = `<option  value="">Select Category</option>`;
  allCards.innerHTML=""
  // console.log(allProducts[productMenu.value]);
  for (var categories in allProducts[productMenu.value]) {
    // console.log(allProducts[productMenu.value][categories]);
    categoryMenu.innerHTML += `<option  value="${categories}">${categories}</option>`;
    for(var brands in allProducts[productMenu.value][categories]){
      // console.log(allProducts[productMenu.value][categories][brands]);
      for(var items in allProducts[productMenu.value][categories][brands]){
        // console.log(allProducts[productMenu.value][categories][brands][items]);
        var itemDetails = allProducts[productMenu.value][categories][brands][items]
        allCards.innerHTML += `
                <div class="col">
          <div class="card h-100">
            <img src="${itemDetails.src}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${itemDetails.name.toUpperCase()}</h5>
              <p class="card-text">
               ${itemDetails.description}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Price: ${itemDetails.price}/-</small>
            </div>
          </div>
        </div>`;
      }
    }
  }
}
var sidebar = document.getElementById("sidebar")
function filterProduct(){
    sidebar.innerHTML=""
    sidebar.style.display="block";
    sidebar.classList.remove("sidebar")
    sidebar.classList.add("sidebar-sticky")
    allCards.innerHTML = ""
    // console.log(allProducts[productMenu.value][categoryMenu.value]);
    for(var brands in allProducts[productMenu.value][categoryMenu.value]){
        // console.log(allProducts[productMenu.value][categoryMenu.value][brands]);
        sidebar.innerHTML+=`<h5 onclick="filterBrands('${brands}')">${brands}</h5>`
        for(var items in allProducts[productMenu.value][categoryMenu.value][brands]){
          // console.log(allProducts[productMenu.value][categoryMenu.value][brands][items]);
          var itemDetails =  allProducts[productMenu.value][categoryMenu.value][brands][items]
          allCards.innerHTML += `
                <div class="col">
          <div class="card h-100">
            <img src="${itemDetails.src}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${itemDetails.name.toUpperCase()}</h5>
              <p class="card-text">
               ${itemDetails.description}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Price: ${itemDetails.price}/-</small>
            </div>
          </div>
        </div>`;
        }
    }
}
function filterBrands(brand){
    allCards.innerHTML=""
    for(var items in allProducts[productMenu.value][categoryMenu.value][brand]){
        // console.log(allProducts[productMenu.value][categoryMenu.value][brand][items]);
        var itemDetails=allProducts[productMenu.value][categoryMenu.value][brand][items]  
        allCards.innerHTML+=`
        <div class="col">
          <div class="card h-100">
            <img src="${itemDetails.src}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${itemDetails.name.toUpperCase()}</h5>
              <p class="card-text">
               ${itemDetails.description}
              </p>
            </div>
          </div>
        </div>`;
    }
  }