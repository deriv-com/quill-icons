import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCheckXlFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M3 7.5h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89Zm12.797 8.297c.437-.531.437-1.063 0-1.594-.531-.437-1.063-.437-1.594 0L9 19.406l-2.203-2.203c-.531-.437-1.063-.437-1.594 0-.437.531-.437 1.063 0 1.594l3 3c.531.437 1.063.437 1.594 0l6-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlFillIcon);
export default ForwardRef;
