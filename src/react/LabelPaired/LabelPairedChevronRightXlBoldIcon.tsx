import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronRightXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.297 17.203c.437.531.437 1.063 0 1.594l-9 9c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594L11.906 18 3.703 9.797c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l9 9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightXlBoldIcon);
export default ForwardRef;
