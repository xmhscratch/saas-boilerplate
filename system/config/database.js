module.exports = {
    name: 'system_core',
    host: 'mariadb_master',
    port: 3306,
    dialect: 'mysql',
    username: 'root',
    password: 'mCWDtkT6h9NMHsZq',
    options: {
        pool: {
            max: 1,
            min: 0,
            idle: 1000,
            acquire: 1000,
            evict: 6000,
            timeout: 30000,
            handleDisconnects: true,
        },
        dialectOptions: {
            supportBigNumbers: true,
            bigNumberStrings: true,
            charset: 'utf8mb4_unicode_ci',
        },
        define: {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            charset: 'ascii',
            collate: 'ascii_general_ci',
            dialectOptions: { collate: 'ascii_general_ci' },
        },
        // benchmark: true,
        // logging: console.log,
        logging: false,
        benchmark: false,
    },
    schemaDirPath: '/export/system/schema',
}