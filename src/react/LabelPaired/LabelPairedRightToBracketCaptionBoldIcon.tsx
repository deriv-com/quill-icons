import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketCaptionBoldIcon = (
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
      <path d='M4.5 12.078 7.078 9.5 4.5 6.945v1.242a.555.555 0 0 1-.562.563H1.124v1.5h2.813a.57.57 0 0 1 .562.563zM8.25 9.5c0 .281-.117.54-.305.727l-2.718 2.718a1.08 1.08 0 0 1-.774.305 1.06 1.06 0 0 1-1.078-1.078v-.797h-2.25A1.11 1.11 0 0 1 0 10.25v-1.5c0-.61.492-1.125 1.125-1.125h2.25v-.773c0-.61.469-1.102 1.078-1.102.281 0 .563.117.774.328l2.718 2.719c.188.187.305.445.305.703m-.187 4.125h1.874a.925.925 0 0 0 .938-.937V6.312a.94.94 0 0 0-.937-.937H8.062a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h1.874A2.08 2.08 0 0 1 12 6.313v6.375a2.066 2.066 0 0 1-2.062 2.062H8.062a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='127a86607de7ca3530743d3ee684bcc4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketCaptionBoldIcon);
export default ForwardRef;
