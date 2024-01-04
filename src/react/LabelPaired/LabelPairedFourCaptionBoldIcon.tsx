import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFourCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.43 5.07 1.5 10.625h4.875V7.062c.031-.343.219-.53.563-.562.343.031.53.219.562.563v3.562h.938c.343.031.53.219.562.563-.031.343-.219.53-.563.562H7.5v2.438c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V11.75H.562c-.203 0-.367-.094-.492-.281a.552.552 0 0 1 0-.54l3.375-6.374c.188-.297.438-.375.75-.235.297.188.375.438.235.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionBoldIcon);
export default ForwardRef;
