/* =========================================
   أبو الحروف - Restaurant Website
   JavaScript
========================================= */

"use strict";

/* =========================================
   إعدادات المطعم
========================================= */

const RESTAURANT = {
    name: "مطعم أبو الحروف",
    whatsapp: "9647702760390",
    deliveryFee: 500,
    currency: "د.ع",
    address: "الغزالية، مدير الأمن، مقابل جامع البر الرحيم",
    phone: "0770 276 0390"
};

/* =========================================
   بيانات المنيو
   جميع الأسعار بالدينار العراقي
========================================= */

const menuData = [
    /* ================= البركر ================= */
    {
        id: "burger",
        name: "البركر",
        icon: "🍔",
        description: "بركر طازج ولذيذ",
        items: [
            {
                id: "burger-1",
                name: "بركر لحم",
                price: 2500,
                description: "بركر لحم شهي مع الخبز والإضافات",
                image: "images/burger-meet.jpg"
            },
            {
                id: "burger-2",
                name: "بركر لحم بالجبن",
                price: 3000,
                description: "بركر لحم مع جبن ذائب",
                image: "images/burger-cheese.jpg"
            },
            {
                id: "burger-3",
                name: "بركر لحم بالفطر",
                price: 3000,
                description: "بركر لحم مع الفطر الطازجة",
                image: "images/mashrom.jpg"
            },
            {
                id: "burger-4",
                name: "بركر دجاج",
                price: 2500,
                description: "بركر دجاج مقرمش",
                image: "images/BURGER-CHEKN.jpg"
            },
            {
                id: "burger-5",
                name: "بركر دجاج بالجبن",
                price: 3000,
                description: "بركر دجاج مع الجبن",
                image: "images/chess-chekn.jpg"
            },
            {
                id: "burger-6",
                name: "وجبة بركر لحم",
                price: 3500,
                description: "وجبة بركر لحم",
                image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "burger-7",
                name: "وجبة بركر دجاج",
                price: 3000,
                description: "وجبة بركر دجاج",
                image: "images/burger-meal.jpg"
            }
        ]
    },

    /* ================= الشاورما ================= */
    {
        id: "shawarma",
        name: "الشاورما",
        icon: "🌯",
        description: "شاورما بطعم أصيل",
        items: [
            {
                id: "shawarma-1",
                name: "كيلو شاورما لحم",
                price: 35000,
                description: "كيلو شاورما لحم",
                image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-2",
                name: "كيلو شاورما لحم سادة",
                price: 25000,
                description: "كيلو شاورما لحم سادة",
                image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-3",
                name: "كيلو شاورما دجاج",
                price: 30000,
                description: "كيلو شاورما دجاج",
                image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-4",
                name: "كيلو شاورما دجاج سادة",
                price: 20000,
                description: "كيلو شاورما دجاج سادة",
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-5",
                name: "نص كيلو شاورما لحم",
                price: 17500,
                description: "نصف كيلو شاورما لحم",
                image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-6",
                name: "نص كيلو شاورما لحم سادة",
                price: 12500,
                description: "نصف كيلو لحم سادة",
                image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-7",
                name: "نص كيلو شاورما دجاج",
                price: 15000,
                description: "نصف كيلو شاورما دجاج",
                image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-8",
                name: "نص كيلو شاورما دجاج سادة",
                price: 10000,
                description: "نصف كيلو دجاج سادة",
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-9",
                name: "نفر شاورما لحم",
                price: 12000,
                description: "نفر شاورما لحم",
                image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-10",
                name: "نص نفر شاورما لحم",
                price: 6000,
                description: "نفر شاورما لحم سادة",
                image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-11",
                name: "نفر شاورما دجاج",
                price: 10000,
                description: "نفر شاورما دجاج",
                image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-12",
                name: "نص نفر شاورما دجاج",
                price: 5000,
                description: "نفر شاورما دجاج سادة",
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-13",
                name: "صاج شاورما لحم",
                price: 3000,
                description: "صاج شاورما لحم",
                image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-14",
                name: "صاج شاورما دجاج",
                price: 1500,
                description: "صاج شاورما دجاج",
                image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-15",
                name: "لفة كص لحم",
                price: 3000,
                description: "سندويش شاورما لحم",
                image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-16",
                name: "لفة كص دجاج",
                price: 2000,
                description: "سندويش شاورما دجاج",
                image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-17",
                name: "سندويج لحم حجري",
                price: 2000,
                description: "سندويش لحم حجري",
                image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-18",
                name: "سندويج دجاج حجري",
                price: 2000,
                description: "سندويش دجاج حجري",
                image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-19",
                name: "وجبة عربي دجاج",
                price: 4500,
                description: "وجبة شاورما عربي دجاج",
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "shawarma-20",
                name: "وجبة عربي لحم",
                price: 5000,
                description: "وجبة شاورما عربي لحم",
                image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=85"
            }
        ]
    },

    /* ================= الكنتاكي ================= */
    {
        id: "kentucky",
        name: "الكنتاكي",
        icon: "🍗",
        description: "دجاج مقرمش على أصوله",
        items: [
            {
                id: "kentucky-1",
                name: "كنتاكي 3 قطع مع فكر وصمون",
                price: 5000,
                description: "قطع دجاج مقرمشة مع البطاطا والصمون",
                image: "images/kintaki.jpg"
            },
            {
                id: "kentucky-2",
                name: "كنتاكي 6 قطع مع فكر وصمون",
                price: 9000,
                description: "وجبة كنتاكي 6 قطع",
                image: "images/kintaki.jpg"
            },
            {
                id: "kentucky-3",
                name: "كنتاكي 9 قطع مع فكر وصمون",
                price: 11000,
                description: "وجبة كنتاكي 9 قطع",
                image: "images/kintaki.jpg"
            },
            {
                id: "kentucky-4",
                name: "كنتاكي 12 قطعة مع فكر وصمون",
                price: 14000,
                description: "وجبة كنتاكي 12 قطعة",
                image: "images/kintaki.jpg"
            },
            {
                id: "kentucky-5",
                name: "كنتاكي 15 قطعة مع فكر وصمون",
                price: 25000,
                description: "وجبة كنتاكي 15 قطعة",
                image: "images/kintaki.jpg"
            }
        ]
    },

    /* ================= الريزو ================= */
    {
        id: "rice",
        name: "الريزو",
        icon: "🍚",
        description: "وجبات الريزو الشهية",
        items: [
            {
                id: "rice-1",
                name: "ريزو كلاسيك",
                price: 4000,
                description: "ريزو كلاسيك شهي",
                image: "images/rezo-clasic.jpg"
            },
            {
                id: "rice-2",
                name: "ريزو بالجبن",
                price: 5000,
                description: "ريزو مع الجبن",
                image: "images/rezo-chess.jpg"
            },
            {
                id: "rice-4",
                name: "ريزو شاورما دجاج",
                price: 4500,
                description: "ريزو مع شاورما الدجاج",
                image: "images/rezo-sh-ch.jpg"
            },
            {
                id: "rice-5",
                name: "عرض الـ 2 ريزو",
                price: 5000,
                description: "عرض خاص لشخصين",
                image: "images/rezo-abo.jpg"
            },
            {
                id: "rice-6",
                name: "عرض الـ 4 ريزو",
                price: 10000,
                description: "عرض خاص لأربعة أشخاص",
                image: "images/rezo-abo.jpg"
            },
            {
                id: "rice-7",
                name: "ريزو أبو الحروف",
                price: 6000,
                description: "ريزو أبو الحروف الخاص",
                image: "images/rezo-abo.jpg"
            }
        ]
    },

    /* ================= الزنجر ================= */
    {
        id: "zinger",
        name: "الزنجر",
        icon: "🥪",
        description: "زنجر مقرمش ولذيذ",
        items: [
            {
                id: "zinger-1",
                name: "زنجر",
                price: 3000,
                description: "سندويش زنجر مقرمش",
                image: "images/zenger.jpg"
            },
            {
                id: "zinger-2",
                name: "زنجر بالجبن",
                price: 3500,
                description: "زنجر مع جبن ذائب",
                image: "images/zenger-chess.jpg"
            }
        ]
    },

    /* ================= الكرسبي ================= */
    {
        id: "crispy",
        name: "الكرسبي",
        icon: "🍗",
        description: "دجاج كرسبي مقرمش",
        items: [
            {
                id: "crispy-1",
                name: "وجبة كرسبي 4 قطع مع فكر وصمون",
                price: 4000,
                description: "كرسبي مقرمش مع البطاطا والصمون",
                image: "images/krespi.jpg"
            },
            {
                id: "crispy-2",
                name: "وجبة كرسبي 6 قطع مع فكر وصمون",
                price: 6000,
                description: "وجبة كرسبي 6 قطع",
                image: "images/krespi.jpg"
            },
            {
                id: "crispy-3",
                name: "وجبة كرسبي 8 قطع مع فكر وصمون",
                price: 8000,
                description: "وجبة كرسبي 8 قطع",
                image: "images/krespi.jpg"
            },
            {
                id: "crispy-4",
                name: "وجبة كرسبي 10 قطع مع فكر وصمون",
                price: 10000,
                description: "وجبة كرسبي 10 قطع",
                image: "images/krespi.jpg"
            }
        ]
    },

    /* ================= الفلافل ================= */
    {
        id: "falafel",
        name: "الفلافل",
        icon: "🧆",
        description: "فلافل طازجة يومياً",
        items: [
            {
                id: "falafel-1",
                name: "لفة فلافل",
                price: 1000,
                description: "لفة فلافل شهية",
                image: "images/lafa-flafl.jpg"
            },
            {
                id: "falafel-2",
                name: "صاج فلافل",
                price: 1000,
                description: "صاج فلافل",
                image: "images/sagg-falafl.jpg"
            },
            {
                id: "falafel-3",
                name: "فلافل ماستر",
                price: 1250,
                description: "فلافل ماستر",
                image: "images/flafl-master.jpg"
            },
            {
                id: "falafel-4",
                name: "فلافل 12 حبة",
                price: 1000,
                description: "12 حبة فلافل",
                image: "images/flafl.jpg"
            },
            {
                id: "falafel-5",
                name: "وجبة فلافل كبرى",
                price: 5000,
                description: "وجبة فلافل",
                image: "images/flafl-meal.jpg.jpeg"
            },
            {
                id: "falafel-6",
                name: "وجبة فلافل وسط",
                price: 3000,
                description: "وجبة فلافل",
                image: "images/flafl-meal.jpg.jpeg"
            },
            {
                id: "falafel-7",
                name: "وجبة عربي",
                price: 2500,
                description: "وجبة عربي",
                image: "images/flafl-arbic.jpg"
            },
            {
                id: "falafel-8",
                name: "كيلو عجين",
                price: 2000,
                description: "كيلو عجين فلافل",
                image: "images/agen.jpg"
            }
        ]
    },

    /* ================= الفنكر ================= */
    {
        id: "funk",
        name: "الفنكر",
        icon: "🍟",
        description: "وجبات الفنكر",
        items: [
            {
                id: "funk-1",
                name: "قدح فنكر",
                price: 1000,
                description: "قدح الفنكر شهي",
                image: "images/kadh.jpg"
            },
            {
                id: "funk-2",
                name: "قدح فنكر بالجبن",
                price: 1500,
                description: "قدح فنك مع الجبن",
                image: "images/kadh.jpg"
            },
            {
                id: "funk-3",
                name: "طبق فنكر",
                price: 2500,
                description: "طبق فنك",
                image: "images/tabk.jpg"
            },
            {
                id: "funk-4",
                name: "طبق فنكر بالجبن",
                price: 3000,
                description: "طبق فنك بالجبن",
                image: "images/tabk.jpg"
            }
        ]
    },

    /* ================= الشرقي ================= */
    {
        id: "eastern",
        name: "الشرقي",
        icon: "🍗",
        description: "أكلات شرقية",
        items: [
            {
                id: "eastern-1",
                name: "منسف دجاج",
                price: 10000,
                description: "منسف دجاج",
                image: "images/dgag.jpeg"
            },
            {
                id: "eastern-2",
                name: "منسف نص دجاج",
                price: 6000,
                description: "منسف نصف دجاج",
                image: "images/nos.jpg.jpeg"
            },
            {
                id: "eastern-3",
                name: "منسف دجاج كبير",
                price: 15000,
                description: "منسف دجاج كبير",
                image: "images/dgag.jpeg"
            },
            {
                id: "eastern-4",
                name: "كاسة مركة",
                price: 1000,
                description: "يابسة/تبسي",
                image: "images/marka.jpg"
            },
            {
                id: "eastern-5",
                name: "ماعون تمن",
                price: 2000,
                description: "ماعون تمن",
                image: "images/maontm.jpg"
            },
            {
                id: "eastern-6",
                name: "نفر تمن ومرق",
                price: 3000,
                description: "نفر تمن ومرق",
                image: "images/nafr-tm.jpg"
            },
            {
                id: "eastern-7",
                name: "منسف تمن ومرق",
                price: 6000,
                description: "منسف تمن ومرق",
                image: "images/mansf-tm-mrk.jpg"
            }
        ]
    },

    /* ================= المقبلات ================= */
    {
        id: "appetizers",
        name: "المقبلات",
        icon: "🥗",
        description: "إضافات ومقبلات",
        items: [
            {
                id: "app-1",
                name: "ماعون بيتنجان + بتيتة",
                price: 1000,
                description: "بيتنجان وبطاطا",
                image: "images/shn-bt-gn.jpeg"
            },
            {
                id: "app-2",
                name: "ماعون مقبلات كبير",
                price: 5000,
                description: "ماعون مقبلات كبير",
                image: "images/mkblat-L.jpg"
            },
            {
                id: "app-3",
                name: "ماعون مقبلات وسط",
                price: 3000,
                description: "مقبلات مشكلة",
                image: "images/mkblat-L.jpg"
            },
            {
                id: "app-4",
                name: "ماعون مقبلات صغير",
                price: 2000,
                description: "مقبلات مشكلة صغيرة",
                image: "images/mkblat-L.jpg"
            },
            {
                id: "app-5",
                name: "ماعون حمص",
                price: 1000,
                description: "حمص",
                image: "images/hms-bt.jpg"
            },
            {
                id: "app-6",
                name: "صحن زلاطة",
                price: 1000,
                description: "صحن زلاطة",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=85"
            },
            {
                id: "app-7",
                name: "سكوپ ثومية",
                price: 500,
                description: "ثومية",
                image: "images/thomia.jpeg"
            },
            {
                id: "app-8",
                name: "سكوپ صوص",
                price: 500,
                description: "صوص",
                image: "images/sos.jpeg"
            },
            {
                id: "app-9",
                name: "عمبة",
                price: 500,
                description: "عمبة",
                image: "images/ampa.jpg"
            },
            {
                id: "app-10",
                name: "صاص",
                price: 500,
                description: "صاص",
                image: "images/sas.jpg"
            }
        ]
    },

    /* ================= المشروبات ================= */
    {
        id: "drinks",
        name: "المشروبات",
        icon: "🥤",
        description: "مشروبات باردة",
        items: [
            {
                id: "drink-1",
                name: "بطل كولا",
                price: 500,
                description: "كولا",
                image: "images/kola.jpg"
            },
            {
                id: "drink-3",
                name: "بطل كولا عائلي",
                price: 1250,
                description: "كولا عائلي",
                image: "images/kola-l.jpg"
            },
            {
                id: "drink-4",
                name: "بطل ماء",
                price: 250,
                description: "ماء",
                image: "images/watter.jpg"
            }
        ]
    }
];

