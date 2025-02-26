import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 9.25c.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-7.227L2.305 21.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899L11.602 10.5H4.375a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625z' />
    </g>
    <defs>
      <clipPath id='8d6fd294a793cca280a03c3ff7597d0f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgRegularIcon);
export default ForwardRef;
