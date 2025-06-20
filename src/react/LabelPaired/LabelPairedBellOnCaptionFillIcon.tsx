import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnCaptionFillIcon = (
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
      <path d='M7.5 3.5c.398 0 .75.352.75.75v.469c1.71.328 3 1.851 3 3.656v.445c0 1.102.398 2.18 1.125 3l.164.188c.211.234.258.539.14.82a.76.76 0 0 1-.679.422H3c-.305 0-.586-.164-.703-.422a.76.76 0 0 1 .14-.82l.165-.188a4.56 4.56 0 0 0 1.148-3v-.445a3.724 3.724 0 0 1 3-3.656V4.25c0-.398.328-.75.75-.75m1.055 11.578A1.47 1.47 0 0 1 7.5 15.5c-.398 0-.797-.14-1.078-.422S6 14.398 6 14h3c0 .398-.164.797-.445 1.078M0 8.188c0-.305.234-.563.563-.563h1.875A.57.57 0 0 1 3 8.188a.555.555 0 0 1-.562.562H.562A.54.54 0 0 1 0 8.188m12.563-.563h1.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562h-1.876A.54.54 0 0 1 12 8.188c0-.305.234-.563.563-.563m1.43-3.61c.14.282.023.61-.259.75l-1.5.75a.555.555 0 0 1-.75-.257.555.555 0 0 1 .258-.75l1.5-.75a.555.555 0 0 1 .75.258m-12.75.75a.555.555 0 0 1-.259-.75.555.555 0 0 1 .75-.257l1.5.75c.282.14.399.469.258.75a.555.555 0 0 1-.75.258z' />
    </g>
    <defs>
      <clipPath id='e07748236d2ce7cf6f587e6a913d4bc9__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnCaptionFillIcon);
export default ForwardRef;
