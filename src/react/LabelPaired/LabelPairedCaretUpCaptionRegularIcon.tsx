import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpCaptionRegularIcon = (
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
      <path d='M3.86 7.32 1.046 9.97c-.047.047-.047.07-.047.117 0 .094.07.164.164.164h5.649c.093 0 .187-.07.187-.164a.13.13 0 0 0-.07-.117L4.117 7.32A.13.13 0 0 0 4 7.25q-.105 0-.14.07m-.516-.562A.92.92 0 0 1 4 6.5c.234 0 .469.094.633.258L7.445 9.43a.9.9 0 0 1 .305.656.92.92 0 0 1-.937.914H1.164a.9.9 0 0 1-.914-.914c0-.234.094-.492.281-.656z' />
    </g>
    <defs>
      <clipPath id='1dedc94eadb57f3214c222931976569d__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpCaptionRegularIcon);
export default ForwardRef;
