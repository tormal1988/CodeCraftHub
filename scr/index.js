const app = require('./app');
const { PORT } = require('./config/server');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});