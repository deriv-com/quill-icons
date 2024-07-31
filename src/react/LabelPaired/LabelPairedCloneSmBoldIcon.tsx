import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 16.438h6.125A.45.45 0 0 0 8.313 16v-1.75h1.312V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V9.875c0-.957.766-1.75 1.75-1.75H3.5v1.313H1.75a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438m4.375-4.375h6.125a.45.45 0 0 0 .438-.438V5.5a.47.47 0 0 0-.438-.437H6.125a.45.45 0 0 0-.437.437v6.125c0 .246.19.438.437.438m-1.75-.438V5.5c0-.957.766-1.75 1.75-1.75h6.125c.957 0 1.75.793 1.75 1.75v6.125c0 .984-.793 1.75-1.75 1.75H6.125c-.984 0-1.75-.766-1.75-1.75' />
    </g>
    <defs>
      <clipPath id='3015d2dc57f3919b10aad259d61f4a84__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneSmBoldIcon);
export default ForwardRef;
