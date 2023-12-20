import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightFromBracketBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11 8.563v1.687c-.042.458-.292.708-.75.75H6.5v2h3.75c.458.042.708.292.75.75v1.688L14.438 12zM16 12c0 .375-.135.698-.406.969l-3.625 3.594c-.271.291-.615.437-1.031.437a1.31 1.31 0 0 1-1-.437 1.475 1.475 0 0 1-.438-1V14.5h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 5 13v-2c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 6.5 9.5h3V8.438c.02-.396.167-.73.438-1 .27-.271.604-.417 1-.438.416 0 .76.146 1.03.438l3.626 3.593c.27.271.406.594.406.969M5.25 6.5h-2.5c-.354 0-.646.125-.875.375-.25.23-.375.52-.375.875v8.5c0 .354.125.646.375.875.23.25.52.375.875.375h2.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-2.5c-.77-.02-1.417-.292-1.937-.812C.292 17.667.02 17.02 0 16.25v-8.5c.02-.77.292-1.417.813-1.937.52-.521 1.166-.792 1.937-.813h2.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketBoldIcon);
export default ForwardRef;
