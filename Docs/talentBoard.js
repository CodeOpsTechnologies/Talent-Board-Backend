/**
 * @apiName Create Profile
 * @apiGroup Talent Board
 * @api {post} /talent Create a profile in TalentBoard
 *
 * @apiParam {String} name name of the user
 * @apiParam {String[]} skills skills of the user
 * @apiParam {String} industry industry of the user
 * @apiParam {String} jobRole jobRole of the user
 * @apiParam {Number=1,2,3} proficiencyLevel proficiencyLevel of the user 1 -> Beginner, 2 -> Intermediate, 3 -> Advanced
 * @apiParam {Number} visibilityDuration visibilityDuration of the user 1 -> 15 days, 2 -> 30 days, 3 -> 45 days, 4 -> 60 days, 5 -> 90 days
 * @apiParam {Number} experience experience of the user 1 -> 0-1 year, 2 -> 1-3 years, 3 -> 4 - 7 years, 4 -> 8-10 years, 5 -> 11-15 years, 6 -> 16+ years
 * @apiParam {Boolean} relocation status if user is willing to relocate
 * @apiParam {String} linkedinUrl linkedinUrl of the user
 * @apiParam {String} state state of the user
 * @apiParam {String} city city of the user
 *
 * @apiParamExample {json} Request-Example:
 * {
    "name": "John",
    "skills": ["DynamoDB", "S3"],
    "industry": "IT",
    "jobRole": "Serverless Consultant",
    "proficiencyLevel": 1,
    "relocation": false,
    "state": "Karnataka",
    "city": "bangalore",
    "experience": 1,
    "linkedinUrl": "https://www.linkedin.com/",
    "visibilityDuration": 1
 }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "statusCode": 201
 *  "body": "Requested data created successfully"
 * }
 */

/**
 * @apiName List Profiles
 * @apiGroup Talent Board
 * @api {post} /talent/profiles List profiles to TalentBoard
 *
 * @apiParam {Number} limit limit(to pass in queryparams)
 * @apiParam {Number} offset offset(to pass in queryparams)
 * @apiParam {String} searchTerm searchTerm can be the string to be search through all columns, names(filter) for skills and industry can be passed inside this param only.(pass inside body)
 * @apiParam {String} sort columnName to sort with indication of ASC or DESC, ex - "+name" -> will sort column name in ascending order, "-name" -> will sort the column name in descending order
 * @apiParam {Json} filterBy Json with key as filter name and value having array of filter values
 *
 * @apiParamExample {json} Request-Example:
 * {
          "limit": 20,
          "offset": 0,
          "searchTerm": "Serverless Consultant",
          "sort": "+name",
          "filterBy": {
            "skills": ["DynamoDB"],
            "state": ["Punjab"],
            "city": ["nashik"],
            "jobRole": ["developer"],
            "industry": ["IT"],
            "proficiencyLevel": [1, 2]
          }
    }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "statusCode": 201
 *  "body": [
 *    {
 *      "name": "Carol Schmeler",
 *      "skills": ["DynamoDB","S3"],
 *      "industry": "IT",
 *      "jobRole": "Serverless Consultant",
 *      "proficiencyLevel": 1,
 *      "visibilityDuration": 1,
 *      "relocation": false,
 *      "state": "Karnataka",
 *      "city": "bangalore",
 *      "experience": 1,
 *      "linkedinUrl": "http://jude.org"
 *    }
 *  ]
 * }
 */

/**
 *  @apiName Get Filters
 *  @apiGroup Talent Board
 *  @api {get} /talent/filters Get Filters for TalentBoard
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "statusCode": 200
 *  "body": {
 *    "cities": ["bangalore"],
 *    "states": ["Karnataka"],
 *    "industries": ["IT"],
 *    "jobroles": ["Serverless Consultant"]
 *  }
 * }
 */
