  // // save this image in local storgae
  // useEffect(() => {
  //   console.log('feedBackForm', imgRef.current);
  //   const canvas = document.createElement('canvas');

  //   if (!localStorage.getItem(`${feed.name}`) && imgRef.current) {
  //     canvas.height = imgRef.current?.naturalHeight;
  //     canvas.width = imgRef.current?.naturalWidth;
  //     const ctx = canvas.getContext('2d');
  //     ctx?.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
  //     const base64String = canvas.toDataURL();
  //     localStorage.setItem(`${feed.name}`, base64String);
  //   }
  //   return () => {
  //     canvas.remove();
  //   };
  // }, []);