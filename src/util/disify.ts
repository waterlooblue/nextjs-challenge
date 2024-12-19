interface EmailValidation {
  disposable: boolean;
  domain: string;
  format: boolean;
  dns?: boolean;
  whitelist?: true;
}

export async function validateEmail(email: string): Promise<EmailValidation> {
  return fetch(`https://www.disify.com/api/email/${email}`)
    .then(response => response.json());
}
