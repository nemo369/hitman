export const seoObj = {
    title: "היטמן- סדרת האלבומים | Hitman",
    description: "Hitman -מחווה לסדרת אלבומי האוסף היטמן",
    openGraph: {
        type: 'website',
        locale: 'he_IL',
        // url: 'https://www.nextmovies.test',
        site_name: 'Hitman - היטמן',
    },
};


export const seoMerge = (seo)=>{
    return {
        ...seoObj,
        title: `${seoObj.title} | ${seo.title ? seo.title : ''}`,
        description: `${seoObj.description} | ${seo.description ? seo.description : ''}`,
        openGraph:{
            title: `${seoObj.title} | ${seo.title ? seo.title : ''}`,
            description: `${seoObj.title}`,
        }
    }
}      