// Type definitions for re-base v1.0.2
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Remo H. Jansen <https://github.com/remojansen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
///<reference types="firebase" />
interface FirebaseConfiguration {
    /**
     * Your firebase API key
     */
    apiKey: string

    /**
     * Your firebase auth domain
     */
    authDomain: string

    /**
     * Your firebase database root URL
     */
    databaseURL: string

    /**
     * Your firebase storage bucket
     */
    storageBucket?: string

    /**
     * Your firebase messaging sender id
     */
    messagingSenderId?: string
}
interface SyncStateOptions {
    context: object
    state: string
    asArray?: boolean
    isNullable?: boolean
    keepKeys?: boolean
    queries?: object
    then?: () => void
    onFailure?: () => void
}
interface BindToStateOptions {
    context: object
    state: string
    asArray?: boolean
    queries?: object
    then?: () => void
    onFailure?: () => void
}

interface ListenToOptions {
    context: object
    asArray?: boolean
    then: (result : any) => void
    onFailure?: (error : any) => void
    queries?: object
}

interface FetchOptions {
    context: object
    asArray?: boolean
    then?: (result : any) => void
    onFailure?: () => void
    queries?: object
}

interface PostOptions {
    data: any
    then?: (result : any) => void
}
interface PushOptions {
    data: any
    then?: (result : any) => void
}

interface UpdateOptions {
    data: any
    then?: (result : any) => void
}

interface RebaseBinding {}

interface RebaseCredentials{
    email: string,
    password: string
}

interface Rebase {

    delete(callback?: () => void): void

    syncState(endpoint: string, options : SyncStateOptions) : RebaseBinding

    bindToState(endpoint: string, options : BindToStateOptions) : RebaseBinding

    listenTo(endpoint: string, options : ListenToOptions) : RebaseBinding

    fetch(endpoint: string, options : FetchOptions) : firebase.Promise<any>

    post(endpoint: string, options: PostOptions) : firebase.Promise<any>

    push(endpoint: string, options: PushOptions) : firebase.database.ThenableReference

    update(endpoint: string, options: UpdateOptions) : firebase.Promise<any>

    remove(endpoint: string, callback?: (result) => void) : firebase.Promise<any>

    removeBinding(ref : RebaseBinding): void

    reset(): void

    authWithPassword(auth : RebaseCredentials, authHandler: (error : object | null, user: object) => void): void


}
declare module 're-base' {
    /**
     * Accepts a firebase configuration object as the first argument and an optional 'name' for the app as the second
     */
    export function createClass(configuration: FirebaseConfiguration, types?: string): Rebase
}