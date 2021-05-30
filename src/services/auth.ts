interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '10931u90jljaçflksdjfçaljf9109013çadlfjk',
        user: {
          name: 'Igor',
          email: 'igor.rapozo@hotmail.com',
        },
      });
    }, 2000);
  });
}
