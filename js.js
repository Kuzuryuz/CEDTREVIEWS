const showcourse11 = document.getElementById('y1s1');
showcourse11.addEventListener('click', () => {
    const courses = document.getElementById('course11');
    if (courses.style.display === 'none') courses.style.display = 'block';
    else courses.style.display = 'none'; 
})
const comment1 = document.getElementById('ComProg');
comment1.addEventListener('click', () => {
    const textArea1 = document.getElementById('104text');
    if (textArea1.style.display === 'none') textArea1.style.display = 'block';
    else textArea1.style.display = 'none'; 
})
const comment2 = document.getElementById('f2cedt');
comment2.addEventListener('click', () => {
    const textArea2 = document.getElementById('222text');
    if (textArea2.style.display === 'none') textArea2.style.display = 'block';
    else textArea2.style.display = 'none'; 
})
const comment3 = document.getElementById('dcl');
comment3.addEventListener('click', () => {
    const textArea3 = document.getElementById('252text');
    if (textArea3.style.display === 'none') textArea3.style.display = 'block';
    else textArea3.style.display = 'none'; 
})
const comment4 = document.getElementById('algo');
comment4.addEventListener('click', () => {
    const textArea4 = document.getElementById('328text');
    if (textArea4.style.display === 'none') textArea4.style.display = 'block';
    else textArea4.style.display = 'none'; 
})
const comment5 = document.getElementById('discrete');
comment5.addEventListener('click', () => {
    const textArea5 = document.getElementById('204text');
    if (textArea5.style.display === 'none') textArea5.style.display = 'block';
    else textArea5.style.display = 'none'; 
})
const submitbutton104 = document.getElementById('submitbutton1');
submitbutton104.addEventListener('click', function(){
    const submit104 = document.getElementById('104comment');
    const newment1 = document.createElement('p');
    newment1.textContent = document.getElementById('textarea104').value;
    submit104.prepend(newment1);

    const newline1 = document.createElement('hr')
    submit104.prepend(newline1);

    document.getElementById("textarea104").value = '';
})
