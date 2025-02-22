// export type DocumentProps = {
//   id : string
//   text : string
//   title : string
//   uid : string
//   createdTime : {
//     seconds : number
//     nanoseconds : number
//   }
// }

// export type fetchUpdateCommunityProp<T> = {
//   tranaction:string,
//   docId:string,
//   updateKey:string,
//   updateValue:T
// }

// export type Column = {
//   title : string,
//   text : string,
//   createdTime : CreatedTime
// }

// export type UserUpdate = {
//   nickName: string,
//   intro: string
// }

// export type PrivateData = {
//   id : string
//   uid : string,
//   email : string,
//   nickName : string[],
//   introduce : string[],
//   column: Column[],
//   stacks: string[]
// }

// export type ProjectItem = {
//   createdTime : CreatedTime,
//   likes : string[],
//   stacks : string[],
//   text : string,
//   timeline: string[],
//   title : string,
//   uid : string,
//   view : number[],
//   id:string
// }

export const nullWidth = window.innerWidth;

export const defaultThumbNail = 'https://firebasestorage.googleapis.com/v0/b/repic---communityproject.appspot.com/o/images%2FuserThumbs%2Fdefault.jpg?alt=media&token=ba99744a-7928-4918-ae05-37a4782cc509';
export const defaultIntroduce = '';
export const defaultStacks = [] as string[];
export const defaultComments = [] as string[];
export const defaultLikes = [] as string[];
export const defaultView = [] as string[];

export const nullUserData = {
  id: '',
  uid: '',
  email: '',
  nickName: [''],
  introduce: [''],
  stacks: [''],
  thumbnailURL: '',
};

export const frontEndStacks = ['react', 'vue', 'angler', 'javascript', 'typescript', 'svelte', 'next'];
export const backEndStacks = ['diango', 'docker', 'express', 'java', 'mongodb', 'mysql', 'nest', 'nodejs', 'postgresql', 'spring'];
export const globalStacks = ['github', 'aws'];
export const allStacks = ['react', 'vue', 'angler', 'javascript', 'typescript', 'svelte', 'next', 'diango', 'docker', 'express', 'java', 'mongodb', 'mysql', 'nest', 'nodejs', 'postgresql', 'spring', 'github', 'aws'];

export type UserData = {
  id : string
  uid : string,
  email : string,
  nickName : string,
  introduce : string,
  stacks: string[],
  thumbnailURL: '',
  Initial : boolean
}

export type CreatedTime = {
  seconds : number,
  nanoseconds : number
}

export const defaultCommnets = {
  uid: '',
  likes: 0,
  text: '',
};

export type Comment = {
  uid : string
  text : string
  likes : string[]
  createdTime : CreatedTime
}

export type CommunityItem = {
  comments : Comment[]
  createdTime : CreatedTime
  id : string
  likes : string[]
  text : string
  title : string
  uid: string
  view : string[]
}

export type Project = {
  comments : Comment[],
  createdTime : CreatedTime,
  startDate : string,
  endDate : string,
  likes : string[],
  proceedingMethod: string,
  recruit : string,
  stacks : string[],
  status : boolean,
  text : string,
  title : string,
  uid : string,
  view : number[],
  id:string
}
