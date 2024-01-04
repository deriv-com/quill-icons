import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowsRotateMdBoldIcon = (
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
        d='M15.5 10.25c-.042.458-.292.708-.75.75h-4.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75H12.938l-1.626-1.625C10.396 6.979 9.293 6.521 8 6.5c-1.146.02-2.167.333-3.063.938a5.503 5.503 0 0 0-2 2.406c-.208.416-.53.552-.968.406-.417-.23-.552-.563-.407-1a6.857 6.857 0 0 1 2.532-3.063C5.24 5.418 6.542 5.021 8 5c1.688.02 3.146.625 4.375 1.813L14 8.438V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v4.5ZM1.25 13h3.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H3.062l1.626 1.625c.916.896 2.02 1.354 3.312 1.375 1.146-.02 2.167-.333 3.063-.938a5.504 5.504 0 0 0 2-2.406c.208-.396.53-.52.968-.375.417.209.552.531.406.969a7.137 7.137 0 0 1-2.53 3.063C10.76 18.582 9.457 18.979 8 19c-1.688-.02-3.146-.625-4.375-1.813L2 15.563v1.688c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3.5c.042-.458.292-.708.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateMdBoldIcon);
export default ForwardRef;
