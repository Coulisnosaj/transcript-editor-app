export default file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onabort = () => reject();
    reader.onerror = error => reject(error);

    reader.readAsText(file);
  });
