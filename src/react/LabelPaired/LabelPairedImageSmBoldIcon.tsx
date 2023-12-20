import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImageSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.25 5.938H1.75c-.273.018-.42.164-.437.437v8.75l.136-.164 2.188-3.063a.602.602 0 0 1 .52-.273c.218 0 .4.091.546.273l.82 1.176 2.27-2.953a.623.623 0 0 1 .52-.246c.218 0 .391.082.519.246l3.719 4.813.136.191v-8.75c-.018-.273-.164-.42-.437-.437M1.75 4.625h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52m2.188 5.25c-.493-.018-.876-.237-1.149-.656a1.395 1.395 0 0 1 0-1.313c.273-.419.656-.638 1.148-.656.493.018.876.237 1.149.656.219.438.219.875 0 1.313-.274.419-.656.638-1.149.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageSmBoldIcon);
export default ForwardRef;
