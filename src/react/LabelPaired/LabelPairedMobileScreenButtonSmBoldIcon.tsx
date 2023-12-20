import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileScreenButtonSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 16c.018.273.164.42.438.438h6.124c.274-.019.42-.165.438-.438v-2.187H2zm0-3.5h7v-7c-.018-.273-.164-.42-.437-.437H2.436c-.273.018-.419.164-.437.437zm-1.312-7c.018-.492.19-.902.519-1.23.328-.329.738-.502 1.23-.52h6.126c.492.018.902.191 1.23.52.328.328.501.738.52 1.23V16c-.019.492-.192.902-.52 1.23-.328.329-.738.502-1.23.52H2.436c-.492-.018-.902-.191-1.23-.52-.328-.328-.501-.738-.52-1.23zm3.937 9.188h1.75c.273.018.42.164.438.437-.019.273-.165.42-.438.438h-1.75c-.273-.019-.42-.165-.437-.438.018-.273.164-.42.437-.437'
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
