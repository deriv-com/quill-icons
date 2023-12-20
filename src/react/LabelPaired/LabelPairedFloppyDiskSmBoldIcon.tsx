import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskSmBoldIcon = (
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
        d='M1.688 6.375v8.75c.018.273.164.42.437.438h8.75c.273-.019.42-.165.438-.438v-6.7a.448.448 0 0 0-.137-.327l.93-.93c.346.346.519.766.519 1.258v6.699c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h6.727c.474 0 .884.173 1.23.52l2.023 2.023-.93.93-2.023-2.024-.027-.027V8.78c-.036.401-.255.62-.656.656h-5.25c-.401-.036-.62-.255-.656-.656V5.937h-.438c-.273.019-.42.165-.437.438m2.187-.437v2.187h3.938V5.938zM4.75 12.5c.018-.656.31-1.158.875-1.504.583-.328 1.167-.328 1.75 0 .565.346.857.848.875 1.504-.018.656-.31 1.158-.875 1.504-.583.328-1.167.328-1.75 0-.565-.346-.857-.848-.875-1.504'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskSmBoldIcon);
export default ForwardRef;
