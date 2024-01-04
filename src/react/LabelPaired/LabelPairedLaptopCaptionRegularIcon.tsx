import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12 5H3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6H1.5v-6c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v6h-.75v-6a.73.73 0 0 0-.21-.54A.73.73 0 0 0 12 5ZM1.805 14h11.39c.516-.031.852-.281 1.008-.75H.797c.156.469.492.719 1.008.75ZM0 12.945c.031-.265.18-.414.445-.445h14.11c.265.031.414.18.445.445-.016.516-.188.946-.516 1.29-.343.328-.773.5-1.289.515H1.805c-.516-.016-.938-.188-1.266-.516-.344-.343-.523-.773-.539-1.289Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopCaptionRegularIcon);
export default ForwardRef;
