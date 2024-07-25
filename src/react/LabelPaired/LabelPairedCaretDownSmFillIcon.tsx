import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m3.871 14.004-3.5-3.5a.88.88 0 0 1-.191-.957A.9.9 0 0 1 1 9h7c.355 0 .656.219.793.547a.88.88 0 0 1-.191.957l-3.5 3.5a.843.843 0 0 1-1.23 0' />
    </g>
    <defs>
      <clipPath id='7bacc4b1037ab5a605b82cb5b47b67e7__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmFillIcon);
export default ForwardRef;
