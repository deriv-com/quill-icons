import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedRightFromBracketMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M11 8.563v1.687c-.042.458-.292.708-.75.75H6.5v2h3.75c.458.042.708.292.75.75v1.688L14.438 12 11 8.562ZM16 12c0 .375-.135.698-.406.969l-3.625 3.594c-.271.291-.615.437-1.031.437a1.31 1.31 0 0 1-1-.438 1.475 1.475 0 0 1-.438-1V14.5h-3a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 5 13v-2c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 6.5 9.5h3V8.437c.02-.395.167-.729.438-1 .27-.27.604-.416 1-.437.416 0 .76.146 1.03.438l3.626 3.593c.27.271.406.594.406.969ZM5.25 6.5h-2.5c-.354 0-.646.125-.875.375-.25.23-.375.52-.375.875v8.5c0 .354.125.646.375.875.23.25.52.375.875.375h2.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-2.5c-.77-.02-1.417-.292-1.938-.813-.52-.52-.791-1.166-.812-1.937v-8.5c.02-.77.292-1.417.813-1.938.52-.52 1.166-.791 1.937-.812h2.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketMdBoldIcon);
export default ForwardRef;
