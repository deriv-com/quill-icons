import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMenuHamburger1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M13.539 12c.254 0 .461.224.461.5s-.207.5-.461.5H2.462C2.207 13 2 12.776 2 12.5s.207-.5.462-.5zm0-4.5c.254 0 .461.224.461.5s-.207.5-.461.5H2.462C2.207 8.5 2 8.276 2 8s.207-.5.462-.5zm0-4.5c.254 0 .461.224.461.5s-.207.5-.461.5H2.462C2.207 4 2 3.776 2 3.5s.207-.5.462-.5z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyMenuHamburger1pxIcon);
export default ForwardRef;
