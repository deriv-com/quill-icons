import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCaptionBoldIcon = (
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
      <path d='M2.063 4.25h8.625q.514.047.562.563-.047.514-.562.562H2.063a.85.85 0 0 0-.657.281.85.85 0 0 0-.281.657v6.375q0 .398.281.656.257.28.657.281h7.874a.85.85 0 0 0 .657-.281.85.85 0 0 0 .281-.656V8.561a.85.85 0 0 0-.281-.656.85.85 0 0 0-.656-.281H2.811q-.514-.047-.562-.562.047-.516.563-.563h7.124q.868.024 1.454.61.585.585.609 1.452v4.126q-.024.867-.61 1.453-.585.585-1.453.609H2.064q-.868-.024-1.454-.61-.585-.585-.609-1.453V6.314q.024-.868.61-1.454.585-.585 1.453-.609M9 11.375a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21q.21.212.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21' />
    </g>
    <defs>
      <clipPath id='df76ee1b48f0c140__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCaptionBoldIcon);
export default ForwardRef;
