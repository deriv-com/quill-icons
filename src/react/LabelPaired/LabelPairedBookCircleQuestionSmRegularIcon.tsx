import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.5c0-.957.766-1.75 1.75-1.75h9.188c.71 0 1.312.602 1.312 1.313V9.19a3.1 3.1 0 0 0-.875.356V5.062a.47.47 0 0 0-.437-.437H3.75v9.625H9c.027.3.082.602.164.875H2a.88.88 0 0 0-.875.875c0 .492.383.875.875.875h8.094c.273.355.574.629.93.875H2c-.984 0-1.75-.766-1.75-1.75zm.875 0v8.996c.246-.137.547-.246.875-.246h.875V4.625H2a.88.88 0 0 0-.875.875m3.938 2.188A.45.45 0 0 1 5.5 7.25h4.375a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H5.5a.43.43 0 0 1-.437-.437m0 2.625a.45.45 0 0 1 .437-.438h4.375a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H5.5a.43.43 0 0 1-.437-.437m4.812 3.5c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m.875 0a3.057 3.057 0 0 0 3.063 3.062 3.075 3.075 0 0 0 3.062-3.062c0-1.668-1.395-3.063-3.062-3.063a3.075 3.075 0 0 0-3.063 3.063m1.313-1.04c0-.628.492-1.148 1.12-1.148h1.122c.683 0 1.258.574 1.258 1.258 0 .465-.274.902-.684 1.12l-.656.329a.41.41 0 0 1-.41.355.43.43 0 0 1-.438-.437v-.164c0-.164.082-.328.219-.41l.875-.438a.43.43 0 0 0 .219-.355.41.41 0 0 0-.383-.383h-1.121c-.137 0-.246.137-.246.273v.165a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437zm1.312 2.79a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437' />
    </g>
    <defs>
      <clipPath id='ffaa389b510774ae38f2cf588dded262__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionSmRegularIcon);
export default ForwardRef;
