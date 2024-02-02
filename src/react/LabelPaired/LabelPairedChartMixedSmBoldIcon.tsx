import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedSmBoldIcon = (
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
      <path d='M13.781 5.773 9.187 9.711q-.437.328-.874 0L5.195 6.977 1.012 9.766q-.52.273-.903-.192-.273-.52.192-.902l4.594-3.063q.41-.245.793.055l3.062 2.68 4.156-3.555q.492-.356.93.055.356.492-.055.93m-8.312 9.79v-4.376q-.027-.19-.219-.218-.191.026-.219.219v4.374q.027.192.219.22.191-.028.219-.22M5.25 9.875q.547.027.93.383.355.383.383.93v4.374a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93v-4.374q.028-.547.383-.93.383-.356.93-.383m-3.281 5.688v-1.75q-.027-.192-.219-.22-.191.028-.219.22v1.75q.027.19.219.218.191-.026.219-.219M1.75 12.5q.547.027.93.383.355.383.382.93v1.75a1.43 1.43 0 0 1-.382.93 1.43 1.43 0 0 1-.93.382 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93v-1.75q.027-.546.382-.93.383-.355.93-.382m7.219.438q-.027-.192-.219-.22-.191.028-.219.22v2.624q.027.192.219.22.191-.028.219-.22zm-1.531 0q.027-.548.382-.93.383-.356.93-.383.547.027.93.383.355.383.383.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93zm5.03 2.624v-4.374q-.027-.192-.218-.22-.191.028-.219.22v4.374q.027.192.219.22.191-.028.219-.22m-.218-5.687q.548.027.93.383.355.383.383.93v4.374a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93v-4.374q.028-.547.383-.93.383-.356.93-.383' />
    </g>
    <defs>
      <clipPath id='78254df43c5a6f63__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedSmBoldIcon);
export default ForwardRef;
