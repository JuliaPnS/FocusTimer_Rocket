export const buttonMusicTree = new Audio('./assets/floresta.wav')
export const buttonMusicRain = new Audio('./assets/chuva.wav')
export const buttonMusicStore = new Audio('./assets/cafeteria.wav')
export const buttonMusicFire = new Audio('./assets/lareira.wav')

buttonMusicTree.loop = true
buttonMusicRain.loop = true
buttonMusicStore.loop = true
buttonMusicFire.loop = true

export default {
    "ph-tree": buttonMusicTree,
    "ph-cloud-rain": buttonMusicRain,
    "ph-storefront": buttonMusicStore,
    "ph-fire": buttonMusicFire,
}
