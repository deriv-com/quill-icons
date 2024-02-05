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
      <path d='M11.906 13.86q-.234.257-.515.046l-3.563-3.023q-.258-.258-.047-.54.235-.233.516-.023l3.562 3.024q.258.234.047.515m-5.18-4.852 4.665-3.914q.28-.21.515.047.21.28-.047.515L4.9 11.54q.351.586.351 1.336-.024 1.125-.773 1.852-.727.75-1.852.773-1.125-.024-1.852-.773Q.023 14 0 12.875q.024-1.125.773-1.852.727-.75 1.852-.773 1.055.024 1.781.703L6.141 9.5 4.406 8.047q-.726.68-1.781.703Q1.5 8.726.773 7.977.023 7.25 0 6.125.024 5 .773 4.273q.727-.75 1.852-.773 1.125.024 1.852.773.75.727.773 1.852 0 .75-.352 1.336zM2.626 8q1.055-.024 1.617-.937.516-.937 0-1.875-.562-.915-1.617-.938-1.054.024-1.617.938-.516.938 0 1.875.563.913 1.617.937m0 3q-1.054.023-1.617.938-.516.937 0 1.874.563.915 1.617.938 1.055-.024 1.617-.937.516-.938 0-1.876-.562-.913-1.617-.937' />
    </g>
    <defs>
      <clipPath id='128777816e8f0de5a100e7c706f79fff__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsCaptionRegularIcon);
export default ForwardRef;
