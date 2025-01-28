import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 6.75v3.313L8 6.187A.85.85 0 0 1 8.531 6c.531 0 .969.438.969.969v10.093a.94.94 0 0 1-.937.938c-.22 0-.407-.031-.563-.156l-5.5-3.875v3.281a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V6.75A.74.74 0 0 1 1.75 6a.76.76 0 0 1 .75.75m0 5.406L8 16V8.031l-5.5 3.844z' />
    </g>
    <defs>
      <clipPath id='4971e03588f7d09f2dc1bd0b6f340ff7__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepMdBoldIcon);
export default ForwardRef;
