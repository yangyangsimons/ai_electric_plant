const advancedResults = (model, populate) => async(req, res, next) => {
    let query;
    // copy req.query for modifications
    const reqQuery = { ...req.query };
  
    // fields to exclude from select query
    const removeFields = ["select", "sort", "limit", "page"];
  
    // loop over remove fields, delete from reqQuery
    removeFields.forEach((params) => delete reqQuery[params]);
  
    console.log(reqQuery);
  
    // create query string
    let queryStr = JSON.stringify(reqQuery);
  
    // create operators ($gt, $gte etc)
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );
    console.log(queryStr);
  
    // finding resources
    query = model.find(JSON.parse(queryStr))
    total = await model.count(JSON.parse(queryStr));
  
    // select fields
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query.select(fields);
    }
  
    // sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query.sort(sortBy);
    } else {
      query.sort("-createdAt");
    }
  
    //pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10; // default limit is 10
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;  
    const totalPages = Math.ceil(total/limit);
  
    query = query.skip(startIndex).limit(limit);

    if(populate){
        query = query.populate(populate);
    }
  
    // pagination results
    const paginatin = {totalPages};
  
    if (endIndex < total) {
      paginatin.next = {
        page: page + 1,
        limit,
      };
    }
  
    if (startIndex > 0) {
      paginatin.prev = {
        page: page - 1,
        limit,
      };
    }

    // execute query
    const results = await query;

    res.advancedResults = {
        success: true,
        count: results.length,
        paginatin,
        data: results
    }

    next();
  
    
}

module.exports = advancedResults;