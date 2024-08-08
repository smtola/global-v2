const jwt = require('jsonwebtoken');

// Example secret key (replace with your actual secret or public key)

function verifyToken(token) {
  try {
    // Verify the token
    const decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsImtpZCI6IkNMR25kVHM1aWNQWHROWmYiLCJ0eXAiOiJKV1QifQ', 'pcIsol1FeYUahEnA+ayrI0ydWCtY+fkcX5UAp3Bu669EXemEYgycnatOErIeWL6+tv1WIa/Fyq2YVcQ2FFx5vw==');
    console.log('Decoded JWT:', decoded);
    return { success: true, decoded };
  } catch (error) {
    console.error('Invalid token:', error.message);
    return { success: false, error: error.message };
  }
}

// Example usage
const token = localStorage.getItem('jwt'); // Replace with the actual token
const result = verifyToken(token);

if (result.success) {
  console.log('Token is valid:', result.decoded);
} else {
  console.log('Token verification failed:', result.error);
}
