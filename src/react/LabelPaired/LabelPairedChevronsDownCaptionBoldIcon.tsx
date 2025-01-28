import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownCaptionBoldIcon = (
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
      <path d='m5.602 14.398-4.5-4.5c-.235-.21-.235-.562 0-.796.21-.211.562-.211.796 0L6 13.227l4.102-4.102c.21-.234.562-.234.796 0a.55.55 0 0 1 0 .773l-4.523 4.5a.513.513 0 0 1-.773 0m-4.5-9c-.235-.21-.235-.562 0-.796.21-.211.562-.211.796 0L6 8.727l4.102-4.102c.21-.234.562-.234.796 0a.55.55 0 0 1 0 .773l-4.523 4.5a.513.513 0 0 1-.773 0z' />
    </g>
    <defs>
      <clipPath id='6a3c0b7dc7d07b8fe1218c8c2d554636__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownCaptionBoldIcon);
export default ForwardRef;
