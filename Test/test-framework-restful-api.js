const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));

// const assert = require('chai').assert;
// const should = require('chai').should;
// const expect = require('chai').expect

const assert = chai.assert;
const should = chai.should;
const expect = chai.expect


describe('API Test for "restful-API.dev', () => {

    const BASE_URL = "https://api.restful-api.dev/"
   //GET 
    it('Test - Get All Objects', async () => {
        const response = await request(BASE_URL)
        .get("objects")
        // console.log(response.statusCode);
        // console.log(response.body)


     //ASSERTION 
        assert.equal(response.statusCode, 200)
        assert.equal(response.body[0].name, "Google Pixel 6 Pro")
        assert.equal(response.body[0].data.color, "Cloudy White")

     //SHOULD   
        should(response.statusCode === 200)

    //EXPECT    
        expect(response.statusCode).to.equal(200) 

        jsonSchema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "color": {
                        "type": "string"
                      },
                      "capacity": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "color",
                      "capacity"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "null"
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "color": {
                        "type": "string"
                      },
                      "capacity GB": {
                        "type": "integer"
                      }
                    },
                    "required": [
                      "color",
                      "capacity GB"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "price": {
                        "type": "number"
                      },
                      "color": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "price",
                      "color"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "price": {
                        "type": "number"
                      },
                      "color": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "price",
                      "color"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "generation": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      }
                    },
                    "required": [
                      "generation",
                      "price"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "year": {
                        "type": "integer"
                      },
                      "price": {
                        "type": "number"
                      },
                      "CPU model": {
                        "type": "string"
                      },
                      "Hard disk size": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "year",
                      "price",
                      "CPU model",
                      "Hard disk size"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "Strap Colour": {
                        "type": "string"
                      },
                      "Case Size": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "Strap Colour",
                      "Case Size"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "Color": {
                        "type": "string"
                      },
                      "Description": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "Color",
                      "Description"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "Capacity": {
                        "type": "string"
                      },
                      "Screen size": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "Capacity",
                      "Screen size"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "Capacity": {
                        "type": "string"
                      },
                      "Screen size": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "Capacity",
                      "Screen size"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "Generation": {
                        "type": "string"
                      },
                      "Price": {
                        "type": "string"
                      },
                      "Capacity": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "Generation",
                      "Price",
                      "Capacity"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "Generation": {
                        "type": "string"
                      },
                      "Price": {
                        "type": "string"
                      },
                      "Capacity": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "Generation",
                      "Price",
                      "Capacity"
                    ]
                  }
                },
                "required": [
                  "id",
                  "name",
                  "data"
                ]
              }
            ]
          }
          assert.jsonSchema(response.body, jsonSchema)
    });

    //POST
    it('Test - Post Store Objects', async () => {
        const body =             {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }
        const response = await request(BASE_URL)

        .post("objects")
        .send(body)
        console.log(response.statusCode);
        console.log(response.body)


        const jsonSchema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "data": {
                "type": "object",
                "properties": {
                  "year": {
                    "type": "integer"
                  },
                  "price": {
                    "type": "number"
                  },
                  "CPU model": {
                    "type": "string"
                  },
                  "Hard disk size": {
                    "type": "string"
                  }
                },
                "required": [
                  "year",
                  "price",
                  "CPU model",
                  "Hard disk size"
                ]
              },
              "createdAt": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name",
              "data",
              "createdAt"
            ]
          }
          assert.jsonSchema(response.body, jsonSchema)

    });

});

