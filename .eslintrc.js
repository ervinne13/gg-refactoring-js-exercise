module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,        
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
        "AgendaAPI": "readable",        
    },
    "rules": {
        "no-new-object": "error"
    }
};