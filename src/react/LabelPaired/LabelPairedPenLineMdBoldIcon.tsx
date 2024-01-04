import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenLineMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m.406 17.719.719-2.438a2.66 2.66 0 0 1 .719-1.156l9.5-9.531a1.976 1.976 0 0 1 1.406-.563c.52 0 .99.188 1.406.563l1.25 1.25a2 2 0 0 1 .563 1.594c-.042.458-.23.864-.563 1.218l-9.5 9.5-.125.125a2.97 2.97 0 0 1-1.062.594l-2.438.719-1.312.375a.714.714 0 0 1-.75-.188c-.188-.208-.25-.458-.188-.75l.375-1.312Zm1.969-1.282-.531 1.72 1.718-.5.75-.22c.188-.062.365-.166.532-.312l7.125-7.156L10.03 8.03l-7.125 7.125-.062.063a1.56 1.56 0 0 0-.281.469l-.188.75ZM7.75 18.5h9.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-9.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineMdBoldIcon);
export default ForwardRef;
