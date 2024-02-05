import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineMdBoldIcon = (
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
      <path d='M0 17.25V6.75Q.063 6.063.75 6q.687.063.75.75v10.5q-.063.687-.75.75-.687-.063-.75-.75m4.25-5.781 4.25-4q.531-.438 1.031.031.438.53-.031 1.063L6.656 11.25h6.594q.687.063.75.75-.063.687-.75.75H6.656l2.875 2.719q.438.5.031 1.062-.531.438-1.062.032l-4.25-4A.78.78 0 0 1 4 12a.68.68 0 0 1 .25-.531' />
    </g>
    <defs>
      <clipPath id='64ef6e9dd9740262c5bd80cbb2dc57fb__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdBoldIcon);
export default ForwardRef;
