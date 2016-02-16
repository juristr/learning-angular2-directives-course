
interface ComponentHandler {
    upgradeDom(optJsClass, optCssClass): any;
    upgradeElement(element, optJsClass): any;
    upgradeElements(elements): any;
    upgradeAllRegistered(): any;
    registerUpgradedCallback(jsClass, callback): any;
    register(config): any;
    downgradeElements(nodes): any;
}

declare var materialDesign: {
    componentHandler: ComponentHandler
};

declare module "material-design-lite/material" {
    export = materialDesign;
}