import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCaretDownCaptionRegularIcon = (
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
      <path d='M6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25 5.228 5.228 0 0 0-9.07 0 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m0 8.25a.85.85 0 0 1-.61-.258l-2.226-2.39A.62.62 0 0 1 3 8.656C3 8.305 3.281 8 3.633 8h4.71A.67.67 0 0 1 9 8.656a.64.64 0 0 1-.187.446l-2.227 2.39A.84.84 0 0 1 6 11.75m.023-.75L8.11 8.75H3.867L5.953 11h.07' />
    </g>
    <defs>
      <clipPath id='e2ed160ca61bfb52d24026b131e74a4f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretDownCaptionRegularIcon);
export default ForwardRef;
