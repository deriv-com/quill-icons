import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightLgRegularIcon = (
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
      <path d='m17.555 15.93-6.875 6.875q-.43.39-.86 0-.39-.43 0-.86l5.782-5.82H.875Q.29 16.086.25 15.5q.039-.585.625-.625h14.727L9.82 9.055q-.39-.43 0-.86.43-.39.86 0l6.875 6.875q.39.43 0 .86' />
    </g>
    <defs>
      <clipPath id='6332511ef456c060146f1eba15e43913__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgRegularIcon);
export default ForwardRef;
