export default function SiteImage({src,alt,className='',priority=false}){
  return <div className={`image-slot ${className}`.trim()}>
    <img className="site-image" src={src} alt={alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} />
  </div>;
}
