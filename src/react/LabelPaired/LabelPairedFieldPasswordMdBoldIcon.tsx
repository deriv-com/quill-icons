import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 7.75c-.719 0-1.25.563-1.25 1.25v6c0 .719.531 1.25 1.25 1.25h14c.688 0 1.25-.531 1.25-1.25V9c0-.687-.562-1.25-1.25-1.25zM.25 9C.25 7.5 1.469 6.25 3 6.25h14c1.5 0 2.75 1.25 2.75 2.75v6c0 1.531-1.25 2.75-2.75 2.75H3A2.734 2.734 0 0 1 .25 15zm13.25 6.25a.72.72 0 0 1-.75-.75v-5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v5a.74.74 0 0 1-.75.75M6.25 12c0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094 0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.624.625 1.062m3 0c0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094 0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.624.625 1.062m3 0c0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094 0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.624.625 1.062' />
    </g>
    <defs>
      <clipPath id='5169434b0d8df9f95177838b99874759__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordMdBoldIcon);
export default ForwardRef;
