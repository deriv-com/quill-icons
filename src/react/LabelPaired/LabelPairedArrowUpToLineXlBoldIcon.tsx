import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpToLineXlBoldIcon = (
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
        d='M1.125 7.5h15.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H1.125C.437 9.687.062 9.312 0 8.625.063 7.937.438 7.562 1.125 7.5Zm8.719 6.375h-.047l6 6.375c.437.531.422 1.047-.047 1.547-.531.437-1.047.422-1.547-.047l-4.078-4.266v9.891c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-9.89l-4.078 4.312c-.5.437-1.016.453-1.547.047-.469-.532-.484-1.063-.047-1.594l6-6.375c.219-.25.485-.375.797-.375.313 0 .594.125.844.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineXlBoldIcon);
export default ForwardRef;
