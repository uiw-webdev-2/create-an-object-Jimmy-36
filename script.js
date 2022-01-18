const cellphone = {
    name: "Everyday phone",
    battery: "small battery",
    batteryLife: 12,
    model: "iphone 5s",
    dimensions: {
        length: 2.5,
        width: 5.5,
    },
    newdimensions: function (newLength, newWidth) {
        this.dimensions.length = newLength;
        this.dimensions.width = newWidth;
    },
};