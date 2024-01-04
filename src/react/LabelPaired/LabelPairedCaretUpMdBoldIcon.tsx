import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretUpMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5 9.719 2.219 12.5H7.78L5 9.719ZM4.281 8.28C4.49 8.094 4.73 8 5 8c.27 0 .51.094.719.281l4 4c.291.334.364.698.219 1.094-.188.396-.5.604-.938.625H1c-.438-.02-.75-.23-.938-.625-.145-.396-.072-.76.22-1.094l4-4Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpMdBoldIcon);
export default ForwardRef;
