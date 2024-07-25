import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 5h11.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H2.75c-.719 0-1.25.563-1.25 1.25v8.5c0 .719.531 1.25 1.25 1.25h10.5c.688 0 1.25-.531 1.25-1.25v-5.5c0-.687-.562-1.25-1.25-1.25h-9.5A.72.72 0 0 1 3 8.75.74.74 0 0 1 3.75 8h9.5C14.75 8 16 9.25 16 10.75v5.5c0 1.531-1.25 2.75-2.75 2.75H2.75A2.734 2.734 0 0 1 0 16.25v-8.5C0 6.25 1.219 5 2.75 5M12 14.5c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1' />
    </g>
    <defs>
      <clipPath id='27651110b4a7c6d75a4ccc0bc4f0b2ea__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletMdBoldIcon);
export default ForwardRef;
