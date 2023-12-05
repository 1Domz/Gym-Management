import supertest from "supertest";
import { main } from "../src";
import {describe, it, expect, beforeAll, afterAll} from "vitest"

describe("", () => {
    let server


    beforeAll(async () => {
        console.log('Before All Hook: Starting server setup...');
        server = await main();
        console.log('Before All Hook: Server setup completed.', server);
    })

    afterAll(async () => {
        await server.close()
    })

    it('should login the user', async() => { 
        const response = await supertest(server)
        .post('/gym-management')
        .send({
            query: `
            mutation {
                Login(email: "dom000001@gmaill.com", password: "xxxx1234"){
                    token
                user {
                    email
                    firstname
                    lastname
                }
                }
            }`
        })
        console.log(JSON.stringify({ response}, null, 2))
        expect(response.status).toBe(200)
    })
})
