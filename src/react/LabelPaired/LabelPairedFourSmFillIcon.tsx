import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.418 5.883-2.926 6.18H7.25V8.124c0-.465.383-.875.875-.875A.9.9 0 0 1 9 8.125v3.938h.875a.9.9 0 0 1 .875.874c0 .493-.41.876-.875.876H9V16c0 .492-.41.875-.875.875A.864.864 0 0 1 7.25 16v-2.187H1.125c-.3 0-.602-.137-.766-.383-.136-.274-.164-.575-.027-.848l3.5-7.437a.87.87 0 0 1 1.148-.438c.438.219.63.738.438 1.176' />
    </g>
    <defs>
      <clipPath id='51a719591fc0ed71efc315238c5037f3__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourSmFillIcon);
export default ForwardRef;
