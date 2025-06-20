import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchXlRegularIcon = (
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
      <path d='M12 7.5v.75c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 6 8.25V7.5H4.5C3.656 7.5 3 8.203 3 9v18c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5V9c0-.797-.703-1.5-1.5-1.5zm-1.5 0h-3v.75h3zM1.5 9c0-1.64 1.313-3 3-3h9c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3h-9c-1.687 0-3-1.312-3-3z' />
    </g>
    <defs>
      <clipPath id='9d01e7d6a5ecd653418920a46db9bc7b__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchXlRegularIcon);
export default ForwardRef;
