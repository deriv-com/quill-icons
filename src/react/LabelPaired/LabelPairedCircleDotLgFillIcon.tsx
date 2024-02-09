import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDotLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m0-13.75a3.6 3.6 0 0 0-1.875.508A3.759 3.759 0 0 0 6.25 15.5a3.76 3.76 0 0 0 1.875 3.242A3.6 3.6 0 0 0 10 19.25a3.6 3.6 0 0 0 1.875-.508A3.759 3.759 0 0 0 13.75 15.5a3.76 3.76 0 0 0-1.875-3.242A3.6 3.6 0 0 0 10 11.75' />
    </g>
    <defs>
      <clipPath id='f06cf1f88e0aafa1a7265fb1681ddf88__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotLgFillIcon);
export default ForwardRef;
