SalesforceInteractions.init(
    { cookieDomain: "pocyamaha.def6.com" }
).then(() => {
    /* Here we will first check session storage for the islogin item containing the user's email that is associated
    with their account. This value is set in the global event listener in the site config when a submission event
    occurs. On this website, both successful and invalid form submissions emit a submission event, the page also is
    quickly reloaded after a successful login. In this unusual situation, we will first save the submitted data in
    session storage. Then when the page loads, we check for the islogin value in session storage and then look for a
    DOM element which indicates a successful login before retrieving the stored user email and sending our login event.
    let loginEvent = sessionStorage.getItem("islogin");
    // if there is a stored login event...
    if (loginEvent) {
    // wait for the logged in user dropdown to appear in the nav, signifying a successful login
    SalesforceInteractions.DisplayUtils.pageElementLoaded( "#block-public-sitewide-ui-author-profile-dropdown", )
    .then(() => {
        // remove the stored email from session storage sessionStorage.removeItem("islogin");
        // construct and send the Login Success event to Personalization
        SalesforceInteractions.sendEvent({
            interaction: { name: "Login Success" },
            user: {
            The users email address provided in the login form is sent to Personalization as user.identities.emailAddress
            because in this example, emailAddress is configured to be the default identity for the web channel.
            identities: { emailAddress: loginEvent, }, }, }); }); } */
    const config = {
        global: {
            contentZones: [
                { name: "global_header", selector: "section.templatemo-top-section"},
                { name: "global_footer", selector: "footer.tm-footer"}, ],
        /* Since the website does not have consistent selectors and structure within the Article pages, this content zone
        will be used to add recs to the bottom of Article pages. */
        /* listeners: [ Here we are listening for all submission events that happen within this document. This pattern can
        be used to create generic form submission event handlers, or even just to consolidate them to one place in the
        sitemap code. SalesforceInteractions.listener("submit", "body", (event) => { // Check the id of the event target
        to check for the login form we want to scrape data from if (event.target.id === "login-form") { // loop through
        login form fields... for (i = 0; i < event.target.length; i++) { // Find the email field by id within the event
        object. if (event.target[i].id === "login-email") { // save user email in session storage
        sessionStorage.setItem("islogin", event.target[i].value); } } } }), ],*/
        },
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page",
            },
        },
        pageTypes: [
            {
                name: "home",
                isMatch: () => /^\/$/.test(window.location.pathname),
                interaction: { name: "Homepage", },
                contentZones: [
                    { name: "home_recs_1", selector: "div.welcome-slider" },
                    { name: "home_recs_2", selector: "div.about-container" },
                ],
            },
            {
                name: "about",
                isMatch: () => /^\/about.html/.test(window.location.pathname),
                interaction: { name: "About", },
                contentZones: [
                    { name: "about_slider", selector: "div.welcome-slider" },
                    { name: "about_row", selector: "div.row" },
                ],
            },
            {
                name: "contact",
                isMatch: () => /^\/contact.html/.test(window.location.pathname),
                interaction: { name: "Contact", },
                contentZones: [
                    { name: "contact_slider", selector: "div.welcome-slider" },
                    { name: "contact_map", selector: "div#google-map" },
                    { name: "contact_form", selector: "div.contact-form-container" }
                ],
            },
            {
                name: "gallery",
                isMatch: () => /^\/gallery.html/.test(window.location.pathname),
                interaction: { name: "Gallery", },
                contentZones: [
                    { name: "gallery_img", selector: "div.templatemo-welcome" },
                    { name: "gallery_desc", selector: "section#gallerydesc" },
                    { name: "gallery_list", selector: "section#gallerylist" },
                    { name: "gallery_banner", selector: "div.tm-banner" }
                ],
            },
            {
                name: "products",
                isMatch: () => /^\/products.html/.test(window.location.pathname),
                interaction: { name: "Products", },
                contentZones: [
                    { name: "products_img", selector: "div.templatemo-welcome" },
                    { name: "products_desc", selector: "section#productsdesc" },
                    { name: "products_aside", selector: "aside.tm-gallery-aside" },
                    { name: "products_gallery", selector: "nav.tm-gallery-nav" },
                    { name: "products_gallery", selector: "div.tm-call-us" }
                ],
            },
            {
                name: "services",
                isMatch: () => /^\/services.html/.test(window.location.pathname),
                interaction: { name: "Services", },
                contentZones: [
                    { name: "services_slider", selector: "div.welcome-slide" },
                    { name: "services_images", selector: "div.tm-overflow-hidden" },
                    { name: "services_catalog", selector: "div.services-container-1" },
                    { name: "services_options", selector: "div.about-container-2" },
                    { name: "services_banner", selector: "div.tm-banner" }
                ],
            },
            /*{
                name: "blog",
                isMatch: () => {
                    if (/\/about\/blog\/\d+\/\d+\/.+/.test(window.location.pathname)) {
                        setPageDetailsFromDataLayer();
                        return true;
                    }
                    return false;
                },
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Blog",
                        id: () => SalesforceInteractions.mcis.getValueFromNestedObject("entityId", pageDetails), attributes: {
                            name: () => SalesforceInteractions.mcis.getValueFromNestedObject("entityLabel", pageDetails),
                            url: SalesforceInteractions.resolvers.fromCanonical(),
                            imageUrl: SalesforceInteractions.resolvers.fromMeta("og:image"),
                        },
                        relatedCatalogObjects: {
                            Category: () => [ SalesforceInteractions.mcis.getValueFromNestedObject( "flatTaxonomy.blog_categories", pageDetails,
                                ), ], }, }, },
                                listeners: [ SalesforceInteractions.listener("submit", ".premium-access-ajax", () => { const eloquaId = findInDataLayer("EloquaGuid"); if (eloquaId) { SalesforceInteractions.sendEvent({ interaction: { name: "Tableau Blog Sign-up" }, user: { attributes: { eloquaId: eloquaId } }, }); } }), ], contentZones: [ As in this case below, content zones do not necessarily have to denote content to be replaced, they can be useful for inserting template content before or after the the DOM node with the provided selector. { name: "blog_text_content", selector: ".field--name-field-page-sections" }, ], }*/
        ],
    };
SalesforceInteractions.initSitemap(config); });