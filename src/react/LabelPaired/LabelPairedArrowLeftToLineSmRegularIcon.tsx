import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 15.563V5.938q.027-.411.438-.438.41.027.437.438v9.625q-.027.41-.437.437-.411-.027-.438-.437m2.762-5.114 3.5-3.5q.3-.273.601 0 .274.3 0 .602l-2.734 2.762h7.684q.41.027.437.437-.027.41-.437.438H4.504l2.734 2.761q.274.3 0 .602-.3.273-.601 0l-3.5-3.5q-.275-.3 0-.602' />
    </g>
    <defs>
      <clipPath id='44a5db7d72581287d68f67c3462e2c05__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineSmRegularIcon);
export default ForwardRef;
