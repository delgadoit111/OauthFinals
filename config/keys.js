module.exports = {
    google:{
        clientID: '345281993403-pkv6ubl5bm3v1uvb6glldi7ruobce2ki.apps.googleusercontent.com',
        clientSecret: 'iEfR9F56KVQ4jKAm-WYd5taa'
    },

    facebook:{
        AppId: '209428250485842',
        AppSecret: '3f24db3f129629e5ec2ad59c6364c3de'
    },

    postgresdb:{
        user: 'hmdkddccpiaecp', 
        host: 'ec2-3-234-109-123.compute-1.amazonaws.com',
        database: 'ddca670kdk287m', 
        password: 'e762078f263d5b2cfa7fca511c250395e76ae71f0c36b0cd45538467a7a9a985'
        ,
        port:'5432',
        ssl:true,
    },
    session:{
        cookieKey: 'thisismyuniquecookiekey'
    }
};
