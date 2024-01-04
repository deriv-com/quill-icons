import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleDotXlFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M12 30c-2.188-.031-4.188-.563-6-1.594C4.187 27.344 2.719 25.875 1.594 24 .53 22.094 0 20.094 0 18s.531-4.094 1.594-6C2.719 10.125 4.187 8.656 6 7.594 7.813 6.562 9.813 6.03 12 6c2.188.031 4.188.563 6 1.594 1.813 1.062 3.281 2.531 4.406 4.406C23.47 13.906 24 15.906 24 18s-.531 4.094-1.594 6c-1.125 1.875-2.593 3.344-4.406 4.406-1.813 1.032-3.813 1.563-6 1.594Zm0-16.5c-.813 0-1.563.203-2.25.61A4.51 4.51 0 0 0 7.5 18a4.51 4.51 0 0 0 2.25 3.89c.688.407 1.438.61 2.25.61.813 0 1.563-.203 2.25-.61A4.51 4.51 0 0 0 16.5 18a4.51 4.51 0 0 0-2.25-3.89A4.343 4.343 0 0 0 12 13.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotXlFillIcon);
export default ForwardRef;
