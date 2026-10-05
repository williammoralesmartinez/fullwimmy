const form=document.getElementById('authForm');
form?.addEventListener('submit', async e=>{
 e.preventDefault(); const isRegister=form.dataset.mode==='register';
 const body=isRegister?{name:name.value,email:email.value,password:password.value}:{email:email.value,password:password.value};
 try{const r=await fetch(API+(isRegister?'/auth/register':'/auth/login'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const d=await r.json();
 if(!r.ok) throw new Error(d.message||'No fue posible completar la solicitud');
 if(d.token) localStorage.setItem('vimmy_token',d.token); if(d.user) localStorage.setItem('vimmy_user',JSON.stringify(d.user));
 message.innerHTML='<div class="alert alert-success">'+(d.message||'Operación exitosa')+'</div>'; setTimeout(()=>location.href='admin.html',500);
 }catch(err){message.innerHTML='<div class="alert alert-danger">'+err.message+'</div>'}
});
