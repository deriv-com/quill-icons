import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXTwitterMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.156 5.5h2.219L9.562 11l5.657 7.5H10.78l-3.469-4.531L3.345 18.5H1.125l5.156-5.875L.844 5.5h4.531l3.156 4.156L12.156 5.5Zm-.781 11.688h1.25L4.719 6.75H3.406l7.969 10.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterMdIcon);
export default ForwardRef;
