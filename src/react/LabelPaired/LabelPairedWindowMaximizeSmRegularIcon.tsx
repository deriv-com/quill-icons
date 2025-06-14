import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeSmRegularIcon = (
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
      <path d='M1.75 5.5a.88.88 0 0 0-.875.875V9h12.25V6.375a.9.9 0 0 0-.875-.875zM.875 9.875v5.25c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875v-5.25zM0 6.375c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75z' />
    </g>
    <defs>
      <clipPath id='cf2ef2a687f5fc3f06259bca3f0a2af3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeSmRegularIcon);
export default ForwardRef;
