import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightErrorIconIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      d='M64 123c32.585 0 59-26.415 59-59S96.585 5 64 5 5 31.415 5 64s26.415 59 59 59'
    />
    <path
      fill='#fff'
      d='M58.05 86.01v-1.488c0-2.848 1.743-5.13 5.95-5.13s5.926 2.205 5.926 5.13v1.616c0 2.873-1.719 5.13-5.926 5.13s-5.95-2.385-5.95-5.258M62 68.925l-3.156-18.957V37.142a6.64 6.64 0 0 1 5.13-2.822 6.52 6.52 0 0 1 5.13 2.822v12.826l-3.052 18.957a2.23 2.23 0 0 1-1.975 1.488A2.21 2.21 0 0 1 62 68.925'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightErrorIconIcon);
export default ForwardRef;
