while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() < 8) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
