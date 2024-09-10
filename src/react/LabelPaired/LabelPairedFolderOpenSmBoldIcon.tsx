import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenSmBoldIcon = (
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
      <path d='M10.625 16.875h-8.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h3.2c.464 0 .902.191 1.23.52l.738.738c.328.328.766.492 1.23.492H11.5c.957 0 1.75.793 1.75 1.75V9h-1.312v-.875a.47.47 0 0 0-.438-.437H8.273c-.82 0-1.585-.301-2.16-.875l-.738-.739a.44.44 0 0 0-.3-.136h-3.2a.45.45 0 0 0-.437.437v7.164l1.859-3.226a.87.87 0 0 1 .765-.438H15c.3 0 .602.164.738.438a.89.89 0 0 1 0 .902l-3.062 5.25a.9.9 0 0 1-.739.41z' />
    </g>
    <defs>
      <clipPath id='3b97810d3c4b71b2e2c870b1a6e741b1__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenSmBoldIcon);
export default ForwardRef;
