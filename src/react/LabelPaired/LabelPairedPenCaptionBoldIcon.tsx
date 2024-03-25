import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCaptionBoldIcon = (
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
      <path d='M.844 11.96c.094-.327.281-.632.515-.866l7.125-7.125a1.514 1.514 0 0 1 2.133 0l.914.914c.07.07.14.164.188.234a1.495 1.495 0 0 1-.188 1.899L4.406 14.14c-.023.023-.07.046-.093.093a2.5 2.5 0 0 1-.774.422l-1.828.54-1.008.304a.53.53 0 0 1-.539-.164.48.48 0 0 1-.14-.54l.28-1.007zm1.078.33-.164.538-.375 1.29 1.289-.376.539-.164a.86.86 0 0 0 .398-.234l5.368-5.367-1.454-1.454-5.367 5.368c-.023 0-.023.023-.047.046-.093.094-.14.211-.187.352' />
    </g>
    <defs>
      <clipPath id='65c5eb154a6408882afedbe9a1d5db51__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCaptionBoldIcon);
export default ForwardRef;
