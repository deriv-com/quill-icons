import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCirclePlusCaptionBoldIcon = (
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
        d='M6 4.625c-.89 0-1.703.219-2.438.656a4.868 4.868 0 0 0-1.78 1.782A4.837 4.837 0 0 0 1.124 9.5c0 .86.219 1.672.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.674 4.674 0 0 0 6 14.376c.89 0 1.703-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.838 4.838 0 0 0 .657-2.438c0-.86-.219-1.672-.656-2.438a4.869 4.869 0 0 0-1.781-1.78A4.673 4.673 0 0 0 6 4.624ZM6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797Zm-.563-3.938v-1.5h-1.5c-.343-.03-.53-.218-.562-.562.031-.344.219-.531.563-.563h1.5v-1.5c.03-.343.218-.53.562-.562.344.031.531.219.563.563v1.5h1.5c.343.03.53.218.562.562-.031.344-.219.531-.563.563h-1.5v1.5c-.03.343-.218.53-.562.562-.344-.031-.531-.219-.563-.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCirclePlusCaptionBoldIcon);
export default ForwardRef;
