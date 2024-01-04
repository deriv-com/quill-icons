import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCheckXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M20.672 10.828c.437.531.437 1.063 0 1.594L8.297 24.797c-.531.437-1.063.437-1.594 0L.328 18.422c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0L7.5 22.406l11.578-11.578c.531-.437 1.063-.437 1.594 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckXlBoldIcon);
export default ForwardRef;
