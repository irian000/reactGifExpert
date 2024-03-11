

export const GifItem = ({title,url,id}) => {

  //vista de las imagenes con los datos
  //

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