/* =========================================
   أوقات عمل المطعم
   من 10 صباحاً إلى 2 بعد منتصف الليل
========================================= */

// ========================================
// أوقات عمل المطعم
// ========================================

const RESTAURANT_HOURS = {
    openHour: 10,
    closeHour: 2
};

// التحقق هل المطعم مفتوح حالياً
function isRestaurantOpen() {
    const currentHour = new Date().getHours();

    // من 10 صباحاً إلى 12 بالليل
    if (currentHour >= 10) {
        return true;
    }

    // من 12 بالليل إلى قبل 2 صباحاً
    if (currentHour < 2) {
        return true;
    }

    return false;
}

// نص حالة المطعم
function getRestaurantStatusText() {
    if (isRestaurantOpen()) {
        return "🟢 المطعم مفتوح حالياً ونستقبل طلباتكم";
    }

    return "🔴 المطعم مغلق حالياً — أوقات العمل من 10 صباحاً إلى 2 بعد منتصف الليل";
}
function updateRestaurantStatusUI() {
    const open = isRestaurantOpen();

    if (restaurantStatus) {
        restaurantStatus.textContent = getRestaurantStatusText();

        restaurantStatus.classList.toggle("open", open);
        restaurantStatus.classList.toggle("closed", !open);
    }

    if (checkoutBtn) {
        checkoutBtn.disabled = !open;

        if (open) {
            checkoutBtn.innerHTML = `
                <span>◉</span>
                إرسال الطلب عبر واتساب
            `;
        } else {
            checkoutBtn.innerHTML = `
                <span>🔒</span>
                المطعم مغلق حالياً
            `;
        }
    }
}
/* =========================================
   حالة التطبيق
========================================= */

