import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcBlockIcon = (
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
    <g stroke='#FF444F' strokeWidth={8}>
      <path
        fill='#fff'
        d='M64 26c20.986 0 38 17.014 38 38s-17.014 38-38 38-38-17.014-38-38 17.014-38 38-38Z'
      />
      <path d='m38.906 89.094 50.188-50.188' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcBlockIcon);
export default ForwardRef;
