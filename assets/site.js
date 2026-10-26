document.querySelector('.menu-btn')?.addEventListener('click',function(){var t=document.querySelector('.top');var o=t.classList.toggle('open');this.setAttribute('aria-expanded',o);this.textContent=o?'Close':'Menu'});
document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
