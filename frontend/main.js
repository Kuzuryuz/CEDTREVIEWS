document.getElementById('review-button').addEventListener('click', () => {
    document.getElementById('review-page').style.display = 'block';
});

document.getElementById('close-review-button').addEventListener('click', () => {
    document.getElementById('review-page').style.display = 'none';
    document.getElementById('subject-error').style.display = 'none';
    document.getElementById('review-error').style.display = 'none';
    document.getElementById('subject-review-error').style.display = 'none';
    document.getElementById('subject-selector').value = "select-subject";
    document.getElementById('textarea-name').value = "";
    document.getElementById('textarea-review').value = "";
});

function showReviews2110104() {
    const review = document.getElementById('2110104-reviews');
    if (review.style.display === 'block') {
        review.style.display = 'none';
    } else review.style.display = 'block';
}

function showReviews2110222() {
    const review = document.getElementById('2110222-reviews');
    if (review.style.display === 'block') {
        review.style.display = 'none';
    } else review.style.display = 'block';
}

function showReviews2110252() {
    const review = document.getElementById('2110252-reviews');
    if (review.style.display === 'block') {
        review.style.display = 'none';
    } else review.style.display = 'block';
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
            const divMain1 = document.getElementById('2110104-reviews-contents');
            const divMain2 = document.getElementById('2110222-reviews-contents');
            const divMain3 = document.getElementById('2110252-reviews-contents');
            divMain1.innerHTML = ``;
            divMain2.innerHTML = ``;
            divMain3.innerHTML = ``;
            const item104 = data.item104;
            const item222 = data.item222;
            const item252 = data.item252;
            item104.forEach((e) => {
                addReviewsContent(e, divMain1);
            });
            item222.forEach((e) => {
                addReviewsContent(e, divMain2);
            });
            item252.forEach((e) => {
                addReviewsContent(e, divMain3);
            });
        });
}

fetchAndRefresh()

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', async () => {
    const nameinput = document.getElementById('textarea-name');
    const text = document.getElementById('textarea-review');
    const subject = document.getElementById('subject-selector');
    const subjectError = document.getElementById('subject-error');
    const reviewError = document.getElementById('review-error');
    const subjectAndReviewError = document.getElementById('subject-review-error');

    if (text.value !== "" & subject.value !== "select-subject") {
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
                subject: `${subject.value}`
            })
        });

        nameinput.value = "";
        text.value = "";
        subject.value = "select-subject";
        document.getElementById('review-page').style.display = 'none';
        subjectError.style.display = "none";
        reviewError.style.display = "none";
        subjectAndReviewError.style.display = "none";

        fetchAndRefresh();
    } else if (text.value !== "" & subject.value === "select-subject") {
        subjectError.style.display = "block";
        reviewError.style.display = "none";
        subjectAndReviewError.style.display = "none";
    } else if (text.value === "" & subject.value !== "select-subject") {
        subjectError.style.display = "none";
        reviewError.style.display = "block";
        subjectAndReviewError.style.display = "none";
    } else if (text.value === "" & subject.value === "select-subject") {
        subjectError.style.display = "none";
        reviewError.style.display = "none";
        subjectAndReviewError.style.display = "block";
    }
});

function scrollTo2110104() {
    document.getElementById("2110104-title").scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollTo2110222() {
    document.getElementById("2110222-title").scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollTo2110252() {
    document.getElementById("2110252-title").scrollIntoView({ behavior: "smooth", block: "center" });
}