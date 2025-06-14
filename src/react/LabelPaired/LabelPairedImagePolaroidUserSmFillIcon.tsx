import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 6.375c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zm1.75.875v5.25c0 .492.383.875.875.875h.438c0-.957.765-1.75 1.75-1.75h2.625c.957 0 1.75.793 1.75 1.75H10a.88.88 0 0 0 .875-.875V7.25A.9.9 0 0 0 10 6.375H3a.88.88 0 0 0-.875.875M4.75 9c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504 0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0A1.78 1.78 0 0 1 4.75 9' />
    </g>
    <defs>
      <clipPath id='c50064186b8351afee3a0dd0f213f7e7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserSmFillIcon);
export default ForwardRef;
