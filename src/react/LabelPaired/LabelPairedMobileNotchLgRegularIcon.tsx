import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 6.75v.625c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25V6.75H3.75c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25h7.5c.664 0 1.25-.547 1.25-1.25V8c0-.664-.586-1.25-1.25-1.25zm-1.25 0h-2.5v.625h2.5zM1.25 8c0-1.367 1.094-2.5 2.5-2.5h7.5c1.367 0 2.5 1.133 2.5 2.5v15c0 1.406-1.133 2.5-2.5 2.5h-7.5a2.47 2.47 0 0 1-2.5-2.5z' />
    </g>
    <defs>
      <clipPath id='8be94b15ddb595d84ffe045748f377a8__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchLgRegularIcon);
export default ForwardRef;
