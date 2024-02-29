const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    caption: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        requried: false
    }
  
})

//module.exports = mongoose.model('Category', categorySchema);

export const Category = mongoose.models.Category || mongoose.model('Category', categorySchema)

