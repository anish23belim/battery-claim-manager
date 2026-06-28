async function check() {
  try {
    const res = await fetch('http://localhost:3000/claims?page=50');
    const text = await res.text();
    if (res.ok) {
      console.log('Page loaded successfully');
    } else {
      console.log('Error loading page, Status:', res.status);
      console.log('Body:', text.substring(0, 1000));
    }
  } catch (err) {
    console.log('Could not connect to localhost:3000:', err.message);
  }
}
check();
