import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterMdBoldIcon = (
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
      <path d='M0 6.313C0 5.593.563 5 1.281 5h13.407A1.32 1.32 0 0 1 16 6.313c0 .312-.125.593-.312.812L10.5 13.531V18c0 .563-.469 1-1.031 1a.96.96 0 0 1-.625-.219L5.969 16.5a1.21 1.21 0 0 1-.469-.969v-2L.281 7.125A1.22 1.22 0 0 1 0 6.313m1.719.187 5.094 6.281A.75.75 0 0 1 7 13.25v2.156L9 17v-3.75c0-.156.031-.312.156-.469L14.281 6.5z' />
    </g>
    <defs>
      <clipPath id='f32dce8e820f377e4616e1af8bf2b8c6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterMdBoldIcon);
export default ForwardRef;
