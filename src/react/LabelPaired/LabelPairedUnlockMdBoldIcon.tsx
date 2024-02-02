import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockMdBoldIcon = (
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
      <path d='M4.5 8v2H12q.844.03 1.406.594.563.563.594 1.406v6q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-6q.03-.843.594-1.406Q1.157 10.03 2 10h1V8q.03-1.687 1.156-2.844Q5.312 4.031 7 4q1.344.03 2.375.781a3.9 3.9 0 0 1 1.438 2q.156.657-.5.938-.656.156-.938-.5A2.46 2.46 0 0 0 8.5 6 2.4 2.4 0 0 0 7 5.5q-1.062.03-1.781.719Q4.53 6.938 4.5 8m-3 4v6q.031.47.5.5h10q.47-.03.5-.5v-6q-.03-.469-.5-.5H2q-.469.031-.5.5' />
    </g>
    <defs>
      <clipPath id='cee69b7df083f26f120307c4c9849382__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockMdBoldIcon);
export default ForwardRef;
