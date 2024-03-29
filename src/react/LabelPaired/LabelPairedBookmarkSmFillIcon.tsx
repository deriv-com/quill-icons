import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.063c0-.711.574-1.313 1.313-1.313h7.875c.71 0 1.312.602 1.312 1.313v12.03c0 .384-.3.657-.684.657a.63.63 0 0 1-.382-.11L5.5 14.688l-4.21 2.954a.63.63 0 0 1-.384.109.63.63 0 0 1-.656-.656z' />
    </g>
    <defs>
      <clipPath id='102cb5cbc08d7a4ae515b70fb8a6c074__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmFillIcon);
export default ForwardRef;
