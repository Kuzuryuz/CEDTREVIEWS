const showReviews1 = document.getElementById('2110104');
showReviews1.addEventListener('click', () => {
    const review = document.getElementById('reviews1');
    if (review.style.display === 'none') review.style.display = 'block';
    else review.style.display = 'none'; 
})

const showReviews2 = document.getElementById('2110222');
showReviews2.addEventListener('click', () => {
    const review = document.getElementById('reviews2');
    if (review.style.display === 'none') review.style.display = 'block';
    else review.style.display = 'none'; 
})

const comment = document.getElementById('comment');
comment.addEventListener('click', () => {
    const textArea = document.getElementById('text');
    if (textArea.style.display === 'none') textArea.style.display = 'block';
    else textArea.style.display = 'none'; 
})

const comment2 = document.getElementById('comment2');
comment2.addEventListener('click', () => {
    const textArea2 = document.getElementById('text2');
    if (textArea2.style.display === 'none') textArea2.style.display = 'block';
    else textArea2.style.display = 'none'; 
})

const submit = document.getElementById('reviews1in');
const submitbutton = document.getElementById('submitbutton');

function addtext(){
    const newment = document.createElement('p');
    newment.textContent = document.getElementById("textarea").value;

    submit.prepend(newment);
}

submitbutton.addEventListener('click', addtext);