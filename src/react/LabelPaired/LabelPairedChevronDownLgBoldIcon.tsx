import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.336 21.164-7.5-7.5c-.39-.351-.39-.937 0-1.328.351-.352.937-.352 1.328 0L10 19.21l6.836-6.836c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29l-7.539 7.5a.856.856 0 0 1-1.29 0' />
    </g>
    <defs>
      <clipPath id='fba7154ee35ba80fad5e747f7d0b5beb__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownLgBoldIcon);
export default ForwardRef;
