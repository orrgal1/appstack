export async function postToUnary<T>(
    serviceName: string,
    methodName: string,
    data: any,
): Promise<T> {
    const response = await fetch('http://localhost:3000/gateway/unary', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
            service: serviceName,
            method: methodName,
            data,
        })
    });
    return await response.json();
}
