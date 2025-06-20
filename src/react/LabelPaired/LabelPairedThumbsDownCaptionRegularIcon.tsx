import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 13.602a.587.587 0 0 0 .703.398.587.587 0 0 0 .399-.703l-.118-.375a4.3 4.3 0 0 0-.586-1.336.36.36 0 0 1 0-.375c.07-.14.188-.211.329-.211H10.5c.398 0 .75-.328.75-.75a.77.77 0 0 0-.352-.633c-.164-.094-.234-.328-.14-.492a.7.7 0 0 0 .117-.375.72.72 0 0 0-.422-.656.36.36 0 0 1-.187-.258.36.36 0 0 1 .07-.305c.094-.14.164-.281.164-.468a.76.76 0 0 0-.516-.704c-.187-.07-.304-.257-.257-.445 0-.047.023-.094.023-.164A.77.77 0 0 0 9 5H6.89c-.374 0-.726.117-1.03.328l-.915.61c-.21.14-.375.304-.515.515a.36.36 0 0 1-.516.117.36.36 0 0 1-.117-.515c.187-.305.445-.563.726-.75l.915-.61A2.65 2.65 0 0 1 6.89 4.25H9c.82 0 1.5.68 1.5 1.5v.023c.445.258.75.75.75 1.29 0 .21-.047.421-.117.585.281.282.492.68.492 1.102 0 .164-.023.305-.07.445.258.282.445.657.445 1.055 0 .844-.68 1.5-1.5 1.5H8.11c.14.328.257.633.35.96l.118.4c.188.703-.234 1.406-.937 1.617-.703.187-1.407-.235-1.618-.938l-.093-.375a3.2 3.2 0 0 0-1.36-1.851l-.07-.047.188-.305-.188.305a2.7 2.7 0 0 1-.703-.657.4.4 0 0 1 .094-.539.375.375 0 0 1 .515.094c.14.188.305.352.492.469l.07.047a3.93 3.93 0 0 1 1.688 2.273zm-6-1.852h1.5V6.5H.75zm-.75 0V6.5c0-.398.328-.75.75-.75h1.5c.398 0 .75.352.75.75v5.25c0 .422-.352.75-.75.75H.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='5b4d0a210a4ba43af60de7e1c1d1f1c2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownCaptionRegularIcon);
export default ForwardRef;
