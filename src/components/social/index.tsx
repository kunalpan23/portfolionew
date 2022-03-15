import socialLinks from '../../data/socialLinks.json';

export default function Social() {
  return (
    <div className="flex">
        {
            socialLinks.map(item => {
               return <Links item={item} key={JSON.stringify(item)}/>
            })
        }
    </div>
  )
}

function Links({item}:any){
    return (
        <div className="custonLinks flex items-center">
            <a className="link-holder flex mr-5 items-center " href={item.href} target={item.target}>
                <span className=" mr-1" dangerouslySetInnerHTML={{__html: item.svg}}></span>
                <span className="label-holder"> {item.label} </span>
            </a>
        </div>
    )
}
