export class IDGenerator {

    static generate(licenseNumber: string): string
    {
        return `${licenseNumber} - ${Date.now}`;
    }
}