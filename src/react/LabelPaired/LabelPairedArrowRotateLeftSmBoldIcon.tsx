import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.094 9.875a.63.63 0 0 1-.657-.656V5.28c0-.355.274-.656.657-.656.355 0 .656.3.656.656v2.215l.547-.656C3.418 5.5 5.086 4.625 7 4.625c3.363 0 6.125 2.762 6.125 6.125 0 3.39-2.762 6.125-6.125 6.125a6.15 6.15 0 0 1-3.691-1.203.684.684 0 0 1-.137-.93.66.66 0 0 1 .93-.137A4.8 4.8 0 0 0 7 15.563a4.8 4.8 0 0 0 4.813-4.812A4.82 4.82 0 0 0 7 5.938c-1.504 0-2.816.683-3.719 1.75l-.738.875h2.488c.356 0 .657.3.657.656 0 .383-.301.656-.657.656z' />
    </g>
    <defs>
      <clipPath id='a18ccb1bdb20889841f7d6869c5c20ca__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftSmBoldIcon);
export default ForwardRef;
