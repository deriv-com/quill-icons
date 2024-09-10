import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 9A3.057 3.057 0 0 0 4.5 12.063a2.97 2.97 0 0 0 2.215-.958l.164-.164A3.1 3.1 0 0 0 7.563 9c0-1.668-1.395-3.062-3.063-3.062A3.075 3.075 0 0 0 1.438 9m3.445 4.375H4.5A4.353 4.353 0 0 1 .125 9 4.37 4.37 0 0 1 4.5 4.625 4.39 4.39 0 0 1 8.875 9a4.32 4.32 0 0 1-1.148 2.953l-3.829 4.703c-.218.274-.628.301-.93.082-.273-.218-.3-.629-.081-.93z' />
    </g>
    <defs>
      <clipPath id='1bbdd3e55a99c8550c96945bbd0ea936__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineSmBoldIcon);
export default ForwardRef;
