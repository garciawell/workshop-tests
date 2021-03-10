
export function validateEmail(email) {
    const regexFullEmail = /^[a-zA-Z0-9._+-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;
    const regexHasLetterFirstGroup = /^(?!\d+@)\S+/;
    const regexPreventSpecialBefore = /\+@|\.@/; // get if .@ or +@
    const minCharactersAfter = /@[a-zA-Z0-9]{2,}/;
    const minCharactersBefore = /[a-zA-Z0-9._+-]{2,}@/;
  
    return (
      regexFullEmail.test(email) &&
      regexHasLetterFirstGroup.test(email) &&
      minCharactersAfter.test(email) &&
      minCharactersBefore.test(email) &&
      !regexPreventSpecialBefore.test(email)
    );
  }