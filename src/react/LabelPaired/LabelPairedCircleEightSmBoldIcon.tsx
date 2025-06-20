import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightSmBoldIcon = (
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
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.219-3.5c1.066 0 1.968.902 1.968 1.969 0 .437-.136.847-.382 1.148.492.41.82 1.012.82 1.695 0 1.231-.984 2.188-2.187 2.188h-.875a2.16 2.16 0 0 1-2.188-2.187c0-.684.3-1.286.793-1.696a1.98 1.98 0 0 1-.356-1.148c0-1.067.875-1.969 1.97-1.969zM6.78 9.875h.438a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656H6.78c-.383 0-.656.3-.656.656 0 .383.273.656.656.656m.438 1.313h-.656a.88.88 0 0 0-.875.874c0 .493.382.876.875.876h.875a.88.88 0 0 0 .875-.876.9.9 0 0 0-.876-.874z' />
    </g>
    <defs>
      <clipPath id='ff1e1b5b07eac2878602f64009aefb9a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightSmBoldIcon);
export default ForwardRef;
