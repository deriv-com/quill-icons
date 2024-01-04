import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsLeftXlBoldIcon = (
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
        d='m2.203 17.203 9-9c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594L4.594 18l8.203 8.203c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0l-9-9c-.437-.531-.437-1.063 0-1.594Zm18-9c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594L13.594 18l8.203 8.203c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0l-9-9c-.437-.531-.437-1.063 0-1.594l9-9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftXlBoldIcon);
export default ForwardRef;
