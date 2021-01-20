import Page from './page';

class RegistrationPage extends Page {

    get createOneLink() {
        return $('p [href="/user/register"]')
    }

    get header() {
        return $('h1')
    }

    get redErrorCircle() {
        return $('.anticon-close-circle')
    }

    get firstNameInputField() {
        return $('#user_login_firstName')
    }

    get lastNameInputField() {
        return $('#user_login_lastName')
    }

    get emailInputField() {
        return $("//input[@id='user_login_email']")
    };

    get passwordInputField() {
        return $("//input[@id='user_login_password']")
    };

    get eyeIcon() {
        return $("//span[@class='ant-input-suffix']")
    };

    get errorPassword() {
        return $("//div[@class='ant-form-item-explain ant-form-item-explain-error']")
    }

    get termsAgreementsChBox() {
        return $("//input[@id='user_login_agreement']/..")
    };

    get termsAgreementsBtn() {
        return $("//button[@data-qa='termsBtn']")
    };

    get registerBtn() {
        return $('//button[@type="submit"]')
    }

    open() {
        return browser.url('/user/register');
    }

    registerMandatoryFields(firstName, lastName, email, password) {
        this.firstNameInputField.setValue(firstName);
        this.lastNameInputField.setValue(lastName);
        this.emailInputField.setValue(email);
        this.passwordInputField.setValue(password);
        this.termsAgreementsChBox.click();
    }

    registerNewUser(firstName, lastName, email, password) {
        this.firstNameInputField.setValue(firstName);
        this.lastNameInputField.setValue(lastName);
        this.emailInputField.setValue(email);
        this.passwordInputField.setValue(password);
        this.termsAgreementsChBox.click();
        this.registerBtn.click();
    }
}


export default new RegistrationPage();
