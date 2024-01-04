import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBookmarkXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 8.25c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 2.25 6h13.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v20.719c-.063.625-.406.968-1.031 1.031a.873.873 0 0 1-.563-.188L9 24.892l-7.406 4.922A.872.872 0 0 1 1.03 30C.406 29.937.063 29.594 0 28.969V8.25Zm2.25-.75c-.469.031-.719.281-.75.75v19.828l7.078-4.687c.281-.188.563-.188.844 0l7.078 4.687V8.25c-.031-.469-.281-.719-.75-.75H2.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkXlRegularIcon);
export default ForwardRef;
