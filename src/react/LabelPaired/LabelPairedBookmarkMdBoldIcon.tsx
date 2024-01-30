import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 4v13.781l4.063-2.875a.75.75 0 0 1 .875 0l4.062 2.875V5.5h-9V4h9q.624.03 1.063.438.405.436.437 1.062v13.75q0 .438-.406.656a.8.8 0 0 1-.781-.031L6 16.438l-4.812 3.437a.8.8 0 0 1-.782.031A.78.78 0 0 1 0 19.25z' />
    </g>
    <defs>
      <clipPath id='0520c51a9c1e46c8c6216f8f8a9cd75f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkMdBoldIcon);
export default ForwardRef;
