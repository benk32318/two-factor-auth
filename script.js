// Function to generate a random verification code
function generateRandomCode() {
    const code = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit code
    document.getElementById('random-code').innerText = `Your random code is: ${code}`;
}

// Dummy OTP for 2FA (in real use, this should come from a server or a secure source)
const generatedOtp = "123456";

// Function to verify the OTP
function verifyOtp() {
    const userOtp = document.getElementById('otp-input').value;

    if (userOtp === generatedOtp) {
        document.getElementById('result').innerText = "OTP verified successfully!";
        document.getElementById('result').style.color = "green";
    } else {
        document.getElementById('result').innerText = "Invalid OTP. Please try again.";
        document.getElementById('result').style.color = "red";
    }
}
