import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.04 5.21a1.584 1.584 0 0 0-2.227 0l-4.477 4.5c-1.031 1.032-1.031 2.696 0 3.704 1.008 1.031 2.672 1.031 3.703 0l3.563-3.562c.21-.211.562-.211.773 0 .234.234.234.585 0 .796l-3.54 3.563c-1.476 1.476-3.843 1.476-5.296 0-1.476-1.453-1.476-3.82 0-5.297l4.5-4.5c1.031-1.031 2.742-1.031 3.797 0 1.031 1.055 1.031 2.766 0 3.797l-4.313 4.312a1.76 1.76 0 0 1-2.625-.14 1.76 1.76 0 0 1 .141-2.344l3.563-3.562c.21-.211.562-.211.773 0 .234.234.234.585 0 .796l-3.54 3.563a.617.617 0 0 0-.046.844.626.626 0 0 0 .938.047l4.312-4.313c.61-.61.61-1.594 0-2.203' />
    </g>
    <defs>
      <clipPath id='ebbb62a9995d1f324efd62943f9f7f39__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipCaptionBoldIcon);
export default ForwardRef;
