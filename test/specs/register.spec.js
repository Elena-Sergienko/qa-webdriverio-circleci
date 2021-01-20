import RegistrationPage from "../pageobjects/registration.page";
import faker from 'faker';
import axios from 'axios';
import userSearchByEmail from "../../api/users/userSearchByEmail";
import userDeleteByEmail from "../../api/users/userDeleteByEmail";


describe('TS: REGISTRATION', () => {

    let newUserEmail;
    let randEmail = faker.internet.email().replace(/[^a-z0-9.@]/g, '');
    let randFirstName = faker.name.firstName();
    let randLastName = faker.name.lastName();
    let password = '111111';

    before(() => {
        RegistrationPage.open();
        RegistrationPage.createOneLink.click();
    })

    it('Should register a new user', () => {
        RegistrationPage.registerNewUser(randFirstName, randLastName, randEmail, password);
        expect(browser).toHaveUrl('https://stage.localcoding.us/user/register-step2');
    })

    it('Should verify registration of the new user in BD', async () => {
        const response = await userSearchByEmail(randEmail);
        newUserEmail = response.items[0].email;
        expect(newUserEmail).toEqual(randEmail);
    })

    it('Should delete the new user', async () => {
        const response = await userDeleteByEmail(newUserEmail);
        expect(response.success).toEqual(true);
    })

});


