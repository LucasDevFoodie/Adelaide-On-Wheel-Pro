//Refactor: Since they are coupled to Image component, that component could receive a prop 
//with these options.
export const Images = {
    hero: new URL('./images/logo-white.png', import.meta.url).href,
    escuela_1: new URL('./images/foto_escuela_1.png', import.meta.url).href,
    escuela_2: new URL('./images/foto_escuela_2.png', import.meta.url).href,
    escuela_3: new URL('./images/foto_escuela_3.png', import.meta.url).href,
    cityrun_1: new URL('./images/cityrun_skates_1.jpg', import.meta.url).href,
    cityrun_2: new URL('./images/cityrun_skates_2.jpg', import.meta.url).href,
    cityrun_3: new URL('./images/cityrun_skates_3.jpg', import.meta.url).href,
    facebook: new URL('./images/facebook.png', import.meta.url).href,
    instagram: new URL('./images/instagram.png', import.meta.url).href,
}