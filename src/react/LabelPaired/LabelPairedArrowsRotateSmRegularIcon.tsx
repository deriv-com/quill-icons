import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateSmRegularIcon = (
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
      <path d='M1.887 9.52a.46.46 0 0 1-.438.355c-.273 0-.492-.219-.437-.492C1.64 6.676 4.074 4.625 7 4.625c2.215 0 4.156 1.203 5.25 2.98V5.937a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v2.625a.45.45 0 0 1-.437.437h-2.625a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.476A5.252 5.252 0 0 0 1.887 9.52m10.199 2.488a.494.494 0 0 1 .465-.383c.246 0 .465.246.41.52A6.13 6.13 0 0 1 7 16.875a6.09 6.09 0 0 1-5.25-2.953v1.64a.43.43 0 0 1-.437.438.43.43 0 0 1-.438-.437v-2.626a.45.45 0 0 1 .438-.437h2.624a.45.45 0 0 1 .438.438.43.43 0 0 1-.437.437H2.434C3.336 14.961 5.03 16 7 16c2.46 0 4.54-1.695 5.086-3.992' />
    </g>
    <defs>
      <clipPath id='8d1a8198b784d874ae119af740040750__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateSmRegularIcon);
export default ForwardRef;
