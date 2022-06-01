const promise = new Promise((resolve, reject) => {
    resolve('Promise Resolvida')

    reject(new Error('Promise rejeitada'))
});

module.exports = promise;