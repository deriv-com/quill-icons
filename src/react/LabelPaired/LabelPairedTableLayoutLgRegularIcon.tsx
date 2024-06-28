import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutLgRegularIcon = (
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
      <path d='M17.5 8h-15c-.703 0-1.25.586-1.25 1.25v2.5h17.5v-2.5c0-.664-.586-1.25-1.25-1.25M1.25 21.75c0 .703.547 1.25 1.25 1.25h3.75V13h-5zM7.5 23h10c.664 0 1.25-.547 1.25-1.25V13H7.5zm-5-16.25h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5' />
    </g>
    <defs>
      <clipPath id='e1dde42f69112b86a7ca3b6c45b241ba__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutLgRegularIcon);
export default ForwardRef;
