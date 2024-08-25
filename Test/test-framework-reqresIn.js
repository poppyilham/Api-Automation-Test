const request2 = require("supertest");
var chai = require('chai');
chai.use(require('chai-json-schema'));
const assert2 = chai.assert;


describe('API Test for "reqres.in', () => {
    const BASE_URL2 = "https://reqres.in/api/"
    //GET
    it('Test - Get list users', async () => {
        const response2 = await request2(BASE_URL2)
            .get("users?page=2")
        // console.log(response2.statusCode);
        // console.log(response2.body)

        //ASSERTION WITH JSONSCHEMA
        assert2.equal(response2.statusCode, 200);
        assert2.equal(response2.body.page, 2);
        assert2.equal(response2.body.total, 12)

        const jsonSchema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "page": {
                    "type": "integer"
                },
                "per_page": {
                    "type": "integer"
                },
                "total": {
                    "type": "integer"
                },
                "total_pages": {
                    "type": "integer"
                },
                "data": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "first_name": {
                                    "type": "string"
                                },
                                "last_name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "email",
                                "first_name",
                                "last_name",
                                "avatar"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "first_name": {
                                    "type": "string"
                                },
                                "last_name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "email",
                                "first_name",
                                "last_name",
                                "avatar"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "first_name": {
                                    "type": "string"
                                },
                                "last_name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "email",
                                "first_name",
                                "last_name",
                                "avatar"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "first_name": {
                                    "type": "string"
                                },
                                "last_name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "email",
                                "first_name",
                                "last_name",
                                "avatar"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "first_name": {
                                    "type": "string"
                                },
                                "last_name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "email",
                                "first_name",
                                "last_name",
                                "avatar"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "first_name": {
                                    "type": "string"
                                },
                                "last_name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "email",
                                "first_name",
                                "last_name",
                                "avatar"
                            ]
                        }
                    ]
                },
                "support": {
                    "type": "object",
                    "properties": {
                        "url": {
                            "type": "string"
                        },
                        "text": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "url",
                        "text"
                    ]
                }
            },
            "required": [
                "page",
                "per_page",
                "total",
                "total_pages",
                "data",
                "support"
            ]
        }
        assert2.jsonSchema(response2.body, jsonSchema)

    });

    // POST
    it('Test - Post list users', async () => {
        const bodyPost = {
            "name": "Naufal",
            "job": "leader"
        };

        const response2 = await request2(BASE_URL2)
            .post("users?page=2")
            .send(bodyPost); // Using the predefined bodyPost

        console.log(response2.statusCode);
        console.log(response2.body); // Accessing the body from the response

        // ASSERTION WITH JSONSCHEMA
        const schema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "job": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "createdAt": {
                    "type": "string"
                }
            },
            "required": [
                "name",
                "job",
                "id",
                "createdAt"
            ]
        };

        // Using body from response instead of jsonSchema from body
        assert2.jsonSchema(response2.body, schema);
    });


    //DELETE
    it('Test - Delete list users', async () => {
        const response2 = await request2(BASE_URL2)
            .delete("users/2")
        console.log(response2.statusCode);
        console.log(response2.body)


        //ASSERTION (empty or just returning a status code))
        it('Test - Delete list users', async () => {
            const response2 = await request2(BASE_URL2)
                .delete("users/2");

            console.log(response2.statusCode);

            // Ensure that the status code is 204 No Content (or the expected status)
            assert2.equal(response2.statusCode, 204);
        });


        //ASSERTION WITH JSONSCHEMA (if there is a JSON response from the server after performing a DELETE)

        it('Test - Delete list users', async () => {
            const response2 = await request2(BASE_URL2)
                .delete("users/2");

            console.log(response2.statusCode);
            console.log(response2.body);

            // JSON Schema that expects a JSON response with a deletion message
            const jsonSchema = {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    },
                    "deletedAt": {
                        "type": "string",
                        "format": "date-time"
                    }
                },
                "required": [
                    "message",
                    "deletedAt"
                ]
            };

            assert2.jsonSchema(response2.body, jsonSchema);
        });

    });

    // PUT
    it('Test - Put list users', async () => {
        const bodyPut = {
            "name": "Fadil",
            "job": "Member",
            "updatedAt": "2024-08-24T19:07:28.289Z"
        };

        const response2 = await request2(BASE_URL2)
            .put("users/2")
            .send(bodyPut); // send bodyPut when doing a PUT request

        console.log(response2.statusCode);
        console.log(response2.body); // Accessing the response body

        // ASSERTION WITH JSONSCHEMA
        const schema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "job": {
                    "type": "string"
                },
                "updatedAt": {
                    "type": "string"
                }
            },
            "required": [
                "name",
                "job",
                "updatedAt"
            ]
        };

        assert2.jsonSchema(response2.body, schema);
    });
});
