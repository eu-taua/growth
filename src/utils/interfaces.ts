export interface Ipostcard {
  name?: string;
  groupName?: string;
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
