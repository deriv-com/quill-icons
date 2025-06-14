import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 3.5c.398 0 .75.352.75.75v.469c1.71.328 3 1.851 3 3.656v.61c0 1.054.352 2.085 1.008 2.93l.351.42c.141.188.164.423.07.61a.55.55 0 0 1-.492.305H2.813a.56.56 0 0 1-.516-.305.58.58 0 0 1 .07-.61l.352-.42c.656-.845 1.031-1.876 1.031-2.93v-.61a3.724 3.724 0 0 1 3-3.656V4.25c0-.398.328-.75.75-.75m0 2.25a2.636 2.636 0 0 0-2.625 2.625v.61a5.74 5.74 0 0 1-.937 3.14h7.101a5.7 5.7 0 0 1-.914-3.14v-.61c0-1.43-1.195-2.625-2.625-2.625M9 14c0 .398-.164.797-.445 1.078A1.47 1.47 0 0 1 7.5 15.5c-.398 0-.797-.14-1.078-.422S6 14.398 6 14h3M0 8.188c0-.305.234-.563.563-.563h1.875A.57.57 0 0 1 3 8.188a.555.555 0 0 1-.562.562H.562A.54.54 0 0 1 0 8.188m12.563-.563h1.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562h-1.876A.54.54 0 0 1 12 8.188c0-.305.234-.563.563-.563m1.43-3.61c.14.282.023.61-.259.75l-1.5.75a.555.555 0 0 1-.75-.257.555.555 0 0 1 .258-.75l1.5-.75a.555.555 0 0 1 .75.258m-12.75.75a.555.555 0 0 1-.259-.75.555.555 0 0 1 .75-.257l1.5.75c.282.14.399.469.258.75a.555.555 0 0 1-.75.258z' />
    </g>
    <defs>
      <clipPath id='fedf06cc2184b952c603d796c7446af8__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnCaptionBoldIcon);
export default ForwardRef;
