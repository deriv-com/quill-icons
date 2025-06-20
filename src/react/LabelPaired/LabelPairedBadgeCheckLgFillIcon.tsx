import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 5.5c1.406 0 2.656.82 3.281 2.031a3.72 3.72 0 0 1 3.79.899 3.72 3.72 0 0 1 .898 3.789C19.179 12.844 20 14.094 20 15.5a3.73 3.73 0 0 1-2.031 3.32 3.65 3.65 0 0 1-.899 3.75c-1.015 1.016-2.5 1.328-3.789.938A3.68 3.68 0 0 1 10 25.5c-1.445 0-2.695-.781-3.32-1.992a3.75 3.75 0 0 1-3.75-.938 3.75 3.75 0 0 1-.938-3.75C.782 18.195 0 16.945 0 15.5a3.68 3.68 0 0 1 1.992-3.281c-.39-1.29-.078-2.774.938-3.79a3.65 3.65 0 0 1 3.75-.898A3.73 3.73 0 0 1 10 5.5m4.414 8.164a.92.92 0 0 0 0-1.289c-.39-.39-.976-.39-1.328 0L8.75 16.711l-1.836-1.836c-.39-.39-.976-.39-1.328 0a.856.856 0 0 0 0 1.29l2.5 2.5c.351.39.937.39 1.328 0z' />
    </g>
    <defs>
      <clipPath id='eb607b35b0b2bbfad9fce32ea9d550d9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckLgFillIcon);
export default ForwardRef;
