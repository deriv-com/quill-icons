import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.39 7.781-8.296 3.516c-.516.187-.89.703-.844 1.265 0 4.407 1.828 12.188 9.14 15.704.376.187.797.187 1.172 0 7.313-3.516 9.141-11.297 9.188-15.703 0-.563-.375-1.032-.89-1.266L12.562 7.78a1.29 1.29 0 0 0-1.172 0m1.782-1.406 8.25 3.516c1.031.468 1.828 1.453 1.828 2.672-.047 4.687-1.969 13.171-10.031 17.062a2.88 2.88 0 0 1-2.485 0C2.672 25.735.75 17.25.75 12.563c-.047-1.22.75-2.204 1.781-2.672l8.297-3.516a2.91 2.91 0 0 1 2.344 0M12 14.625a1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 12 14.625m2.625 1.125a2.63 2.63 0 0 1-1.875 2.531v3.469c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-3.469c-1.125-.328-1.875-1.312-1.875-2.531 0-1.406 1.172-2.625 2.625-2.625 1.406 0 2.625 1.219 2.625 2.625' />
    </g>
    <defs>
      <clipPath id='816b60a7abb3ef224156a88dca4de814__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckXlRegularIcon);
export default ForwardRef;
