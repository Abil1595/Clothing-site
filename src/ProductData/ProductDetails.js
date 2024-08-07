import React from 'react';
import bg from '../Images/shirt.avif'
import bg1 from '../Images/pant.avif';
import bg2 from '../Images/denim.avif';
import bg3 from '../Images/striped.avif';
import bg4 from '../Images/men-pants.avif';
import bg5 from '../Images/cargo.avif';
import bg6 from '../Images/coat men.avif';
import bg7 from '../Images/men coat 2.webp'
import bg8 from '../Images/men blazers.avif';
import bg9 from '../Images/men blazers2.avif';
import bg10 from '../Images/women-shirt.avif';
import bg11 from '../Images/women-pant.avif';
import bg12 from '../Images/checked-shirt.avif';
import bg13 from '../Images/denim-women.avif';
import bg14 from '../Images/women jacket.avif';
import bg15 from '../Images/women pants.avif';
import bg16 from '../Images/women cargo.avif';
import bg17 from '../Images/women blazer1.avif';
import bg18 from '../Images/women blazer2.avif';
import bg19 from '../Images/women jack.avif';
import bg20 from '../Images/kids-shirt1.avif';
import bg21 from '../Images/kids tshirt.avif';
import bg22 from '../Images/kids hoodie.avif';
import bg23 from '../Images/kids new shirt.avif';
import bg24 from '../Images/girls.avif';
import bg25 from '../Images/fit jeans.avif';
import bg26 from '../Images/flared dress.avif';
import bg27 from '../Images/pant1.avif';
import bg28 from '../Images/kids jackets.avif';
import bg29 from '../Images/nehru jacket.avif';

const products=[
    {
        id:"1",
        image:require('../Images/shirt.avif'),
        name:"Mens Shirt",
        price:"600",
        category:"view",
        description:"Regular Blue checked shirt with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"2",
        image :require('../Images/pant.avif'),
        name:"Mens Pants Jeans ",
        price:" 840",   
        category:"view",
        description:"Regular jeans pants with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"3",
        image:require('../Images/denim.avif'),
        name:"Mens Denim Shirt with Flap",
        price:"660",
        category:"view",
        description:"Regular denim shirt with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"4",
        image:require('../Images/striped.avif'),
        name:"Mens Shirt Striped Cotton ",
        price:"1000",
        category:"view",
        description:"Regular denim shirt with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"5",
        image:require('../Images/men-pants.avif'),
        name:"Mens Pants Fit Trousers",
        price:"1599",
        category:"view",
        description:"Tapered Fit Trousers with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"6",
        image:require('../Images/cargo.avif'),
        name:"Mens Pants Straight Fit Cargo ",
        price:"410",
        category:"view",
        description:"Men Straight Fit Cargo Pants with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"7",
        image:require('../Images/coat men.avif'),
        name:"Mens Jacket Zip-Front ",
        price:"750",
        category:"view",
        description:"Men Zip-Front Jacket with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"8",
        image:require('../Images/men coat 2.webp'),
        name:"Mens Jacket  Hooded ",
        price:"1500",
        category:"view",
        description:"Zip-Front Hooded Jacket with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"9",
        image:require('../Images/men blazers.avif'),
        name:"Mens Blazer Slim Fit ",
        price:"5599",
        category:"view",
        description:"Slim Fit Blazer with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"10",
        image:require('../Images/men blazers2.avif'),
        name:"Mens Blazer Heathered ",
        price:"5599",
        category:"view",
        description:"Heathered Blazer Jacket with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"11",
        image:require('../Images/women-shirt.avif'),
        name:"Women Shirt",
        price:"799",
        category:"view1",
        description:"Women Striped Fit Shirt with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"12",
        image:require('../Images/women-pant.avif'),
        name:"Women Pants Skinny Jeans ",
        price:"1139",
        category:"view1",
        description:"Women Skinny Jeans Pockets with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"13",
        image:require('../Images/checked-shirt.avif'),
        name:"Women Shirt Checked  ",
        price:"740",
        category:"view1",
        description:"Women Checked Shirt Sleeves with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"14",
        image:require('../Images/denim-women.avif'),
        name:"Women Denim shirt  Collar",
        price:"478",
        category:"view1",
        description:"Women Denim Shirt Collar with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"15",
        image:require('../Images/women jacket.avif'),
        name:"Women Jacket Denim  ",
        price:"555",
        category:"view1",
        description:"Women Denim Bomber Jacket with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"16",
        image:require('../Images/women pants.avif'),
        name:"Women Pants High-Rise Fit ",
        price:"360",
        category:"view1",
        description:"Women High-Rise Fit Trousers with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"17",
        image:require('../Images/women cargo.avif'),
        name:"Women Pants  Fit Cargo ",
        price:"1472",
        category:"view1",
        description:"Women Relaxed Fit Cargo Pants with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"18",
        image:require('../Images/women blazer1.avif'),
        name:"Women Blazer Checked  ",
        price:"2062",
        category:"view1",
        description:"Women Checked Single Blazer with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"19",
        image:require('../Images/women blazer2.avif'),
        name:"Women Blazer Solid Full-length ",
        price:"1000",
        category:"view1",
        description:"Women Solid Full-length Blazer with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"20",
        image:require('../Images/women jack.avif'),
        name:"Women Jacket with Flap Pockets",
        price:"1000",
        category:"view1",
        description:"Women Jacket with Flap Pockets with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"21",
        image:require('../Images/kids-shirt1.avif'),
        name:"Kids Shirt Checked Short- ",
        price:"584",
        category:"view2",
        description:"Kids Checked Short- Shirt with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"22",
        image:require('../Images/kids tshirt.avif'),
        name:"Kids T-Shirt  Floral Print Polo ",
        price:"650",
        category:"view2",
        description:"Kids  Floral Print Polo T-Shirt with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"23",
        image:require('../Images/kids hoodie.avif'),
        name:"Kids Shirt   with Hood",
        price:"650",
        category:"view2",
        description:"Kids  Checked Shirt with Hood with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"24",
        image:require('../Images/kids new shirt.avif'),
        name:"Kids Shirt  Fit  Spread Collar",
        price:"432",
        category:"view2",
        description:"Kids  Fit Shirt Spread Collar with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"25",
        image:require('../Images/girls.avif'),
        name:"Kids(Girls) Floral Print  Dress",
        price:"799",
        category:"view2",
        description:"Kids  Floral Print Flare Dress with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"26",
        image:require('../Images/fit jeans.avif'),
        name:"Kids Pants  Mid-Rise Slim Fit ",
        price:"1299", 
        category:"view2",
        description:"Kids   Mid-Rise Slim Fit Jeans with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"27",
        image:require('../Images/flared dress.avif'),
        name:"Kids(Girls)  Shoulder Dress",
        price:"899",
        category:"view2",
        description:"Kids one Shoulder Dress with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"28",
        image:require('../Images/pant1.avif'),
        name:"Kids pants girls  grey",
        price:"499",
        category:"view2",
        description:"Kids girls leggings grey with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"29",
        image:require('../Images/kids jackets.avif'),
        name:"Kids Jacket Floral ",
        price:"713",  
        category:"view2",
        description:"Kids Floral Denim Jacket with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    {
        id:"30",
        image:require('../Images/nehru jacket.avif'),
        name:"Kids Jacket Nehru type ",
        price:"940",
        category:"view2",
        description:"Kids Nehru Jacket with Insert Pockets with 100% cotton Here's presenting a houseful of classic aviators, voguish wayfarers, chic cat-eye, and retro shades that you can own for a timeless look.",
    },
    

]
export default products