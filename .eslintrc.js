module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "AgendaAPI": "readable",        
    },
    "rules": {
        "no-new-object": "error"
    }
};