import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.953 9.328v.047q-.328.47-.89.328-1.922-.516-3.47.89-1.406 1.547-.89 3.47.141.561-.375.89Q1.594 15.89 1.5 18q.094 2.11 1.875 3.094.47.28.328.843-.516 1.922.89 3.47 1.547 1.406 3.47.89.561-.141.89.375Q9.89 28.406 12 28.5q2.11-.093 3.094-1.875.281-.469.844-.328 1.92.516 3.468-.89 1.407-1.547.89-3.47-.14-.562.376-.89Q22.406 20.11 22.5 18q-.093-2.11-1.875-3.047-.469-.328-.328-.89.516-1.923-.89-3.47-1.547-1.406-3.47-.89-.561.141-.89-.375Q14.11 7.594 12 7.5q-2.11.094-3.047 1.828M12 6q2.625.094 4.078 2.156 2.484-.422 4.406 1.36 1.782 1.921 1.36 4.406Q23.906 15.375 24 18q-.093 2.625-2.156 4.078.422 2.484-1.36 4.406-1.921 1.782-4.406 1.36Q14.625 29.906 12 30q-2.625-.093-4.078-2.156-2.484.422-4.406-1.36-1.782-1.921-1.36-4.406Q.094 20.625 0 18q.094-2.625 2.156-4.078-.422-2.484 1.36-4.406 1.921-1.782 4.406-1.36Q9.375 6.093 12 6m5.016 9.516-6 6q-.516.468-1.032 0l-3-3q-.468-.516 0-1.032.516-.468 1.032 0l2.484 2.438 5.484-5.438q.516-.468 1.032 0 .468.516 0 1.032' />
    </g>
    <defs>
      <clipPath id='32b90166a5f2e5b422fb71011b0f49e9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckXlRegularIcon);
export default ForwardRef;
