import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm7.5 18c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-4.5c-.422 0-.75.375-.75.75M18 9H3v15h15z' />
    </g>
    <defs>
      <clipPath id='d58744c4a6b7d87b492a36888849ed9a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenXlFillIcon);
export default ForwardRef;