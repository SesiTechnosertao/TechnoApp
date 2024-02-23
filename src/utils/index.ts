
export async function loadSound(sound: any) {
    console.log('Loading Sound');
    try {
        const { sound: soundObject, status } = await sound.createAsync(
            require('./assets/audios/1214.MP3'), {
            shouldPlay: true
        })
        return { soundObject, status }
    } catch (error) {
        console.log(error)
    }
}

export async function playSound(sound: any) {
    try {
        return await sound.playAsync()
    } catch (error) {
        console.log(error)
    }
}

export async function pauseSound(sound: any) {
    console.log('pause Sound');
    try {
        return await sound.setStatusAsync({ shouldPlay: false })
    } catch (error) {
        console.log(error)
    }
}