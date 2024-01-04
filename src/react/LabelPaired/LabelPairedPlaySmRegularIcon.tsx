import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlaySmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.781 5.555a.465.465 0 0 0-.437 0 .428.428 0 0 0-.219.383v9.625c0 .164.073.291.219.382a.465.465 0 0 0 .437 0l7.875-4.812a.428.428 0 0 0 .219-.383.428.428 0 0 0-.219-.383L1.781 5.555Zm-.847-.766c.437-.237.875-.228 1.312.027l7.875 4.813c.401.255.61.629.629 1.121-.018.492-.228.866-.629 1.121l-7.875 4.813c-.437.255-.875.264-1.312.027-.438-.255-.666-.638-.684-1.148V5.937c.018-.51.246-.893.684-1.148Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmRegularIcon);
export default ForwardRef;
