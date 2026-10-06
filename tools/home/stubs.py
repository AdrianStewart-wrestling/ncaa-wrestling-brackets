APP = "export function initializeApp(){return {}}; export function getApp(){return {}};"
FS = """const noop=()=>{}; const snap={exists:()=>false,data:()=>({}),docs:[],forEach:noop,empty:true,size:0};
export function getFirestore(){return {}}; export function doc(){return {}}; export function collection(){return {}};
export async function setDoc(){}; export async function getDoc(){return snap}; export async function deleteDoc(){};
export async function getDocs(){return snap}; export function query(){return {}}; export function where(){return {}}; export function orderBy(){return {}};
export function writeBatch(){return {set:noop,update:noop,delete:noop,commit:async()=>{}}}; export function serverTimestamp(){return null};
export function onSnapshot(q,cb){try{cb&&cb(snap)}catch(e){}; return noop}; export async function runTransaction(db,fn){return fn({get:async()=>snap,set:noop,update:noop})};"""
AUTH = """export function getAuth(){return {currentUser:null}}; export function onAuthStateChanged(a,cb){setTimeout(()=>cb&&cb(null),0);return ()=>{}};
export class GoogleAuthProvider{}; export async function signInWithPopup(){throw new Error('stub')}; export async function signOut(){};"""
