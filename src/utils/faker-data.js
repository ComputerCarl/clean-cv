var faker = require('faker');

const generateFrom = (max, min) => Math.floor(Math.random() * (max - (min || 0)))

export const generateStoreCard = () => ({
    imgSrc: `https://picsum.photos/100/100?rnd=${Math.random()}`,
    storeName: faker.company.companyName(),
    subtitle: 'coupon codes',
    labelLink: faker.internet.domainName(),
    linkUrl: faker.internet.url(),
})

export const generateStackOfStoreCards = (qty = 15) => [...Array(qty).keys()].map(() => generateStoreCard())

export const generateCouponDetails = () => {
    const company = generateStoreCard();
    const days = generateFrom(7);

    return ({
        storeLinkUrl: company.linkUrl,
        storeThumbSrc: (generateFrom(5) > 1) ? '' : company.imgSrc,
        couponQtyUsedTimes: `${generateFrom(10000)} times`,
        couponLastUsed: days ? `${days} day${(days > 1) ? 's' : ''} ago` : 'today',
        couponSuccessRate: `${generateFrom(100)}%`,
        couponMainTitle: company.storeName,
        couponCodeTeaser: Math.floor(Math.random() * 1116).toString(16, 'hex'),    
        couponBoldFeature: `${generateFrom(20, 10)}% off`,
        couponFeatureDetails: 'all items'
    })
}


export const generateStackOfCouponCards = (qty = 15) => [...Array(qty).keys()].map(() => generateCouponDetails())
