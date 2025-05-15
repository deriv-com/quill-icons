import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.117 11.703 6.93 9.055c.047-.047.047-.07.047-.117 0-.094-.07-.188-.165-.188H1.165c-.094 0-.164.094-.164.188 0 .046 0 .07.047.117l2.812 2.648c.024.047.07.047.141.047.047 0 .094 0 .117-.047m.516.563c-.164.164-.399.234-.633.234-.258 0-.492-.07-.656-.234L.53 9.594a.89.89 0 0 1-.281-.656A.92.92 0 0 1 1.164 8l5.649.023a.92.92 0 0 1 .937.915.9.9 0 0 1-.305.656z' />
    </g>
    <defs>
      <clipPath id='87f48d598224f8bd0a5e2807bdddd3f5__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionRegularIcon);
export default ForwardRef;
