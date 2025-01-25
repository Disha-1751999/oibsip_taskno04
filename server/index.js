import app from './app.js';
import { PORT } from './src/config/config.js';

app.listen(PORT,function(){
    console.log("Server started on port "+PORT)
})
  
