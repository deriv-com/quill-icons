import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUnlockSmBoldIcon = (
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
        d='M4.313 7.25V9h6.562c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-5.25c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52H3V7.25c.018-.984.355-1.814 1.012-2.488.674-.657 1.504-.994 2.488-1.012.784.018 1.477.246 2.078.684a3.408 3.408 0 0 1 1.258 1.75c.091.382-.055.656-.438.82-.382.091-.656-.055-.82-.438A2.153 2.153 0 0 0 7.813 5.5 2.108 2.108 0 0 0 6.5 5.063c-.62.018-1.14.227-1.559.628-.4.42-.61.94-.628 1.559m-2.625 3.5V16c.018.273.164.42.437.438h8.75c.273-.019.42-.165.438-.438v-5.25c-.019-.273-.165-.42-.438-.437h-8.75c-.273.018-.42.164-.437.437'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockSmBoldIcon);
export default ForwardRef;
