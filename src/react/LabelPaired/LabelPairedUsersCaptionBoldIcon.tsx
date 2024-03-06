import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersCaptionBoldIcon = (
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
      <path d='M3.375 7.25q-1.054-.024-1.617-.937-.516-.937 0-1.875.563-.915 1.617-.938 1.055.024 1.617.938.516.938 0 1.875-.562.913-1.617.937m8.625 0q-1.054-.024-1.617-.937-.516-.937 0-1.875.563-.915 1.617-.938 1.054.024 1.617.938.516.938 0 1.875-.562.913-1.617.937M0 10.508q.024-1.079.727-1.781.703-.704 1.78-.727h.985q.563 0 1.055.234a3 3 0 0 0-.047.516q.046 1.383 1.008 2.25H.492q-.445-.047-.492-.492M9.492 11q.96-.867 1.008-2.25 0-.258-.047-.516Q10.945 8 11.508 8h.984q1.079.024 1.781.727.704.703.727 1.78-.047.447-.492.493zM7.5 7.625q-.633.024-.984.563-.282.562 0 1.124.351.54.984.563.633-.024.984-.562.282-.563 0-1.126a1.17 1.17 0 0 0-.984-.562M7.5 11q-.609 0-1.125-.305A2.255 2.255 0 0 1 5.25 8.75a2.26 2.26 0 0 1 1.125-1.945A2.17 2.17 0 0 1 7.5 6.5q.609 0 1.125.305.516.304.82.82.305.54.305 1.125a2.26 2.26 0 0 1-1.125 1.945A2.17 2.17 0 0 1 7.5 11m-1.383 1.875a2.05 2.05 0 0 0-1.219.422q-.538.421-.703 1.078h6.61a1.93 1.93 0 0 0-.703-1.078 2.05 2.05 0 0 0-1.22-.422zm0-1.125h2.766q1.313.024 2.203.914T12 14.867q-.047.586-.633.633H3.633q-.586-.047-.633-.633.023-1.313.914-2.203.89-.89 2.203-.914' />
    </g>
    <defs>
      <clipPath id='41264d85842071d67ec3dc79111e1e3b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersCaptionBoldIcon);
export default ForwardRef;
