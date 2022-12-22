import {test, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";


//Create/POST
test("REST_api_CreateUser", async({request}) => {
    const response = await request.post(envConfig.rest_create_user_url, {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());

})

//Read/GET
test("REST_api_Get_SingleUser",async ({request}) => {
    const response = await request.get(envConfig.rest__get_singleUser_url);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());
    
})

test("REST_api_Get_UsersList", async({request}) => {
    const response = await request.get(envConfig.rest_get_usersList_url);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());

})

test("REST_api_Get_SingleUser_NotFound",async ({request}) => {
    const response = await request.get(envConfig.rest_get_singleUser_notFound_url);
    expect(response.status()).toBe(404);
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());
    
})

//Update/PUT
test("REST_api_Update_SingleUser",async ({request}) => {
    const response = await request.put(envConfig.rest__get_singleUser_url, {
        data: {
            "name": "morpheus"
        }
    });
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());
})


//Update/PATCH
test.only("REST_api_Patch_SingleUser",async ({request}) => {
    const response = await request.put(envConfig.rest__get_singleUser_url, {
        data: {
            "name": "morpheus",
            "job": "president"
        }
    });
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());
})

test("REST_api_Delete_SingleUser",async ({request}) => {
    const response = await request.delete(envConfig.rest__get_singleUser_url);
    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();
   
})