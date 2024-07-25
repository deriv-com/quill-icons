import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpCaptionBoldIcon = (
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
      <path d='m6.398 4.602 4.477 4.523a.513.513 0 0 1 0 .773.513.513 0 0 1-.773 0L5.977 5.797 1.875 9.898a.513.513 0 0 1-.773 0c-.235-.21-.235-.562 0-.796l4.5-4.5c.21-.211.562-.211.796 0m4.5 9-.023.023a.513.513 0 0 1 0 .773.513.513 0 0 1-.773 0l-4.125-4.101-4.102 4.101a.513.513 0 0 1-.773 0c-.235-.21-.235-.562 0-.796l4.5-4.5c.21-.211.562-.211.796 0z' />
    </g>
    <defs>
      <clipPath id='51aa28e997fd15279639dc19b5d02635__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionBoldIcon);
export default ForwardRef;
