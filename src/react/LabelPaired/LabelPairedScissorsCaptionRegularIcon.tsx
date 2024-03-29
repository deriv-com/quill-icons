import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsCaptionRegularIcon = (
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
      <path d='M11.906 13.883c-.14.164-.375.164-.539.047l-3.562-3.047c-.164-.117-.164-.375-.047-.516a.377.377 0 0 1 .539-.047l3.562 3.024c.164.14.164.375.047.539M6.726 9.03l4.641-3.937c.164-.117.399-.117.54.047.116.164.116.398-.048.539l-6.984 5.883c.234.374.375.843.375 1.312A2.636 2.636 0 0 1 2.625 15.5 2.62 2.62 0 0 1 0 12.875a2.636 2.636 0 0 1 2.625-2.625c.68 0 1.313.281 1.781.727L6.141 9.5 4.406 8.047a2.58 2.58 0 0 1-1.781.703A2.62 2.62 0 0 1 0 6.125 2.636 2.636 0 0 1 2.625 3.5c1.43 0 2.625 1.195 2.625 2.648 0 .47-.14.938-.375 1.313zM2.626 8c.656 0 1.266-.352 1.617-.937a1.91 1.91 0 0 0 0-1.875c-.351-.563-.96-.938-1.617-.938-.68 0-1.29.375-1.64.938a1.91 1.91 0 0 0 0 1.875c.35.585.96.937 1.64.937m0 3c-.68 0-1.29.375-1.64.938a1.91 1.91 0 0 0 0 1.874c.35.586.96.938 1.64.938.656 0 1.266-.352 1.617-.937a1.91 1.91 0 0 0 0-1.876c-.351-.562-.96-.937-1.617-.937' />
    </g>
    <defs>
      <clipPath id='78de2bb531e900bbd1923403c9a2b8e8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsCaptionRegularIcon);
export default ForwardRef;
