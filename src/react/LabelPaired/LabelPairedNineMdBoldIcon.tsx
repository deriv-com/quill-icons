import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineMdBoldIcon = (
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
      <path d='M1.5 10q.031 1.5 1.031 2.469.969 1 2.469 1.031 1.563-.03 2.563-1.125l.156-.187q.78-.97.781-2.188-.031-1.5-1.031-2.469Q6.5 6.531 5 6.5q-1.5.031-2.469 1.031Q1.531 8.5 1.5 10m3.938 4.969q-.219.03-.438.031-2.125-.062-3.531-1.469Q.063 12.126 0 10q.062-2.125 1.469-3.531Q2.875 5.063 5 5q2.125.063 3.531 1.469T10 10q-.03 2-1.312 3.375l-4.344 5.344q-.5.5-1.063.125-.5-.5-.125-1.063z' />
    </g>
    <defs>
      <clipPath id='eb333c7b7a41f6a9ac19316636845918__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineMdBoldIcon);
export default ForwardRef;
