let input = document.querySelector('.get-repos input');
let button = document.querySelector('.get-button');
let data = document.querySelector('.show-data');

button.addEventListener('click' , getRepos)

function getRepos(){
    if(input.value == ""){
        data.innerHTML = '<psan>Please Write GitHub Username.</span>'
    }else{
        fetch(`https://api.github.com/users/${input.value}/repos`)

        .then(repois => repois.json())

        .then(Alldata => {

            data.innerHTML = ''

            Alldata.forEach(element => {

                let mainDiv = document.createElement('div');
                mainDiv.textContent = element.name;

                let theUrl = document.createElement('a');
                theUrl.textContent = "Visit";

                theUrl.href = `https://github.com/${input.value}/${element.name}`;
                theUrl.target = '_blank';

                mainDiv.appendChild(theUrl);

                let stars = document.createElement('span');
                stars.textContent = `Stars ${element.stargazers_count} ⭐`;

                mainDiv.appendChild(stars);
                
                mainDiv.className = 'repo-box';

                data.appendChild(mainDiv);
            });
        })
    }
}