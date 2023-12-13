import armado1 from './img/armado1.png'
import armado2 from './img/armado2.png'
import armado3 from './img/armado3.png'
import armado4 from './img/armado4.png'
import consola1 from './img/consola1.png'
import consola2 from './img/consola2.png'
import consola3 from './img/consola3.png'
import consola4 from './img/consola4.png'

const products = [
    {
        id: "1",
        name: "Intel I3 - RX550",
        category: "equipoArmado",
        price: 700,
        img: armado1,
        stock: 10,
        description: " Gabinete Shot 8011 RGB con lateral en cristal templado /// Fuente Deepcool PF450w 80 Plus /// Mother Asrock h510 con usb 3.0, soporte DDR4 hasta 64Gb - Procesador Intel Core I3 10100f 4 núcleos 8 hilos 3,6Ghz 4,3Ghz /// Memoria Kingston 8Gb DDR4 2666mhz /// Disco SSD Gigabyte 480Gb /// Gráficos Radeon RX550 4Gb"
    },
    {
        id: "2",
        name: "AMD Ryzen 3 - Integrada",
        category: "equipoArmado",
        price: 560,
        img: armado2,
        stock: 10,
        description:"Gabinete Shot 8016 RGB con lateral en cristal templado /// Fuente Deepcool PF450 80 Plus /// Mother Asus A320 Sata III USB 3.0 /// Procesador AMD Ryzen 3 3200G 4 núcleos /// Memoria Kingston 8Gb DDR4 3200mhz /// Disco SSD PCie 256Gb /// Gráficos AMD Radeon 1700 MHz",
    },
    {
        id: "3",
        name: "AMD Ryzen 5 - GTX1650",
        category: "equipoArmado",
        price: 750,
        img: armado3,
        stock: 10,
        description:"Gabinete Cooler Master CMP320L con lateral en cristal templado /// Fuente Cooler Master Elite NEX N400 /// Mother Asus A320 Sata III USB 3.0 /// Procesador AMD Ryzen 5 4500 6 núcleos 12 hilos 3.6GHz / 4.1GHz /// Memoria 16Gb DDR4 3200mhz 2 x 8 /// Disco SSD PCIe 500Gb /// Gráficos Geforce GTX1650 4Gb",
    },
    {
        id: "4",
        name: "Intel I3 - RX6400",
        category: "equipoArmado",
        price: 850,
        img: armado4,
        stock: 10,
        description:"Gabinete Shot 8011 RGB con lateral en cristal templado /// Fuente Deepcool PF550w 80 Plus /// Mother Asus h510 con usb 3.0, soporte DDR4 hasta 64Gb /// Procesador Intel I3 10100f 4 núcleos 8 hilos 3,6Ghz 4,3Ghz /// Memoria Kingston 8Gb DDR4 2666mhz /// Disco SSD 480Gb /// Gráficos RX6400 4Gb",
    },
    {
        id: "9",
        name: "Sony PlayStation 5",
        category: "consolas",
        price: 935,
        img: consola1,
        stock: 10,
        description:"Procesador de 8 núcleos 3.5 GHz AMD Zen 2 /// GPU de 10.3 teraflop AMD RDNA 2 /// 16 GB GDDR6 de memoria RAM /// 825GB SSD de velocidad ultrarrápida para almacenamiento",
    },
    {
        id: "10",
        name: "Microsoft Xbox Serie X",
        category: "consolas",
        price: 950,
        img: consola2,
        stock: 10,
        description:"La consola más potente de esta nueva generación /// Auténtico 4K /// Hasta 120 Cuadros por segundo /// 8K HDR Alto rango dinámico /// Xbox Velocity Architecture",
    },
    {
        id: "11",
        name: "Nintendo Switch Lite",
        category: "consolas",
        price: 325,
        img: consola3,
        stock: 10,
        description:"Controles integrados /// Vincula hasta ocho consolas Nintendo Switch y Nintendo Switch Lite para disfrutar de juegos multijugador en cualquier lugar /// Con una suscripción a Nintendo Switch Online* podrás hacer equipo o enfrentarte a otros jugadores en línea en juegos compatibles",
    },
    {
        id: "12",
        name: "Nintendo Switch - Sports Edition",
        category: "consolas",
        price: 525,
        img: consola4,
        stock: 10,
        description:"Procesador: Tegra alimentado por NVIDIA /// Capacidad de Disco Duro: 32Gb /// Conectividad: Wi-Fi 802.11ac /// Batería: Extendida",
    },
    {
        id: "20",
        name: "Juegos",
        category: "juegos",
        price: 111,
        img: consola4,
        stock: 10,
        description:"JuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuego",
    },
    {
        id: "21",
        name: "Juegos",
        category: "juegos",
        price: 111,
        img: consola4,
        stock: 10,
        description:"JuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuego",
    },
    {
        id: "22",
        name: "Juegos",
        category: "juegos",
        price: 111,
        img: consola4,
        stock: 10,
        description:"JuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuegoJuego",
    },

    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}