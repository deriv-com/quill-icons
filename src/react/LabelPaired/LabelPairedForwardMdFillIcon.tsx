import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.656 17.781q-.5.375-1.093.125Q.03 17.625 0 17V7q.03-.625.563-.906.593-.25 1.093.125L7 10.688v2.625zM8 15V7q.03-.625.563-.906.593-.25 1.093.125l6 5q.345.313.344.781 0 .47-.344.781l-6 5q-.5.375-1.094.125Q8.033 17.625 8 17z' />
    </g>
    <defs>
      <clipPath id='9d80d508599e9b5a9708a6fbeac6d822__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardMdFillIcon);
export default ForwardRef;
