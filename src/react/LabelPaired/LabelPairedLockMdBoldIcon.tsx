import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 8v2h5V8q-.03-1.062-.719-1.781Q8.062 5.53 7 5.5q-1.062.03-1.781.719Q4.53 6.938 4.5 8M3 10V8q.03-1.687 1.156-2.844Q5.312 4.031 7 4q1.688.03 2.844 1.156Q10.969 6.312 11 8v2h1q.844.03 1.406.594.563.563.594 1.406v6q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-6q.03-.843.594-1.406Q1.157 10.03 2 10zm-1.5 2v6q.031.47.5.5h10q.47-.03.5-.5v-6q-.03-.469-.5-.5H2q-.469.031-.5.5' />
    </g>
    <defs>
      <clipPath id='1961fddc524b629661f17cc237bad5dd__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockMdBoldIcon);
export default ForwardRef;
