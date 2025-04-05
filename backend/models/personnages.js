const path = require('node:path');
const { parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/personnages.json');

const defaultPersonnages = [];

/**
 * Return all personnages
 * @returns {Array} All personnages
 */
function readAllPersonnages() {
    const array = parse(jsonDbPath, defaultPersonnages);
    return array;
}

/**
 * Return all personnages ordered by name ascending
 * @returns {Array} All personnages ordered by name ascending
 */
function readAllByNameAscending() {
    const array = parse(jsonDbPath, defaultPersonnages);
    array.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return array;
}

/**
 * Return all personnages ordered by name descending
 * @returns {Array} All personnages ordered by name descending
 */
function readAllByNameDescending() {
    const array = parse(jsonDbPath, defaultPersonnages);
    array.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;
    });
    return array;
}

/**
 * Search personnages by name
 * @param {String} name Name to search
 * @returns {Array} All personnages matching the name
 */
function searchByName(name) {
    const array = parse(jsonDbPath, defaultPersonnages);
    const result = array.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    return result;
}



module.exports = {
    readAllPersonnages,
    readAllByNameAscending,
    readAllByNameDescending,
    searchByName
};
