import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckCaptionBoldIcon = (
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
      <path d='M1.75 5.375a.385.385 0 0 0-.375.375v7.5c0 .21.164.375.375.375h7.5a.385.385 0 0 0 .375-.375v-7.5a.4.4 0 0 0-.375-.375zm-1.5.375c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zm7.898 2.648-3 3c-.234.235-.585.235-.796 0l-1.5-1.5a.513.513 0 0 1 0-.773c.21-.234.562-.234.796 0l1.102 1.102 2.602-2.625c.21-.211.562-.211.773 0 .234.234.234.585 0 .796z' />
    </g>
    <defs>
      <clipPath id='4ba233d3475de624c2d40914ab17da1c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckCaptionBoldIcon);
export default ForwardRef;
