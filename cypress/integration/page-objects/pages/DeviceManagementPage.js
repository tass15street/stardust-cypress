//device-connection-mac

import BasePage from "../BasePage";

const device_connection = ".device-connection-mac"
const device_field = ".field-block > .field";

export default class DeviceManagementPage extends BasePage {

    static getDeviceConnection() {
        cy.get(device_connection).invoke('text').then($dvCon => {

            let device_mac = $dvCon.substr(5, 17)
            cy.wrap(device_mac).as("dev_connection");

        })
    }

    static changeDeviceName(name) {

        this.getField(device_field).clear().type(name);
        this.getAction("Apply");

    }

    static fill_device(msg) {

        switch (msg) {

            case "duplicateDevice":
                cy.get("@dev_connection").then((conDevice) => {
                    this.getField(device_field).clear().type(conDevice);
                });
                break;

            case "newDevice":
                this.generateMacAddress()
                cy.get("@newMacAddress").then((mac) => {
                    this.getField(device_field).clear().type(mac);
                });

                break;

        }
    }


    static generateMacAddress() {

        let newMac = "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
            return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
        })

        return cy.wrap(newMac).as("newMacAddress")
    }


    static invokeTooltip() {
        cy.get(".device-card-actions span ._button")
            .invoke('removeAttr', 'disabled')
    }

    static fillAllDeviceSlots(plan) {
        for (let i = 0; i <= 3; i++) {

            this.addDevice()

        }
    }

    static exceedDeviceChange() {

        this.removeDevice()
        this.pause(2000)
        for (let i = 1; i <= 3; i++) {

            this.changeDevice()

        }
    }

    static addDevice() {

        this.getAction("Add a device");
        this.getAction("Next");
        this.getAction("Next");
        this.pause(2000)
        this.fill_device("newDevice");
        this.getAction("Add device");
        this.pause(2000)

    }

    static changeDevice() {

        this.addDevice()
        this.removeDevice()
        this.pause(2000)
    }


    static removeDevice() {
        this.getAction("Remove");
        this.selectAction("Remove");
    }

}