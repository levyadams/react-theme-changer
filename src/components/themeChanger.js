const colors = [
    {name:'desert',color0:'#264653',color1:'#e9c46a',color2:'#2a9d8f',color3:'black',color4:'black'},
    {name:'icecream',color0:'#bde0fe',color1:'#974e69',color2:'#974e69',color3:'#cdb4db',color4:'#cdb4db'},
    {name:'lightDark',color0:'#f8f9fa',color1:'#343a40',color2:'#092037',color3:'#6c757d',color4:'#e2cdfd'},
    {name:'radical',color0:'#5f0f40',color1:'#fb8b24',color2:'#e36414',color3:'#9a031e',color4:'#0f4c5c'}
];

export default function ThemeChanger ({currentThemeIndex}){
    window.document.body.style = `--color0: ${colors[currentThemeIndex].color0};`
    return null
}