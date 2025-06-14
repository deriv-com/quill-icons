import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightSmFillIcon = (
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
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.219-3.5H6.78a1.98 1.98 0 0 0-1.968 1.969c0 .437.136.847.355 1.148a2.18 2.18 0 0 0-.793 1.695 2.16 2.16 0 0 0 2.188 2.188h.875a2.176 2.176 0 0 0 2.187-2.187c0-.684-.328-1.286-.82-1.696.246-.3.383-.71.383-1.148 0-1.067-.903-1.969-1.97-1.969M6.78 9.875a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h.438c.355 0 .656.3.656.656 0 .383-.3.656-.656.656zm.438 1.313h.218a.9.9 0 0 1 .875.874c0 .493-.41.876-.874.876h-.875a.864.864 0 0 1-.875-.876c0-.464.382-.874.875-.874h.656' />
    </g>
    <defs>
      <clipPath id='ca10870f6e38614470ca326bcd0896b2__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightSmFillIcon);
export default ForwardRef;
