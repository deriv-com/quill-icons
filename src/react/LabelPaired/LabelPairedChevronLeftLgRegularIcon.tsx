import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.07 15.93q-.39-.43 0-.86l7.5-7.5q.43-.39.86 0 .39.43 0 .86L2.398 15.5l7.032 7.07q.39.43 0 .86-.43.39-.86 0z' />
    </g>
    <defs>
      <clipPath id='94521488edfe72cf510f9dc207c56bff__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftLgRegularIcon);
export default ForwardRef;
