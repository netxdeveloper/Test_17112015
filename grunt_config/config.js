module.exports = {
    'globals': [],
    'npmLoad': [],
    'tasksConfig': {
        'projName': 'tutorial',
        'projVersion': '0.1.0',
        'deployFragment': 'repo/sims/<%= projName %>'
    },
    'tasks': {
        'rel': ["mocha:bamboo"]
    }
};