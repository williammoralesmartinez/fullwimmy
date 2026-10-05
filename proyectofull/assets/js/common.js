const API = window.VIMMY_API_URL;
const money = v => new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(v);
function setApiUrl(url){ localStorage.setItem('vimmy_api_url', url.replace(/\/$/,'')); location.reload(); }
function token(){ return localStorage.getItem('vimmy_token'); }
function authHeaders(){ return {'Content-Type':'application/json','Authorization':`Bearer ${token()}`}; }
function logout(){ localStorage.removeItem('vimmy_token'); localStorage.removeItem('vimmy_user'); location.href='index.html'; }
