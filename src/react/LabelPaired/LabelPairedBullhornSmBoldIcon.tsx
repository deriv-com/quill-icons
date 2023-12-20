import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBullhornSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m11.813 5.773-.301.301a8.896 8.896 0 0 1-2.68 1.805 8.678 8.678 0 0 1-3.145.684v3.5a8.679 8.679 0 0 1 3.145.683 8.896 8.896 0 0 1 2.68 1.805l.3.3zM4.375 7.25h1.121a7.142 7.142 0 0 0 5.086-2.105l1.04-1.04c.309-.273.628-.337.956-.19.328.127.51.391.547.792v3.965c.255.127.465.337.629.629.164.291.246.629.246 1.011 0 .383-.082.72-.246 1.012a1.492 1.492 0 0 1-.629.63v3.964c-.037.401-.219.665-.547.793-.328.146-.647.082-.957-.191l-1.039-1.04a7.214 7.214 0 0 0-2.242-1.53 7.682 7.682 0 0 0-2.652-.575v2.844c-.019.437-.165.802-.438 1.093-.292.274-.656.42-1.094.438h-.875c-.437-.018-.802-.164-1.094-.437-.273-.292-.419-.657-.437-1.094v-2.844c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V9c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52zm-1.312 6.125v2.844c.018.127.09.2.218.218h.875c.128-.018.2-.09.219-.218v-2.844zM1.75 8.563c-.273.018-.42.164-.437.437v2.625c.018.273.164.42.437.438h2.625v-3.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornSmBoldIcon);
export default ForwardRef;
