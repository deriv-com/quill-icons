import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingCaptionRegularIcon = (
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
      <path d='m9.445 13.46-2.133-2.132A2.34 2.34 0 0 1 6 11.75a2.34 2.34 0 0 1-1.312-.422l-2.133 2.133Q3.985 14.703 6 14.75q2.016-.046 3.445-1.29m.516-.515q1.242-1.43 1.289-3.445-.046-2.016-1.29-3.445L7.829 8.188q.399.562.422 1.312-.024.75-.422 1.313zm.539.516.258.281q.234.258 0 .516-.258.234-.516 0L9.961 14Q8.344 15.453 6 15.5q-2.344-.047-3.96-1.5l-.282.258q-.258.234-.516 0-.234-.258 0-.516l.258-.281Q.047 11.82 0 9.5q.046-2.32 1.5-3.96l-.258-.282q-.234-.258 0-.516.258-.234.516 0L2.039 5Q3.68 3.547 6 3.5q2.32.046 3.96 1.5l.282-.258q.258-.234.516 0 .234.258 0 .516l-.258.281Q11.953 7.157 12 9.5q-.047 2.345-1.5 3.96M9.445 5.539Q8.015 4.297 6 4.25q-2.016.046-3.445 1.29l2.133 2.132A2.34 2.34 0 0 1 6 7.25q.75.024 1.313.422zm-5.273 5.274A2.34 2.34 0 0 1 3.75 9.5q.024-.75.422-1.312L2.039 6.055Q.797 7.485.75 9.5q.046 2.016 1.29 3.445zM4.5 9.5q.024.844.75 1.29.75.42 1.5 0 .726-.446.75-1.29-.024-.843-.75-1.29-.75-.42-1.5 0-.726.446-.75 1.29' />
    </g>
    <defs>
      <clipPath id='f48c2565d6f6479bf19046f78517bc2c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingCaptionRegularIcon);
export default ForwardRef;
