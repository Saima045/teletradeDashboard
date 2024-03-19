import mongoose from 'mongoose'
let cachedClient = null;

export const connectDB = async () => {

    if (cachedClient && cachedClient.isConnected()) {
        return cachedClient;
      }
    
      const client = await mongoose.connect('mongodb+srv://saima045:amnanasir@martdb.fisgkoz.mongodb.net/martdb?retryWrites=true&w=majority')
      cachedClient = client;
      return client;

    
    // const connected = {};
    // if (connected.isConnected) return;
    // try {
    //     const db = await mongoose.connect('mongodb+srv://saima045:amnanasir@martdb.fisgkoz.mongodb.net/martdb?retryWrites=true&w=majority')
    //     connected.isConnected = db.connections[0].readyState;
    // } catch (error) {
    //     console.log(error)
    // }

}