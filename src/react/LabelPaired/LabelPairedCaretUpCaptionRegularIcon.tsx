import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretUpCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.86 7.297 1.046 9.969a.159.159 0 0 0-.047.117c.016.094.07.148.164.164h5.672A.183.183 0 0 0 7 10.086a.159.159 0 0 0-.047-.117L4.141 7.297A.252.252 0 0 0 4 7.25a.252.252 0 0 0-.14.047Zm-.516-.54A.94.94 0 0 1 4 6.5a.94.94 0 0 1 .656.258L7.47 9.43c.187.172.281.39.281.656a.889.889 0 0 1-.258.656.889.889 0 0 1-.656.258H1.164a.889.889 0 0 1-.656-.258.889.889 0 0 1-.258-.656c0-.266.094-.492.281-.68l2.813-2.648Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpCaptionRegularIcon);
export default ForwardRef;
