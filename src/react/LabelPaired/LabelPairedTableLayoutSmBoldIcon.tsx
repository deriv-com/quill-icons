import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTableLayoutSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.25 5.938H1.75c-.273.018-.42.164-.438.437v1.75h11.376v-1.75c-.019-.273-.165-.42-.438-.438ZM1.312 15.124c.019.273.165.42.438.438h2.188V9.436H1.312v5.688Zm3.938.438h7c.273-.019.42-.165.438-.438V9.437H5.25v6.126ZM1.75 4.624h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutSmBoldIcon);
export default ForwardRef;
