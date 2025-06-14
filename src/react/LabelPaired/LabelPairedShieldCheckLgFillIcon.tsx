import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckLgFillIcon = (
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
      <path d='m10.508 5.617 7.344 3.125c.859.39 1.523 1.211 1.523 2.227-.04 3.906-1.64 10.976-8.36 14.219a2.4 2.4 0 0 1-2.07 0C2.227 21.945.625 14.875.625 10.968c-.04-1.015.625-1.835 1.484-2.226l7.344-3.125a1.25 1.25 0 0 1 1.055 0m1.68 8.008c0-1.172-1.016-2.187-2.188-2.187-1.21 0-2.187 1.015-2.187 2.187 0 .898.507 1.64 1.25 1.992v2.695c0 .547.39.938.937.938.508 0 .938-.39.938-.937v-2.696c.703-.351 1.25-1.094 1.25-1.992' />
    </g>
    <defs>
      <clipPath id='781014ff76e1ec6ccd8ae6f25dc06683__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckLgFillIcon);
export default ForwardRef;
