const xAccesData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },

]




let user1 = {
    id: 1,
    username: 'mr Not',
    img: './Images/bg-header.jpg',
    title: 'Software Enginer'
}

let user2 = {
    id: 2,
    username: 'mr Eng',
    img: './Images/bg-header.jpg',
    title: 'Web developer'
}

let user3 = {
    id: 3,
    username: 'mr LKK',
    img: './Images/bg-header.jpg',
    title: 'Ui Ux Designer'
}






const transactions = [
    {
        id: 1,
        customer: 'Qadir Yolme',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: './src/assets/Images/bg-header.jpg'
    },
    {
        id: 2,
        customer: 'Amin Saeedi',
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: './src/assets/Images/bg-header.jpg'
    },
    {
        id: 3,
        customer: 'Mohammad Qol',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: './src/assets/Images/bg-header.jpg'
    },
    {
        id: 4,
        customer: 'Sasan Moq',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: './src/assets/Images/bg-header.jpg'
    },
]



let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: './src/assets/Images/qadir.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: './src/assets/Images/amin.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: './src/assets/Images/sasan.jpg',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: './src/assets/Images/zahra.jpg',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: './src/assets/Images/hamze.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]


let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: '/Images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: '/Images/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: '/Images/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: '/Images/dell.jpg',
        price: 890
    },
]

const productsData = [
    {
        "name": 'Jan',
        "sales": 4000,
    },
    {
        "name": 'Feb',
        "sales": 3000,
    },
    {
        "name": 'Mar',
        "sales": 5000,
    },
]


export { xAccesData, transactions , userRows , products , productsData }


