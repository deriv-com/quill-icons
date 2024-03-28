import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M4.102 7.602c.21-.211.562-.211.773 0l1.102 1.101 1.101-1.101c.234-.211.586-.211.797 0 .234.234.234.585 0 .796L6.773 9.5l1.102 1.102c.234.234.234.585 0 .796-.21.235-.562.235-.797 0l-1.101-1.101-1.102 1.101a.513.513 0 0 1-.773 0c-.235-.21-.235-.562 0-.796L5.203 9.5 4.102 8.398c-.235-.21-.235-.562 0-.796' />
    </g>
    <defs>
      <clipPath id='cad987a2188aac6fe546a6203b2e64b1__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkCaptionBoldIcon);
export default ForwardRef;
