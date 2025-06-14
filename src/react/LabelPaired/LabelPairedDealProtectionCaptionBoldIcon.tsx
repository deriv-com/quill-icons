import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.922 6.36h2.367a3 3 0 0 1 1.125.21c.352.117.633.328.867.586q.352.387.563.985c.14.398.187.843.187 1.359 0 .54-.047.984-.187 1.383q-.21.597-.563.984a2.3 2.3 0 0 1-.867.586c-.328.14-.726.211-1.125.211H1.922zm2.367 5.085c.399 0 .727-.117.961-.351.234-.235.352-.586.352-1.102v-.96c0-.516-.118-.868-.352-1.102s-.562-.352-.96-.352H3.28v3.867zm3.89 1.196V6.359h2.977c.305 0 .563.07.797.164s.422.235.586.399c.164.187.305.398.399.656.07.234.117.516.117.797 0 .305-.024.586-.117.82a1.7 1.7 0 0 1-.399.633 2.2 2.2 0 0 1-.586.422c-.234.094-.492.14-.797.14H9.562v2.25zm1.383-3.446h1.43c.211 0 .375-.047.492-.164.118-.094.164-.258.164-.469v-.374c0-.211-.046-.376-.164-.47-.117-.116-.28-.163-.492-.163h-1.43z' />
    </g>
    <defs>
      <clipPath id='2005b62aa7e5b600c309b46f8efed98e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionCaptionBoldIcon);
export default ForwardRef;
