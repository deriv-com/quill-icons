import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileScreenButtonSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 16c.018.273.164.42.438.438h6.124c.274-.019.42-.165.438-.438v-2.188H2V16Zm0-3.5h7v-7c-.018-.273-.164-.42-.438-.438H2.439c-.274.019-.42.165-.438.438v7Zm-1.313-7c.019-.492.192-.902.52-1.23.328-.329.738-.502 1.23-.52h6.126c.492.018.902.191 1.23.52.328.328.501.738.52 1.23V16c-.019.492-.192.902-.52 1.23-.328.329-.738.502-1.23.52H2.436c-.492-.018-.902-.191-1.23-.52-.328-.328-.501-.738-.52-1.23V5.5Zm3.938 9.188h1.75c.273.018.42.164.438.437-.019.273-.165.42-.438.438h-1.75c-.273-.019-.42-.165-.438-.438.019-.273.165-.42.438-.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonSmBoldIcon);
export default ForwardRef;
