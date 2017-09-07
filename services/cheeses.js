const cheeses = require('../data/cheeses');

/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * Returnerer et JSON objekt med alle oste fra kartoteket
     * @returns {object}
     */
    'getAll': () => cheeses,

    /**
     * getOne
     * Returnerer et JSON objekt med en enkelt ost fra kartoteket
     * @param {string} varenr - Varenummeret på en ost
     * @return {object}
     */
    'getOne': (varenr) => {
        let CurrentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                CurrentCheese = JSON.stringify(cheese);
            }
        });

        if (CurrentCheese !== null) {
            return CurrentCheese;
        } else {
            return {
                "code": "ResourceNotFound",
                "message": varenr + " does not exist"
            };
        }
    }
};