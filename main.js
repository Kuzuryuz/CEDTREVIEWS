const textarea = document.querySelectorAll('.textarea');
textarea.forEach((text) => {
    text.addEventListener('keyup', e => {
        text.style.height = 'auto';
        let height = e.target.scrollHeight-20;
        text.style.height = `${height}px`;
    });
});

function showReviews1() {
    const review = document.getElementById('2110104-review');
    if (review.style.display === 'block') {
        review.style.display = 'none';
    } else review.style.display = 'block';

    const title = document.getElementById('2110104-title');
    if (title.style.borderRadius === '20px') {
        title.style.borderRadius = '20px 20px 0px 0px';
    } else title.style.borderRadius = '20px';

    document.getElementById('2110104-textarea').style.display = 'none';
    document.getElementById('2110104-review-button').style.display = 'block';
    document.getElementById('2110104-text-error').style.display = 'none';
}

function showReviews2() {
    const review = document.getElementById('2110222-review');
    if (review.style.display === 'block') {
        review.style.display = 'none';
    } else review.style.display = 'block';

    const title = document.getElementById('2110222-title');
    if (title.style.borderRadius === '20px') {
        title.style.borderRadius = '20px 20px 0px 0px';
    } else title.style.borderRadius = '20px';

    document.getElementById('2110222-textarea').style.display = 'none';
    document.getElementById('2110222-review-button').style.display = 'block';
    document.getElementById('2110222-text-error').style.display = 'none';
}

function showReviews3() {
    const review = document.getElementById('2110252-review');
    if (review.style.display === 'block') {
        review.style.display = 'none';
    } else review.style.display = 'block';

    const title = document.getElementById('2110252-title');
    if (title.style.borderRadius === '20px') {
        title.style.borderRadius = '20px 20px 0px 0px';
    } else title.style.borderRadius = '20px';

    document.getElementById('2110252-textarea').style.display = 'none';
    document.getElementById('2110252-review-button').style.display = 'block';
    document.getElementById('2110252-text-error').style.display = 'none';
}

function showTextArea1() {
    document.getElementById('2110104-textarea').style.display = 'block';
    document.getElementById('2110104-review-button').style.display = 'none';
}

function showTextArea2() {
    document.getElementById('2110222-textarea').style.display = 'block';
    document.getElementById('2110222-review-button').style.display = 'none';
}

function addReviewsContent(items, divMain) {
    const div = document.createElement('div');
    div.className = 'reviews-content';
    const p1 = document.createElement('p');
    p1.className = 'reviews-head';
    p1.innerText = items.name;
    const p2 = document.createElement('p');
    p2.className = 'reviews-body';
    p2.innerText = items.text;
    div.appendChild(p1);
    div.appendChild(p2);
    divMain.appendChild(div);
}

function fetchAndRefresh() {
    fetch('/items')
        .then(res => res.json())
        .then(data => {
            const divMain1 = document.getElementById('2110104-reviews-content');
            const divMain2 = document.getElementById('2110222-reviews-content');
            divMain1.innerHTML = ``;
            divMain2.innerHTML = ``;
            const item104 = data.item104;
            const item222 = data.item222;
            item104.forEach((e) => {
                addReviewsContent(e, divMain1);
            });
            item222.forEach((e) => {
                addReviewsContent(e, divMain2);
            });
        });
}

fetchAndRefresh()

const submitButton1 = document.getElementById('2110104-submit-button');
submitButton1.addEventListener('click', async () => {
    const nameinput = document.getElementById('2110104-head');
    const text = document.getElementById('2110104-body');
    const textError = document.getElementById('2110104-text-error');

    if (text.value !== "") {
        let name;
        if (nameinput.value === "") name = "Anonymous";
        else name = nameinput.value;

        await fetch('/items', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${name}`,
                text: `${text.value}`,
                subject: "2110104"
            })
        });

        nameinput.value = "";
        text.value = "";
        document.getElementById('2110104-textarea').style.display = 'none';
        document.getElementById('2110104-review-button').style.display = 'block';
        textError.style.display = 'none';

        fetchAndRefresh();
    }
    else {
        textError.style.display = 'block';
    }
});

const submitButton2 = document.getElementById('2110222-submit-button');
submitButton2.addEventListener('click', async () => {
    const nameinput = document.getElementById('2110222-head');
    const text = document.getElementById('2110222-body');
    const textError = document.getElementById('2110222-text-error');

    if (text.value !== "") {
        let name;
        if (nameinput.value === "") name = "Anonymous";
        else name = nameinput.value;

        await fetch('/items', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${name}`,
                text: `${text.value}`,
                subject: "2110222"
            })
        });

        nameinput.value = "";
        text.value = "";
        document.getElementById('2110222-textarea').style.display = 'none';
        document.getElementById('2110222-review-button').style.display = 'block';

        fetchAndRefresh();
    }
    else {
        textError.style.display = 'block';
    }
});