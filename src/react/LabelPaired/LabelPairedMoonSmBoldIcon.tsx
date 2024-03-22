import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.188 6.457a4.83 4.83 0 0 0-2.625 4.293 4.78 4.78 0 0 0 4.785 4.813c.355 0 .71-.028 1.066-.11a6.125 6.125 0 0 1-4.129-5.797c0-1.176.328-2.27.902-3.199m1.695-1.805h.984c.192.028.356.164.383.356a.39.39 0 0 1-.191.465c-.11.054-.192.109-.274.164l-.328.246c-.055.027-.082.054-.11.082a4.8 4.8 0 0 0-1.75 3.719c0 2.652 2.16 4.785 4.786 4.812h.109c.164-.027.301-.027.438-.027.082-.028.191-.028.3-.055.192-.027.383.055.465.219.082.191.055.383-.082.52-.082.081-.136.136-.218.19-.137.11-.247.22-.383.329-.055.027-.11.082-.164.11a6.1 6.1 0 0 1-3.5 1.093C2.984 16.875.25 14.141.25 10.75a6.114 6.114 0 0 1 5.633-6.098' />
    </g>
    <defs>
      <clipPath id='5177c236c5d44dacc1cfd34b7ce09c48__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonSmBoldIcon);
export default ForwardRef;
