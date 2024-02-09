import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.25q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 6h13.5q.937.047 1.594.656.61.657.656 1.594v20.719q-.093.937-1.031 1.031a.87.87 0 0 1-.563-.187L9 24.89l-7.406 4.922A.87.87 0 0 1 1.03 30Q.094 29.907 0 28.969zm2.25-.75q-.703.046-.75.75v19.828l7.078-4.687q.422-.282.844 0l7.078 4.687V8.25q-.046-.703-.75-.75z' />
    </g>
    <defs>
      <clipPath id='5204f9f4db811cce1a8c53c691791969__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkXlRegularIcon);
export default ForwardRef;