let cart = [];
let selectedProduct = null;
let modalQuantity = 1;
let activeFilter = "all";
let searchTerm = "";

/* =========================================
   عناصر الصفحة
========================================= */

const menuContainer = document.getElementById("menuContainer");
const quickCategories = document.getElementById("quickCategories");
const filterButtons = document.getElementById("filterButtons");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartFooter = document.getElementById("cartFooter");

const cartCount = document.getElementById("cartCount");
const subtotalElement = document.getElementById("subtotal");
const deliveryFeeElement = document.getElementById("deliveryFee");
const totalPriceElement = document.getElementById("totalPrice");

const customerPhone = document.getElementById("customerPhone");
const customerArea = document.getElementById("customerArea");
const customerNotes = document.getElementById("customerNotes");
const checkoutBtn = document.getElementById("checkoutBtn");
const restaurantStatus = document.getElementById("restaurantStatus");
const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalQuantityElement = document.getElementById("modalQuantity");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

/* =========================================
   أدوات مساعدة
========================================= */

function formatPrice(price) {
    return `${Number(price).toLocaleString("en-US")} ${RESTAURANT.currency}`;
}

function getAllProducts() {
    return menuData.flatMap(category =>
        category.items.map(item => ({
            ...item,
            categoryId: category.id,
            categoryName: category.name,
            categoryIcon: category.icon
        }))
    );
}

