module.exports = {
    // Action: require('./action/manager'),
    // Actions: require('./action/repository'),
    // ActionRequest: require('./action/request/manager'),
    // ActionRequests: require('./action/request/repository'),
    // ActionRequestField: require('./action/request/field/manager'),
    // ActionRequestFields: require('./action/request/field/repository'),
    // ActionRequestFieldVariable: require('./action/request/field/variable/manager'),
    // ActionRequestFieldVariables: require('./action/request/field/variable/repository'),
    // ActionRequestTemplate: require('./action/request/template/manager'),
    // ActionRequestTemplates: require('./action/request/template/repository'),
    // ActionRequestTemplateField: require('./action/request/template/field/manager'),
    // ActionRequestTemplateFields: require('./action/request/template/field/repository'),
    // ActionRequestTemplateFieldVariable: require('./action/request/template/field/variable/manager'),
    // ActionRequestTemplateFieldVariables: require('./action/request/template/field/variable/repository'),
    // ActionTemplate: require('./action/template/manager'),
    // ActionTemplates: require('./action/template/repository'),
    // ActionTemplateRequest: require('./action/template/request/manager'),
    // ActionTemplateRequests: require('./action/template/request/repository'),
    // App: require('./app/manager'),
    // Apps: require('./app/repository'),
    // AppManifest: require('./app/manifest'),
    Credential: require('./credential'),
    EventHook: require('./event-hook/manager'),
    EventHooks: require('./event-hook/repository'),
    GoogleFont: require('./google-font/manager'),
    // Ingress: require('./ingress/manager'),
    // Ingresses: require('./ingress/repository'),
    Integration: require('./integration'),
    Integrations: {
        System: require('./integration/system'),
        Facebook: require('./integration/facebook'),
        Instagram: require('./integration/instagram'),
        Google: require('./integration/google'),
    },
    Payment: require('./checkout/payment'),
    PaymentMethod: {
        PayPal: require('./checkout/methods/paypal'),
        Card: require('./checkout/methods/card'),
    },
    Organization: require('./organization/manager'),
    Organizations: require('./organization/repository'),
    OrganizationInvitation: require('./organization/invitation'),
    OrganizationStats: require('./organization/stats'),
    // Storage: {
    //     Drive: require('./storage/drive/manager'),
    //     Drives: require('./storage/drive/repository'),
    //     File: require('./storage/file/manager'),
    //     Files: require('./storage/file/repository'),
    //     Folder: require('./storage/folder/manager'),
    //     Folders: require('./storage/folder/repository'),
    //     Node: require('./storage/node/manager'),
    //     Nodes: require('./storage/node/repository'),
    // },
    Subscription: require('./subscription'),
    SubscriptionUsage: require('./subscription-usage'),
    // Thumbnail: require('./thumbnail'),
    Timezone: require('./timezone'),
    User: require('./user'),
    UserSession: require('./user-session'),
    Wallet: require('./wallet/manager'),
    Wallets: require('./wallet/repository'),
    WalletStats: require('./wallet/stats'),
}