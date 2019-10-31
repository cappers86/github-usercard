/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



const cardLocation = document.querySelector('.cards');

axios.get('https://api.github.com/users/cappers86')
.then(response => {
  console.log(response.data);
  cardLocation.appendChild(createCard(response.data));
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response=>{
    console.log(response.data);
    cardLocation.appendChild(createCard(response.data));
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card"> new card 
  <img src={image url of user} /> img 
  <div class="card-info"> cardinfo
    <h3 class="name">{users name}</h3> name 
    <p class="username">{users user name}</p> username 
    <p>Location: {users location}</p> location
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p> profile link
    <p>Followers: {users followers count}</p> numberoffollowers
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p> bio
  </div>
</div>

*/
// create function 
function createCard(data) {
  const newCard = document.createElement(`div`);
  const newImage = document.createElement(`img`);
  const newCardInfo = document.createElement(`div`);
  const newName = document.createElement(`h3`);
  const newUserName = document.createElement(`p`);
  const newLocation = document.createElement(`p`);
  const newProfile = document.createElement(`p`);
  const newProfileLink = document.createElement(`a`);
  const newFollowers = document.createElement(`p`);
  const newFollowing = document.createElement(`p`)
  const newBio = document.createElement(`p`);
//class names 
  newCard.classList.add(`card`);
  newCardInfo.classList.add(`card-info`);
  newName.classList.add(`name`);
  newUserName.classList.add(`username`);
// content 
  newImage.src =`${data.avatar_url}`;
  newName.textContent = `${data.name}`;
  newUserName.textContent =`${data.login}`;
  newLocation.textContent = `Location: ${data.location}`;
  newProfile.textContent = `Profile: `;
  newProfileLink.textContent = `${data.html_url}`;
  newProfileLink.href = `${data.html_url}`;
  newFollowers.textContent = `${data.followers}`;
  newFollowing.textContent =`${data.following}`
  newBio.textContent =`${data.bio}`;
//elements
newCard.appendChild(newCardInfo);
newCard.appendChild(newImage);
newCardInfo.appendChild(newName);
newCardInfo.appendChild(newUserName);
newCardInfo.appendChild(newLocation);
newCardInfo.appendChild(newProfile);
newCardInfo.appendChild(newProfileLink);
newCardInfo.appendChild(newFollowers);
newCardInfo.appendChild(newFollowing);
newCardInfo.appendChild(newBio);

return newCard;



};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
