import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.906 6.125 1.97 13.5H8.5V8.75A.74.74 0 0 1 9.25 8a.76.76 0 0 1 .75.75v4.75h1.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H10v3.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V15H.75c-.281 0-.531-.125-.656-.344a.8.8 0 0 1-.031-.75l4.5-8.5c.218-.343.656-.5 1.03-.312.345.187.5.656.313 1.031' />
    </g>
    <defs>
      <clipPath id='9a4a9486cc571cbb22fe51a5a9e6d161__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourMdBoldIcon);
export default ForwardRef;
