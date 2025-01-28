import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 5c0-.82.656-1.5 1.5-1.5h5.25c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-5.25a1.48 1.48 0 0 1-1.5-1.5zm3 9c0 .21.164.375.375.375h1.5A.385.385 0 0 0 5.625 14a.4.4 0 0 0-.375-.375h-1.5a.385.385 0 0 0-.375.375m3.75-9h-5.25v7.5h5.25z' />
    </g>
    <defs>
      <clipPath id='f2b58af9eb2f2c018f2292d727f322e3__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonCaptionFillIcon);
export default ForwardRef;
