function getEnvVariable(variableName) {
    const prefixedVariableName = `REACT_APP_${variableName}`;

    const value = process.env[prefixedVariableName];

    if (value === undefined) {
        throw new Error(
            `Environment variable ${prefixedVariableName} is not defined.`
        );
    }

    return value;
}

export default getEnvVariable;

