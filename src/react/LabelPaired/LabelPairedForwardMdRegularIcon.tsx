import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardMdRegularIcon = (
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
      <path d='M14.813 12 8 7.063v9.875zM7.937 6q.313 0 .563.188l7.188 5.218A.69.69 0 0 1 16 12q0 .375-.312.594L8.5 17.813a.9.9 0 0 1-.562.187.84.84 0 0 1-.657-.281.84.84 0 0 1-.281-.657v-3.218l-5.5 3.969A.9.9 0 0 1 .938 18a.84.84 0 0 1-.657-.281.84.84 0 0 1-.281-.657V6.938q0-.406.281-.656A.84.84 0 0 1 .938 6q.312 0 .562.188L7 10.156V6.937q0-.406.281-.656A.84.84 0 0 1 7.938 6M7 12.594v-1.188L1 7.062v9.875z' />
    </g>
    <defs>
      <clipPath id='a7df2d5a50eb759f650c5ec9d22a4fc1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardMdRegularIcon);
export default ForwardRef;
