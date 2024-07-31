import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyExitTimeIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={16} height={16} fill='#4BB4B3' rx={8} />
    <path
      fill='#fff'
      d='M3.798 2.667c.245 0 .444.199.444.444v.444h8.202c.491 0 .89.399.89.89v5.333c0 .49-.399.889-.89.889H4.242v2.222a.444.444 0 0 1-.444.444h-.02a.444.444 0 0 1-.445-.444V3.11c0-.245.2-.444.445-.444zM12.424 8h-1.818v1.778h1.818zM8.788 8H6.97v1.778h1.818zm1.818-1.778H8.788V8h1.818zm-3.636 0H5.152V8H6.97zm1.818-1.778H6.97v1.778h1.818zm3.636 0h-1.818v1.778h1.818z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyExitTimeIcon);
export default ForwardRef;
