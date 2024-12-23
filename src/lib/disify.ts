
interface EmailValidation {
  disposable: boolean;
  domain: string;
  format: boolean;
  dns?: boolean;
  whitelist?: boolean;
}

export async function validateEmail(email: string): Promise<EmailValidation> {
  return fetch(`https://www.disify.com/api/email/${email}`)
    .then(response => response.json())
    .catch(error => {
      console.error("Request failed:", error.message)
    });
}
