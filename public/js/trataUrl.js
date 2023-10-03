let link = document.querySelectorAll('.btns a')


link.forEach(el => {
    const languageName = el.name;       
    const nomeCodificado = encodeURIComponent(languageName);
    el.setAttribute('href', `/detalhes?prod=${nomeCodificado}`);    
});
