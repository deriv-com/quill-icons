import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.555 9.445q.39.43 0 .86L6.93 20.93q-.43.39-.86 0L.445 15.305q-.39-.43 0-.86.43-.39.86 0L6.5 19.602 16.695 9.445q.43-.39.86 0' />
    </g>
    <defs>
      <clipPath id='f78ed9e6adcfdfd184ae3321b29f0ba5__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckLgRegularIcon);
export default ForwardRef;
