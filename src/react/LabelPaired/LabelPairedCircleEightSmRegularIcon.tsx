import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.328-3.5a1.88 1.88 0 0 1 1.86 1.86c0 .574-.247 1.066-.63 1.394.493.383.848.984.848 1.668 0 1.148-.93 2.078-2.078 2.078h-.656a2.077 2.077 0 0 1-2.078-2.078c0-.684.328-1.285.82-1.668-.383-.328-.601-.82-.601-1.395 0-1.011.82-1.859 1.859-1.859zm-.656 2.844h.656c.52 0 .984-.438.984-.985 0-.52-.464-.984-.984-.984h-.656a1 1 0 0 0-.984.984.98.98 0 0 0 .984.985m.656.875h-.656c-.684 0-1.203.547-1.203 1.203 0 .683.52 1.203 1.203 1.203h.656c.656 0 1.203-.52 1.203-1.203 0-.656-.547-1.203-1.203-1.203' />
    </g>
    <defs>
      <clipPath id='297e182a30a7b7ffdbb338e375922034__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightSmRegularIcon);
export default ForwardRef;
