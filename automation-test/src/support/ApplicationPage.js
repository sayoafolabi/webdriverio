import BasePage from './support'

class ApplicationPage extends BasePage {

    get pageHeader() { return $('<h1 />') }

}

export default new ApplicationPage()
