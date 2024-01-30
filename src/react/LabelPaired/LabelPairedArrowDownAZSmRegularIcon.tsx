import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.426 14.113 4.8 16.738q-.3.274-.602 0l-2.625-2.625q-.273-.3 0-.601.3-.274.602 0l1.886 1.86V5.061q.029-.41.438-.437.41.027.438.438V15.37l1.886-1.86q.3-.273.602 0 .273.302 0 .602m4.457-9.242 1.75 3.473v.027l.437.875q.165.355-.191.574-.383.165-.574-.191L12.977 9h-2.954l-.328.629q-.219.355-.574.191-.355-.191-.191-.574l.41-.875h.027l1.75-3.5a.39.39 0 0 1 .383-.246q.273 0 .383.246M11.5 6.047l-1.04 2.078h2.08zm-1.75 5.578h3.5q.273 0 .383.246a.47.47 0 0 1-.027.465L10.651 16h2.598q.41.027.438.438-.028.41-.438.437h-3.5a.39.39 0 0 1-.383-.246.43.43 0 0 1 .055-.465l2.926-3.664H9.75q-.41-.027-.437-.437.027-.411.437-.438' />
    </g>
    <defs>
      <clipPath id='066d3f0d5377e654438e8651d5d50421__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZSmRegularIcon);
export default ForwardRef;
