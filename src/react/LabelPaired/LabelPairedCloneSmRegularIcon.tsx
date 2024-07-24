import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneSmRegularIcon = (
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
      <path d='M1.75 16.875h6.125A.88.88 0 0 0 8.75 16v-1.75h.875V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V9.875c0-.957.766-1.75 1.75-1.75H3.5V9H1.75a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875M6.125 12.5h6.125a.88.88 0 0 0 .875-.875V5.5a.9.9 0 0 0-.875-.875H6.125a.88.88 0 0 0-.875.875v6.125c0 .492.383.875.875.875m-1.75-.875V5.5c0-.957.766-1.75 1.75-1.75h6.125c.957 0 1.75.793 1.75 1.75v6.125c0 .984-.793 1.75-1.75 1.75H6.125c-.984 0-1.75-.766-1.75-1.75' />
    </g>
    <defs>
      <clipPath id='62a5f4d1a07dcf3e7e8c240f40e7feb6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneSmRegularIcon);
export default ForwardRef;
