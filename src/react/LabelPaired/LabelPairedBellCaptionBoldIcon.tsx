import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellCaptionBoldIcon = (
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
      <path d='M5.5 3.5c.398 0 .75.352.75.75v.469c1.71.328 3 1.851 3 3.656v.61c0 1.054.352 2.085 1.008 2.93l.351.42c.141.188.164.423.07.61a.55.55 0 0 1-.492.305H.813a.56.56 0 0 1-.516-.305.58.58 0 0 1 .07-.61l.352-.42c.656-.845 1.031-1.876 1.031-2.93v-.61a3.724 3.724 0 0 1 3-3.656V4.25c0-.398.328-.75.75-.75m0 2.25a2.636 2.636 0 0 0-2.625 2.625v.61a5.74 5.74 0 0 1-.937 3.14h7.101a5.7 5.7 0 0 1-.914-3.14v-.61c0-1.43-1.195-2.625-2.625-2.625M7 14c0 .398-.164.797-.445 1.078A1.47 1.47 0 0 1 5.5 15.5c-.398 0-.797-.14-1.078-.422S4 14.398 4 14h3' />
    </g>
    <defs>
      <clipPath id='e2eb13bc2155a50bb755ce63f2a7f992__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellCaptionBoldIcon);
export default ForwardRef;
