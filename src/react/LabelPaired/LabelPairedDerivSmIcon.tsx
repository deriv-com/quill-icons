import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.844 4.215 2.734-.465-1.914 10.938c-.3 1.695-1.914 3.062-3.637 3.062H6.95c-2.351 0-3.91-1.887-3.5-4.21l.192-1.013c.41-2.324 2.625-4.238 4.976-4.238h2.488zm-1.778 10.09.602-3.5H8.48c-1.066 0-2.05.875-2.242 1.914l-.11.629c-.19 1.039.52 1.886 1.56 1.886h1.285c.52 0 .984-.41 1.093-.93' />
    </g>
    <defs>
      <clipPath id='6cebd260d5ed714863b2ffd1dc3628c8__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivSmIcon);
export default ForwardRef;
