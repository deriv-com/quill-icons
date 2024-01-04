import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleXlFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12 30c-2.188-.031-4.188-.563-6-1.594C4.187 27.344 2.719 25.875 1.594 24 .53 22.094 0 20.094 0 18s.531-4.094 1.594-6C2.719 10.125 4.187 8.656 6 7.594 7.813 6.562 9.813 6.03 12 6c2.188.031 4.188.563 6 1.594 1.813 1.062 3.281 2.531 4.406 4.406C23.47 13.906 24 15.906 24 18s-.531 4.094-1.594 6c-1.125 1.875-2.593 3.344-4.406 4.406-1.813 1.032-3.813 1.563-6 1.594Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXlFillIcon);
export default ForwardRef;
