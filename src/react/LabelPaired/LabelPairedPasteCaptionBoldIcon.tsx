import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteCaptionBoldIcon = (
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
      <path d='M2.438 4.625A1.32 1.32 0 0 1 3.75 3.5c.656 0 1.195.492 1.29 1.125H6c.68 0 1.266.492 1.453 1.125H6c-.68 0-1.266.305-1.687.75H2.625a.74.74 0 0 1-.75-.75H1.5a.385.385 0 0 0-.375.375V12.5c0 .21.164.375.375.375h2.25V14H1.5A1.48 1.48 0 0 1 0 12.5V6.125c0-.82.656-1.5 1.5-1.5zm.937.188c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375m7.125 9.562a.385.385 0 0 0 .375-.375V9.219L9.281 7.625H6A.385.385 0 0 0 5.625 8v6c0 .21.164.375.375.375zM6 15.5A1.48 1.48 0 0 1 4.5 14V8c0-.82.656-1.5 1.5-1.5h3.281c.281 0 .586.14.797.352l1.57 1.57c.211.21.352.515.352.797V14c0 .844-.68 1.5-1.5 1.5z' />
    </g>
    <defs>
      <clipPath id='c49717479c8ac2a424d5669497ac8c00__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteCaptionBoldIcon);
export default ForwardRef;
