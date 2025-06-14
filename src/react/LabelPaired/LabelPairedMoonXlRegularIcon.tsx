import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonXlRegularIcon = (
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
      <path d='M8.906 9.14A9.01 9.01 0 0 0 1.5 18c0 5.016 3.984 9 8.953 9a9.3 9.3 0 0 0 4.406-1.125c-4.968-.422-8.906-4.64-8.906-9.75a9.74 9.74 0 0 1 2.953-6.984M12 8.157a.67.67 0 0 1-.328.797 8.22 8.22 0 0 0-4.219 7.172 8.23 8.23 0 0 0 8.25 8.25c.469 0 .938 0 1.406-.094.328-.047.657.094.797.375.14.328.094.657-.14.89a10.43 10.43 0 0 1-7.313 2.954C4.688 28.5 0 23.813 0 18 0 12.234 4.688 7.5 10.453 7.5c.281 0 .61.047.89.047.329.047.61.281.657.61' />
    </g>
    <defs>
      <clipPath id='1f51e26649919c0e7007c23bbbf5f1ee__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonXlRegularIcon);
export default ForwardRef;
