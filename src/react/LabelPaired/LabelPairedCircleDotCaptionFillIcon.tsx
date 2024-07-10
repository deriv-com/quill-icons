import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDotCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m0-8.25c-.82 0-1.547.445-1.969 1.125a2.27 2.27 0 0 0 0 2.25A2.27 2.27 0 0 0 6 11.75c.797 0 1.523-.422 1.945-1.125a2.27 2.27 0 0 0 0-2.25C7.523 7.695 6.797 7.25 6 7.25' />
    </g>
    <defs>
      <clipPath id='dd91ad25a9b6bacd6d41314e3e1f2647__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotCaptionFillIcon);
export default ForwardRef;
