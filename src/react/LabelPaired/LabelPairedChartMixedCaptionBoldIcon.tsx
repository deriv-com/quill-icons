import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedCaptionBoldIcon = (
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
      <path d='M11.79 5.258 7.851 8.633a.6.6 0 0 1-.727 0L4.453 6.289.867 8.656a.54.54 0 0 1-.773-.14.57.57 0 0 1 .14-.797l3.938-2.625a.564.564 0 0 1 .68.047L7.5 7.46l3.563-3.07a.584.584 0 0 1 .796.07.584.584 0 0 1-.07.797m-7.102 8.367v-3.75a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v3.75c0 .117.07.188.187.188.094 0 .188-.07.188-.188M4.5 8.75c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-3.75c0-.61.492-1.125 1.125-1.125m-2.812 4.875v-1.5a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v1.5c0 .117.07.188.187.188.094 0 .188-.07.188-.188M1.5 11c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-1.5C.375 11.515.867 11 1.5 11m6.188.375a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v2.25c0 .117.07.188.187.188.094 0 .188-.07.188-.188zm-1.313 0c0-.61.492-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125zm4.313 2.25v-3.75a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v3.75c0 .117.07.188.187.188.094 0 .188-.07.188-.188M10.5 8.75c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-3.75c0-.61.492-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='e8043e8937ee5292622a68fb026f62f5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedCaptionBoldIcon);
export default ForwardRef;
