
const calculateExpression = async (expression) => {
    try {
        const response = await fetch(`/api/calculate?expression=${encodeURIComponent(expression)}`);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('Error calculating expression:', error);
        throw error;
    }
};

export default calculateExpression;
