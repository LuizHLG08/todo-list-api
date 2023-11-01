const validateBody = (req, res, next) => {
    const { body } = req;

    if(body.title === undefined) {
       return res.status(400).json({message: "The field 'title' is required"})
    } else if(body.content === undefined) {
       return res.status(400).json({message: "The field 'content' is required"})
    }
    if(body.title === "") {
       return res.status(400).json({message: "'title' cannot be empty"})
    } else if(body.content === "") {
       return res.status(400).json({message: "'content' cannot be empty"})
    }

    next()
};

const validateId = (req, res, next) => {
   const id = parseInt(req.params.id)

   if (isNaN(id) || id <= 0) {
      return res.status(400).json({ message: 'Invalid id' });
   }
   next()
}

module.exports = {
    validateBody,
    validateId,
};