import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.5 14q-.031-1.5-1.031-2.469Q6.5 10.531 5 10.5q-1.563.03-2.562 1.125l-.157.188A3.4 3.4 0 0 0 1.5 14q.031 1.5 1.031 2.469.969 1 2.469 1.031 1.5-.031 2.469-1.031Q8.469 15.5 8.5 14M4.563 9.031A3 3 0 0 1 5 9q2.125.063 3.531 1.469Q9.937 11.874 10 14q-.062 2.126-1.469 3.531Q7.126 18.937 5 19q-2.125-.062-3.531-1.469Q.063 16.125 0 14q.03-2 1.313-3.375l4.343-5.344q.5-.5 1.063-.125.5.5.125 1.063z' />
    </g>
    <defs>
      <clipPath id='6aa892ae89d91f4964d4e598ed7a1f44__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixMdBoldIcon);
export default ForwardRef;
