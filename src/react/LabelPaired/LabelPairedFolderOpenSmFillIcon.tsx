import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.531 9.875.125 14.031V6.375c0-.957.766-1.75 1.75-1.75h3.2c.464 0 .902.191 1.23.52l.738.738c.328.328.766.492 1.23.492H11.5c.957 0 1.75.793 1.75 1.75V9H4.063c-.63 0-1.204.328-1.532.875m.766.438a.87.87 0 0 1 .765-.438H15c.3 0 .602.191.738.465a.84.84 0 0 1 0 .875l-3.062 5.25a.9.9 0 0 1-.739.41H1a.87.87 0 0 1-.766-.437.84.84 0 0 1 0-.875z' />
    </g>
    <defs>
      <clipPath id='4500249db8b887a353d2f2ba9489e28b__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenSmFillIcon);
export default ForwardRef;
