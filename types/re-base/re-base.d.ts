// Type definitions for re-base v1.0.2
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Remo H. Jansen <https://github.com/remojansen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    context: object // The context of your component
    state: string // The state property you want to sync with Firebase
    asArray?: boolean //  Returns the Firebase data at the specified endpoint as an Array instead of an Object - asString: boolean //  Sets state as empty string instead of empty Object or Array if there is no Firebase data
    isNullable?: boolean //  Sets state as null instead of empty Object or Array if there is no Firebase data
    keepKeys?: boolean //  will keep any firebase generated keys intact when manipulating data using the asArray option.
    queries?: object //  Queries to be used with your read operations. See Query Options for more details.
    then?: () => void //  The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with syncState) to change this.state.loading to false.
    onFailure?: () => void //  A callback function that will be invoked if the current user does not have read or write permissions at the location.
}
interface BindToStateOptions {
    context: object // The context of your component
    state: string // The state property you want to sync with Firebase
    asArray?: boolean //  Returns the Firebase data at the specified endpoint as an Array instead of an Object - asString: boolean //  Sets state as empty string instead of empty Object or Array if there is no Firebase data
    queries?: object //  Queries to be used with your read operations. See Query Options for more details.
    then?: () => void //  The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with syncState) to change this.state.loading to false.
    onFailure?: () => void //  A callback function that will be invoked if the current user does not have read or write permissions at the location.
}

interface ListenToOptions {
    context: object // The context of your component
    asArray?: boolean //  Returns the Firebase data at the specified endpoint as an Array instead of an Object - asString: boolean //  Sets state as empty string instead of empty Object or Array if there is no Firebase data
    then: (result : any) => void //  The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with syncState) to change this.state.loading to false.
    onFailure?: (error : any) => void //  A callback function that will be invoked if the current user does not have read or write permissions at the location.
    queries?: object //  Queries to be used with your read operations. See Query Options for more details.
}

interface FetchOptions {
    context: object // The context of your component
    asArray?: boolean //  Returns the Firebase data at the specified endpoint as an Array instead of an Object - asString: boolean //  Sets state as empty string instead of empty Object or Array if there is no Firebase data
    then?: (result : any) => void //  The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with syncState) to change this.state.loading to false.
    onFailure?: () => void //  A callback function that will be invoked if the current user does not have read or write permissions at the location.
    queries?: object //  Queries to be used with your read operations. See Query Options for more details.
}

interface RebaseBinding {}

interface Rebase {
    /**
     * Deletes the instance of re-base returned from Rebase.createClass, removing all the listeners that were added by the instance, and the underlying firebase app that was created. Note: You cannot re-initialize an app of the same name after it has been deleted.
     */
    delete(callback?: () => void): void

    /**
     * Allows you to set up two way data binding between your component's state and your Firebase. Whenever your Firebase changes, your component's state will change. Whenever your component's state changes, Firebase will change.
     */
    syncState(endpoint: string, options : SyncStateOptions) : RebaseBinding

    /**
     * One way data binding from Firebase to your component's state. Allows you to bind a component's state property to a Firebase endpoint so whenever that    Firebase endpoint changes, your component's state will be updated with that change.
     */
    bindToState(endpoint: string, options : BindToStateOptions) : RebaseBinding

    /**
     * Allows you to listen to Firebase endpoints without binding those changes to a state property. Instead, a callback will be invoked with the newly updated data.
     */
    listenTo(endpoint: string, options : ListenToOptions) : RebaseBinding

    /**
     * Allows you to retrieve the data from a Firebase endpoint just once without subscribing or listening for data changes.
    */
    fetch(endpoint: string, options : FetchOptions) : Promise<void>

    //TODO: Method implementation
    post()
    //TODO: Method implementation
    push()
    //TODO: Method implementation
    update()
    //TODO: Method implementation
    remove()

    /**
     * Remove the listeners to Firebase when your component unmounts.
     */
    removeBinding(ref : RebaseBinding): void

    //TODO: Method implementation
    reset()


}

declare module 're-base' {
    /**
     * Accepts a firebase configuration object as the first argument and an optional 'name' for the app as the second
     */
    export function createClass(configuration: FirebaseConfiguration, types?: string): Rebase
}