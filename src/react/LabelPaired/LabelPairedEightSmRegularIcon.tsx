import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightSmRegularIcon = (
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
      <path d='M8.438 7.906a3.3 3.3 0 0 1-1.45 2.735c1.094.52 1.887 1.64 1.887 2.953a3.273 3.273 0 0 1-3.281 3.281H3.406a3.256 3.256 0 0 1-3.281-3.281c0-1.313.766-2.434 1.86-2.953A3.27 3.27 0 0 1 .562 7.906a3.273 3.273 0 0 1 3.28-3.281h1.313a3.29 3.29 0 0 1 3.282 3.281m-3.282 3.282h-1.75A2.41 2.41 0 0 0 1 13.594 2.39 2.39 0 0 0 3.406 16h2.188A2.41 2.41 0 0 0 8 13.594a2.43 2.43 0 0 0-2.406-2.406zm0-.876a2.41 2.41 0 0 0 2.407-2.406A2.43 2.43 0 0 0 5.156 5.5H3.844a2.41 2.41 0 0 0-2.406 2.406 2.387 2.387 0 0 0 2.378 2.407h1.34' />
    </g>
    <defs>
      <clipPath id='164fe1a561f8b779b1b2cbb2565b9128__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightSmRegularIcon);
export default ForwardRef;
