import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardMdRegularIcon = (
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
      <path d='M1.188 12 8 16.938V7.063zm6.875-6q.406 0 .656.281A.84.84 0 0 1 9 6.938v3.218l5.5-3.969A.9.9 0 0 1 15.063 6q.406 0 .656.281a.84.84 0 0 1 .281.657v10.125q0 .406-.281.656a.84.84 0 0 1-.656.281.9.9 0 0 1-.563-.187L9 13.843v3.22q0 .406-.281.656a.84.84 0 0 1-.656.281.9.9 0 0 1-.563-.187l-7.187-5.22A.69.69 0 0 1 0 12q0-.375.313-.594L7.5 6.187A.9.9 0 0 1 8.063 6M9 12.594l6 4.344V7.063l-6 4.343z' />
    </g>
    <defs>
      <clipPath id='334e7905d62917a24b9ad56af75cad43__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdRegularIcon);
export default ForwardRef;
