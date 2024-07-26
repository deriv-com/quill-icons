import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusXlRegularIcon = (
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
      <path d='M11.25 9v8.25h8.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-8.25V27c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-8.25H1.5A.74.74 0 0 1 .75 18c0-.375.328-.75.75-.75h8.25V9c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='2526120ae41bb3e81996848df0298466__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlRegularIcon);
export default ForwardRef;
