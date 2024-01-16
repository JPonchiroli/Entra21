const Controllers = {
    HelloMessage: async (req, res) => {
        try{
            res.json({message: 'Hello World'})
        } catch{
            res.status(500).send(error.message)
        }
    }
}

module.exports = Controllers