import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImagePolaroidUserSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.688 15.125c.018.273.164.42.437.438h8.75c.273-.019.42-.165.438-.438v-1.312H1.688zm7.82-2.625h1.805V6.375c-.019-.273-.165-.42-.438-.437h-8.75c-.273.018-.42.164-.437.437V12.5h1.804c.11-.383.31-.693.602-.93.31-.255.674-.383 1.093-.383h2.625c.42 0 .784.128 1.094.383.292.237.492.547.602.93m3.117-6.125v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23M4.75 8.563c.018-.657.31-1.158.875-1.504.583-.329 1.167-.329 1.75 0 .565.346.857.847.875 1.503-.018.657-.31 1.158-.875 1.504-.583.329-1.167.329-1.75 0-.565-.346-.857-.847-.875-1.504'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserSmBoldIcon);
export default ForwardRef;