function getProductById(productId) {
    return getAllProducts().find(product => product.id === productId);
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

/* =========================================
   عرض الأقسام
========================================= */

function renderQuickCategories() {
    if (!quickCategories) return;
    quickCategories.innerHTML = menuData.map(category => `
        <button
            class="category-card ${activeFilter === category.id ? "active" : ""}"
            data-category="${category.id}"
        >
            <span class="category-icon">${category.icon}</span>
            <strong>${escapeHTML(category.name)}</strong>
        </button>
    `).join("");

    quickCategories.querySelectorAll(".category-card").forEach(button => {
        button.addEventListener("click", () => {
            const categoryId = button.dataset.category;
            activeFilter = categoryId;
            searchTerm = "";
            if (searchInput) searchInput.value = "";

            renderFilters();
            renderMenu();
            updateCategoryActiveState();

            document.getElementById(categoryId)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

function renderFilters() {
    if (!filterButtons) return;
    filterButtons.innerHTML = menuData.map(category => `
        <button
            class="filter-btn ${activeFilter === category.id ? "active" : ""}"
            data-filter="${category.id}"
        >
            ${escapeHTML(category.name)}
        </button>
    `).join("");

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter;
            renderFilters();
            renderQuickCategories();
            renderMenu();

            if (activeFilter !== "all") {
                document.getElementById(activeFilter)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

function updateCategoryActiveState() {
    document.querySelectorAll(".category-card").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === activeFilter
        );
    });
}

/* =========================================
   عرض المنيو
========================================= */

function renderMenu() {
    if (!menuContainer) return;

    const filteredCategories = menuData
        .filter(category => activeFilter === "all" || category.id === activeFilter)
        .map(category => ({
            ...category,
            items: category.items.filter(item => {
                const text = `${item.name} ${item.description} ${category.name}`.toLowerCase();
                return text.includes(searchTerm.toLowerCase());
            })
        }))
        .filter(category => category.items.length > 0);

    if (filteredCategories.length === 0) {
        menuContainer.innerHTML = "";
        if (noResults) noResults.hidden = false;
        return;
    }

    if (noResults) noResults.hidden = true;

    menuContainer.innerHTML = filteredCategories.map(category => `
        <section class="menu-category" id="${category.id}">
            <div class="category-title">
                <div class="title-icon">${category.icon}</div>
                <div>
                    <h3>${escapeHTML(category.name)}</h3>
                    <p>${escapeHTML(category.description)}</p>
                </div>
            </div>
            <div class="menu-grid">
                ${category.items.map(item => createProductCard(item, category)).join("")}
            </div>
        </section>
    `).join("");

    attachProductEvents();
}

function createProductCard(item, category) {
    const cartItem = cart.find(cartProduct => cartProduct.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return `
        <article class="menu-card">
            <div
                class="card-image"
                role="button"
                tabindex="0"
                data-product="${item.id}"
                aria-label="عرض تفاصيل ${escapeHTML(item.name)}"
            >
                <img
                    src="${item.image}"
                    alt="${escapeHTML(item.name)}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'"
                >
                <span class="card-category">
                    ${escapeHTML(category.name)}
                </span>
            </div>

            <div class="card-content">
                <h4>${escapeHTML(item.name)}</h4>
                <p>${escapeHTML(item.description || "وجبة شهية من مطعم أبو الحروف")}</p>
                <div class="card-bottom">
                    <div class="price">
                        ${formatPrice(item.price)}
                    </div>
                    ${
                        quantity > 0
                        ? `
                            <div class="quantity-control">
                                <button
                                    data-action="increase"
                                    data-id="${item.id}"
                                    aria-label="زيادة الكمية"
                                >+</button>
                                <span>${quantity}</span>
                                <button
                                    data-action="decrease"
                                    data-id="${item.id}"
                                    aria-label="تقليل الكمية"
                                >−</button>
                            </div>
                        `
                        : `
                            <button
                                class="add-button"
                                data-action="add"
                                data-id="${item.id}"
                                aria-label="إضافة ${escapeHTML(item.name)} للسلة"
                            >+</button>
                        `
                    }
                </div>
            </div>
        </article>
    `;
}

function attachProductEvents() {
    menuContainer.querySelectorAll("[data-action]").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            const productId = button.dataset.id;
            const action = button.dataset.action;

            if (action === "add") {
                openProductModal(productId);
            }
            if (action === "increase") {
                changeCartQuantity(productId, 1);
            }
            if (action === "decrease") {
                changeCartQuantity(productId, -1);
            }
        });
    });

    menuContainer.querySelectorAll("[data-product]").forEach(element => {
        element.addEventListener("click", () => {
            openProductModal(element.dataset.product);
        });

        element.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProductModal(element.dataset.product);
            }
        });
    });
}

