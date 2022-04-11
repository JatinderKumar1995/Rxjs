// @Injectable not be needed until this service doesnt have dependency on another service 

export class Logger {
    log(message: string) { console.log(message); }
    error(err: string) { console.error(); }
    warn(warn: string) { console.warn(warn); }
}