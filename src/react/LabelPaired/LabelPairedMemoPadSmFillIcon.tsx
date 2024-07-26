import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadSmFillIcon = (
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
      <path d='M.375 5.5c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v.875H.375zm0 1.75h12.25V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zM3 9.875c0 .246.191.438.438.438h6.124A.45.45 0 0 0 10 9.875a.47.47 0 0 0-.437-.437H3.436A.45.45 0 0 0 3 9.875M3 12.5c0 .246.191.438.438.438h6.124A.45.45 0 0 0 10 12.5a.47.47 0 0 0-.437-.437H3.436A.45.45 0 0 0 3 12.5m0 2.625c0 .246.191.438.438.438h2.625a.45.45 0 0 0 .437-.438.47.47 0 0 0-.437-.437H3.438a.45.45 0 0 0-.438.437' />
    </g>
    <defs>
      <clipPath id='bd4f0958f075321d790740667d8c0ef9__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadSmFillIcon);
export default ForwardRef;
