
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB em bytes
const useInput = (onChange) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      if (file.size > MAX_FILE_SIZE) {
        alert('O tamanho do arquivo excede 2MB. Por favor, escolha uma imagem menor.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        onChange(base64String, e.target.name);
      };

      reader.readAsDataURL(file);
    } else {
      onChange( e.target.value, e.target.name);
    }
  };


  return {
    handleChange
  }
}

export default useInput;
