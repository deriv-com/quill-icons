import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsMdRegularIcon = (
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
      <path d='M15.875 17.813q-.312.344-.687.062l-4.75-4.031q-.344-.344-.063-.719.313-.312.688-.031l4.75 4.031q.344.312.062.688m-6.906-6.47 6.219-5.218q.375-.281.687.063.282.375-.062.687L6.53 14.719q.47.78.469 1.781-.031 1.5-1.031 2.469Q5 19.969 3.5 20q-1.5-.031-2.469-1.031Q.031 18 0 16.5q.031-1.5 1.031-2.469Q2 13.031 3.5 13q1.407.03 2.375.938L8.188 12l-2.313-1.937q-.968.906-2.375.937-1.5-.031-2.469-1.031Q.031 9 0 7.5.031 6 1.031 5.031 2 4.031 3.5 4q1.5.031 2.469 1.031Q6.969 6 7 7.5q0 1-.469 1.781zM3.5 10q1.406-.03 2.156-1.25.688-1.25 0-2.5Q4.906 5.031 3.5 5q-1.406.031-2.156 1.25-.689 1.25 0 2.5Q2.094 9.97 3.5 10m0 4q-1.406.031-2.156 1.25-.689 1.25 0 2.5.75 1.22 2.156 1.25 1.406-.03 2.156-1.25.688-1.25 0-2.5Q4.906 14.031 3.5 14' />
    </g>
    <defs>
      <clipPath id='887298fd9686cb98__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsMdRegularIcon);
export default ForwardRef;
