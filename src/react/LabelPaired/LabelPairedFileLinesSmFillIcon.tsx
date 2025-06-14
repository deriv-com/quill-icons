import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLinesSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 3.75h4.375v3.5c0 .492.383.875.875.875h3.5V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m5.25 0 3.5 3.5h-3.5zm-3.937 7a.45.45 0 0 0-.438.438c0 .246.191.437.438.437h4.374a.45.45 0 0 0 .438-.437.47.47 0 0 0-.437-.438zm0 1.75a.45.45 0 0 0-.438.438c0 .246.191.437.438.437h4.374a.45.45 0 0 0 .438-.437.47.47 0 0 0-.437-.438zm0 1.75a.45.45 0 0 0-.438.438c0 .246.191.437.438.437h4.374a.45.45 0 0 0 .438-.437.47.47 0 0 0-.437-.438z' />
    </g>
    <defs>
      <clipPath id='dbcf05167bf5a596eea4024add8c68b5__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLinesSmFillIcon);
export default ForwardRef;