/* =========================================
   إدارة السلة
========================================= */

function changeCartQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    } else if (delta > 0) {
        const product = getProductById(productId);

        if (product) {
            cart.push({
                ...product,
                quantity: delta
            });
        }
    }

    updateCartUI();
    renderMenu();
}


/* حذف وجبة من السلة */
function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);

    updateCartUI();
    renderMenu();

    showToast("تم حذف الوجبة من السلة");
}

function updateCartUI() {
    if (cartFooter) {
    cartFooter.hidden = false;
    cartFooter.style.display = "block";
}
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal > 0 ? subtotal + RESTAURANT.deliveryFee : 0;

    if (cartCount) cartCount.textContent = totalCount;
    if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
    if (deliveryFeeElement) deliveryFeeElement.textContent = subtotal > 0 ? formatPrice(RESTAURANT.deliveryFee) : formatPrice(0);
    if (totalPriceElement) totalPriceElement.textContent = formatPrice(total);

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `<p class="empty-cart-msg">السلة فارغة حالياً</p>`;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h5>${escapeHTML(item.name)}</h5>
                        <span>${formatPrice(item.price * item.quantity)}</span>
                    <div class="quantity-control">
    <button onclick="changeCartQuantity('${item.id}', 1)">+</button>

    <span>${item.quantity}</span>

    <button onclick="changeCartQuantity('${item.id}', -1)">−</button>

    <button
        class="remove-item"
        onclick="removeCartItem('${item.id}')"
        title="حذف الوجبة"
    >
        🗑
    </button>
</div>
                </div>
            `).join("");
        }
    }
}
if (cartItems) {
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart-msg">السلة فارغة حالياً</p>`;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${escapeHTML(item.name)}</h5>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                </div>

                <div class="quantity-control">
                    <button onclick="changeCartQuantity('${item.id}', 1)">+</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeCartQuantity('${item.id}', -1)">−</button>
                </div>
            </div>
        `).join("");
    }
}

if (cartFooter) {
    cartFooter.hidden = cart.length === 0;
}
/* =========================================
   النافذة المنبثقة للمنتج (Modal)
========================================= */

function openProductModal(productId) {
    selectedProduct = getProductById(productId);
    if (!selectedProduct || !productModal) return;

    modalQuantity = 1;
    if (modalImage) modalImage.src = selectedProduct.image;
    if (modalCategory) modalCategory.textContent = selectedProduct.categoryName;
    if (modalName) modalName.textContent = selectedProduct.name;
    if (modalDescription) modalDescription.textContent = selectedProduct.description;
    if (modalPrice) modalPrice.textContent = formatPrice(selectedProduct.price);
    if (modalQuantityElement) modalQuantityElement.textContent = modalQuantity;

    productModal.classList.add("active");
}

function closeProductModal() {
    if (productModal) productModal.classList.remove("active");
}

/* =========================================
   إرسال الطلب عبر WhatsApp
========================================= */

function sendOrderToWhatsApp() {
        if (!isRestaurantOpen()) {
        showToast("🔴 المطعم مغلق حالياً، يرجى المحاولة أثناء أوقات العمل");
        updateRestaurantStatusUI();
        return;
    }
    if (cart.length === 0) {
        showToast("السلة فارغة!");
        return;
    }

    const phone = customerPhone ? customerPhone.value.trim() : "";
    const area = customerArea ? customerArea.value.trim() : "";
    const notes = customerNotes ? customerNotes.value.trim() : "";

    if (!phone || !area) {
        showToast("يرجى كتابة رقم الهاتف والمنطقة");
        return;
    }

    let message = `*طلب جديد من ${RESTAURANT.name}*\n\n`;
    message += `*الطلبات:*\n`;
    cart.forEach(item => {
        message += `- ${item.name} (x${item.quantity}) : ${formatPrice(item.price * item.quantity)}\n`;
    });

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + RESTAURANT.deliveryFee;

    message += `\n*المجموع:* ${formatPrice(subtotal)}`;
    message += `\n*التوصيل:* ${formatPrice(RESTAURANT.deliveryFee)}`;
    message += `\n*الإجمالي النهائي:* ${formatPrice(total)}\n`;
    message += `\n*معلومات الزبون:*`;
    message += `\n📞 الهاتف: ${phone}`;
    message += `\n📍 المنطقة/العنوان: ${area}`;
    if (notes) message += `\n📝 ملاحظات: ${notes}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT.whatsapp}?text=${encodedMessage}`, "_blank");
}

/* =========================================
   تهيئة الأحداث الإبتدائية
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderQuickCategories();
    renderFilters();
    renderMenu();
    updateCartUI();
        updateRestaurantStatusUI();

    // تحديث حالة المطعم كل دقيقة
    setInterval(updateRestaurantStatusUI, 60000);
    /* =========================
       فتح وإغلاق السلة
    ========================= */

    const openCartBtn = document.getElementById("openCartBtn");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const startShoppingBtn = document.getElementById("startShoppingBtn");

    function openCart() {
        if (cartSidebar) {
            cartSidebar.classList.add("open");
        }

        if (cartOverlay) {
            cartOverlay.classList.add("active");
        }

        document.body.classList.add("cart-open");
    }

    function closeCart() {
        if (cartSidebar) {
            cartSidebar.classList.remove("open");
        }

        if (cartOverlay) {
            cartOverlay.classList.remove("active");
        }

        document.body.classList.remove("cart-open");
    }

    if (openCartBtn) {
        openCartBtn.addEventListener("click", openCart);
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCart);
    }

    if (startShoppingBtn) {
        startShoppingBtn.addEventListener("click", () => {
            closeCart();

            document.getElementById("menu")?.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
    /* البحث */
    if (searchInput) {
        searchInput.addEventListener("input", e => {
            searchTerm = e.target.value.trim();
            renderMenu();
        });
    }

    /* إرسال الطلب */
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", sendOrderToWhatsApp);
    }

    /* =========================
       نافذة تفاصيل المنتج
    ========================= */

    // إغلاق النافذة
    const closeModalBtn = document.getElementById("closeModalBtn");

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeProductModal);
    }

    // زر إضافة للسلة
    const modalAddBtn = document.getElementById("modalAddBtn");

    if (modalAddBtn) {
        modalAddBtn.addEventListener("click", () => {

            if (!selectedProduct) {
                console.log("لم يتم اختيار أي منتج");
                return;
            }

            console.log("إضافة للسلة:", selectedProduct.name);
            console.log("الكمية:", modalQuantity);

            changeCartQuantity(
                selectedProduct.id,
                modalQuantity
            );

            closeProductModal();

            showToast("تمت إضافة المنتج للسلة");
        });
    }

    // زيادة الكمية
    const modalPlus = document.getElementById("modalPlus");

    if (modalPlus) {
        modalPlus.addEventListener("click", () => {

            modalQuantity++;

            if (modalQuantityElement) {
                modalQuantityElement.textContent = modalQuantity;
            }

        });
    }

    // تقليل الكمية
    const modalMinus = document.getElementById("modalMinus");

    if (modalMinus) {
        modalMinus.addEventListener("click", () => {

            if (modalQuantity > 1) {
                modalQuantity--;
            }

            if (modalQuantityElement) {
                modalQuantityElement.textContent = modalQuantity;
            }

        });
    }

    // إغلاق عند الضغط خارج النافذة
    if (productModal) {
        productModal.addEventListener("click", event => {

            if (event.target === productModal) {
                closeProductModal();
            }

        });
    }

});