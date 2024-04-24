import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLgRegularIcon = (
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
      <path d='M7.031 24.094.156 17.219a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l5.82 5.82V7.376c0-.312.273-.625.625-.625.313 0 .625.313.625.625v14.766l5.781-5.82a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .898L7.93 24.094a.66.66 0 0 1-.899 0' />
    </g>
    <defs>
      <clipPath id='e275f0548de799849f54581a99236f9d__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLgRegularIcon);
export default ForwardRef;
