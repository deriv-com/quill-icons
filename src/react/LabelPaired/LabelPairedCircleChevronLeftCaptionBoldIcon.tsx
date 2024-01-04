import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleChevronLeftCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.125 9.5c0 .89.219 1.703.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.838 4.838 0 0 0 6 14.376c.86 0 1.672-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.674 4.674 0 0 0 .657-2.438c0-.89-.219-1.703-.656-2.438a4.869 4.869 0 0 0-1.781-1.78A4.837 4.837 0 0 0 6 4.624c-.86 0-1.672.219-2.438.656a4.868 4.868 0 0 0-1.78 1.782A4.673 4.673 0 0 0 1.124 9.5ZM12 9.5a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3ZM6.352 6.664c.265-.219.53-.219.796 0 .22.266.22.531 0 .797L5.11 9.5l2.04 2.04c.218.265.218.53 0 .796-.266.219-.532.219-.797 0L3.914 9.898c-.219-.265-.219-.53 0-.796l2.438-2.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronLeftCaptionBoldIcon);
export default ForwardRef;
