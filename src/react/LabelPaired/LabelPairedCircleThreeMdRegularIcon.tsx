import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5a6.98 6.98 0 0 0-6.062 3.5c-1.282 2.188-1.282 4.844 0 7C3.188 17.688 5.467 19 8 19c2.5 0 4.781-1.312 6.031-3.5 1.281-2.156 1.281-4.812 0-7C12.781 6.344 10.5 5 8 5m0 15c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5.5 8v.031h4.469c.219 0 .406.125.469.313.093.187.03.406-.126.562L7.845 11h.625c1.375 0 2.5 1.125 2.5 2.5 0 1.406-1.094 2.531-2.5 2.531H7.344a2.78 2.78 0 0 1-2.188-1.093l-.062-.126a.47.47 0 0 1 .093-.687.47.47 0 0 1 .688.094l.094.094c.312.437.843.718 1.375.718h1.125c.844 0 1.5-.687 1.5-1.531a1.5 1.5 0 0 0-1.5-1.5H6.5a.56.56 0 0 1-.5-.312.56.56 0 0 1 .156-.563L8.625 9H5.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='5a9a2657d8b95c8e2320f887dc14e165__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeMdRegularIcon);
export default ForwardRef;
