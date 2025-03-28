const btn = document.querySelector('.dropdown-list')
const btn_small=document.querySelector('.home--form-button-list')

for(let el of btn.children){
        el.addEventListener('click',()=>{
            el.querySelector('.dropdown-btn span').innerText = '>'

            const dropdown = el.querySelector('.dropdown-menu');
           if (dropdown.className === 'dropdown-menu'){
               dropdown.classList.add('active')
           }else {
               dropdown.classList.remove('active');
               el.querySelector('.dropdown-btn span').innerText = '<'
           }
           for(let a of dropdown.children ){
               a.addEventListener('click',()=>{
                   el.querySelector('.dropdown-btn p').innerHTML = a.textContent +`<span><</span>`;
               })
           }
        })
}

for(let btn_mini of btn_small.children){
    for(let el of btn_mini.children){
        el.addEventListener('click',()=>{
            el.querySelector('.dropdown-btn span').innerText = '>'

            const dropdown = el.querySelector('.dropdown-menu');
            if (dropdown.className === 'dropdown-menu'){
                dropdown.classList.add('active')
            }else {
                dropdown.classList.remove('active');
                el.querySelector('.dropdown-btn span').innerText = '<'
            }
            for(let a of dropdown.children ){
                a.addEventListener('click',()=>{
                    el.querySelector('.dropdown-btn p').innerHTML = a.textContent +`<span><</span>`;
                })
            }
        })
    }
}
