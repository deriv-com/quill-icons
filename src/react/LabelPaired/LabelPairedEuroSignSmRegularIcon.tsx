import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.055 9.875H.563a.43.43 0 0 1-.438-.437A.45.45 0 0 1 .563 9h.683a6.13 6.13 0 0 1 5.879-4.375h1.34a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.34C4.828 5.5 2.887 6.977 2.148 9h5.415A.47.47 0 0 1 8 9.438a.45.45 0 0 1-.437.437H1.93c-.055.3-.055.602-.055.875 0 .3.027.602.055.875h5.633a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.148A5.28 5.28 0 0 0 7.125 16h1.34a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.34c-2.79 0-5.14-1.832-5.879-4.375H.563a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h.492C1 11.352 1 11.051 1 10.75c0-.273 0-.574.055-.875' />
    </g>
    <defs>
      <clipPath id='119bd4357b56b9fbe72d49822db031a7__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignSmRegularIcon);
export default ForwardRef;
