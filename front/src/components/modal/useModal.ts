
const useModal = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent', // torna o conteúdo do modal transparente
      border: 'none', // remove a borda do modal
      boxShadow: 'none', // remove a sombra do modal
      overflow: 'visible', // garante que o conteúdo do modal seja visível
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // cor de fundo preto com opacidade
    },
  };

  return {
    customStyles,
  }
}

export default useModal;
