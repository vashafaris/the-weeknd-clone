import { FooterLinks, SocialMedias } from './footer.constant';

const Footer = () => {
  return (
    <footer className='relative px-16 py-8 flex flex-col justify-around items-center h-56'>
      <div className='flex'>
        {SocialMedias.map((socialMedia) => {
          return (
            <a className='px-4' key={socialMedia}>
              <img
                className='h-4 cursor-pointer'
                src={`svg/${socialMedia}.svg`}
                alt=''
              />
            </a>
          );
        })}
      </div>

      <div>
        <nav className='flex'>
          {FooterLinks.map((footerLink) => {
            return (
              <a className='text-xs px-4 font-light' key={footerLink}>
                {footerLink}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
