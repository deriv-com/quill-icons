import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaCaptionBoldIcon = (
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
      <path d='M1.125 4.813v8.25q.047.514.563.562h9.75q.514.047.562.563-.047.514-.562.562h-9.75q-.727-.024-1.196-.492-.468-.47-.492-1.195v-8.25q.047-.516.563-.563.514.047.562.563m5.578 3.984L5.25 7.344 3.375 9.219v2.156h6.75V9.547L8.93 8.164l-.633.633a1.09 1.09 0 0 1-.797.328q-.468 0-.797-.328M7.5 8l.797-.797.14-.14a.78.78 0 0 1 .54-.211.77.77 0 0 1 .539.257l1.453 1.711q.28.305.281.727v2.203a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21H3a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V9.219q0-.469.328-.797l2.133-2.133a.74.74 0 0 1 .539-.234q.305 0 .54.234l.913.914z' />
    </g>
    <defs>
      <clipPath id='cbf4c88b4ed068178fee104c612eec9d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaCaptionBoldIcon);
export default ForwardRef;
