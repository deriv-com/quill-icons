import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareMinusSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 5.938c-.273.018-.42.164-.438.437v8.75c.019.273.165.42.438.438h8.75c.273-.019.42-.165.438-.438v-8.75c-.019-.273-.165-.42-.438-.438h-8.75Zm-1.75.437c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75Zm4.156 3.719H8.47c.4.036.62.255.656.656-.036.401-.255.62-.656.656H4.53c-.4-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusSmBoldIcon);
export default ForwardRef;
