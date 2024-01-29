import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2CaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.375v2.25h2.25v-2.25zm-1.125 0q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm1.125 6v2.25h2.25v-2.25zm-1.125 0q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.329.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm9.375-6h-2.25v2.25h2.25zM7.875 4.25h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-2.25q.024-.468.328-.797.328-.304.797-.328m0 7.125v2.25h2.25v-2.25zm-1.125 0q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.329.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797z' />
    </g>
    <defs>
      <clipPath id='30810f6f2146ce92e39f32be59d2dc78__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2CaptionBoldIcon);
export default ForwardRef;
