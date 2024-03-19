import mongoose from 'mongoose'
let cachedClient = null;

export const connectDB = async () => {


   
    if (cachedClient && cachedClient.readyState === 1) {
        return cachedClient;
    }

    try {
        const client = await mongoose.connect('mongodb+srv://saima045:amnanasir@martdb.fisgkoz.mongodb.net/martdb?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        cachedClient = client;
        return client;
    } catch (error) {
        throw new Error('Failed to connect to MongoDB Atlas: ' + error.message);
    }


    // if (cachedClient && cachedClient.isConnected()) {
    //     return cachedClient;
    //   }
    
    //   const client = await mongoose.connect('mongodb+srv://saima045:amnanasir@martdb.fisgkoz.mongodb.net/martdb?retryWrites=true&w=majority')
    //   cachedClient = client;
    //   return client;

    
    // const connected = {};
    // if (connected.isConnected) return;
    // try {
    //     const db = await mongoose.connect('mongodb+srv://saima045:amnanasir@martdb.fisgkoz.mongodb.net/martdb?retryWrites=true&w=majority')
    //     connected.isConnected = db.connections[0].readyState;
    // } catch (error) {
    //     console.log(error)
    // }
    // return connected

}