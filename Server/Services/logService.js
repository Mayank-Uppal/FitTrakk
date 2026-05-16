export const userLog=async({data})=>{
    try {
        return;
    } catch (error) {
        throw new Error(`Failed to send OTP to ${email} ${error.message}`);
    }
}