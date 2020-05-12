export const isWeixin = function (){
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i) == 'micromessenger'
}