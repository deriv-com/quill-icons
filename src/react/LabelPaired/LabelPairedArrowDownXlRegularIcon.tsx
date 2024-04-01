import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.438 28.313-8.25-8.25c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L8.25 25.97V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v17.719l6.938-6.985c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078l-8.25 8.25c-.282.282-.797.282-1.078 0' />
    </g>
    <defs>
      <clipPath id='2c148c3131ef2fd157d43e275fff4d45__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownXlRegularIcon);
export default ForwardRef;
