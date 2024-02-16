import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashCaptionBoldIcon = (
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
      <path d='M.914 3.617 4.5 6.43q.047-1.242.89-2.063.844-.843 2.11-.867 1.266.024 2.133.867.843.868.867 2.133a3.08 3.08 0 0 1-.633 1.852 3.04 3.04 0 0 1-1.594 1.054l6.516 5.086q.375.352.094.797-.352.375-.797.094L.21 4.508q-.375-.352-.094-.797.352-.375.797-.094M6.82 8.234q.305.141.68.141.797-.023 1.336-.54.515-.538.539-1.335-.023-.797-.54-1.336-.538-.516-1.335-.539-.797.023-1.336.54-.515.538-.539 1.335 0 .609.352 1.102zm-.633 2.391 1.43 1.125H6.422q-1.171.024-1.992.75-.844.727-1.032 1.875h7.547l1.36 1.078a.7.7 0 0 1-.258.047H2.953a.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493q.047-1.71 1.148-2.86 1.102-1.17 2.79-1.312' />
    </g>
    <defs>
      <clipPath id='02e21b70897b6b3b92232b0fe623758e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashCaptionBoldIcon);
export default ForwardRef;
