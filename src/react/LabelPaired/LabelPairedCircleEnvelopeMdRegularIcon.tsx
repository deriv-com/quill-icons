import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleEnvelopeMdRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.938-3.5A7.191 7.191 0 0 0 11.5 5.937a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.937 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm5-3h6c.292 0 .531.094.719.281A.974.974 0 0 1 12 10v4a.974.974 0 0 1-.281.719A.974.974 0 0 1 11 15H5a.974.974 0 0 1-.719-.281A.974.974 0 0 1 4 14v-4c0-.292.094-.531.281-.719A.973.973 0 0 1 5 9Zm6 1.531V10H5v.531L7.781 12c.063.02.136.042.219.063.083 0 .167-.021.25-.063L11 10.531Zm0 1.125-2.281 1.219c-.23.104-.469.156-.719.156s-.49-.052-.719-.156L5 11.656V14h6v-2.344Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeMdRegularIcon);
export default ForwardRef;
