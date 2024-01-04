import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleChevronDownCaptionBoldIcon = (
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
        d='M6 14.375c.89 0 1.703-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.838 4.838 0 0 0 .657-2.438c0-.86-.219-1.672-.656-2.438a4.869 4.869 0 0 0-1.781-1.78A4.673 4.673 0 0 0 6 4.624c-.89 0-1.703.219-2.438.656a4.868 4.868 0 0 0-1.78 1.782A4.837 4.837 0 0 0 1.124 9.5c0 .86.219 1.672.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.674 4.674 0 0 0 6 14.376ZM6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797 6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5ZM3.164 9.148c-.219-.265-.219-.53 0-.796.266-.22.531-.22.797 0L6 10.39l2.04-2.04c.265-.218.53-.218.796 0 .219.266.219.532 0 .797l-2.438 2.438c-.265.219-.53.219-.796 0L3.164 9.148Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronDownCaptionBoldIcon);
export default ForwardRef;
