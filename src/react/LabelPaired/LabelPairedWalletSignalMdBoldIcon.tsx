import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalMdBoldIcon = (
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
      <path d='M0 7.75C0 6.25 1.219 5 2.75 5h11.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H2.75c-.719 0-1.25.563-1.25 1.25v8.5c0 .719.531 1.25 1.25 1.25H11V19H2.75A2.734 2.734 0 0 1 0 16.25zm3 1A.74.74 0 0 1 3.75 8h9.5C14.75 8 16 9.25 16 10.75v.938c-.5-.22-1-.376-1.5-.5v-.438c0-.687-.562-1.25-1.25-1.25h-9.5A.72.72 0 0 1 3 8.75m9 4a.74.74 0 0 1 .75-.75c4 0 7.25 3.25 7.25 7.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75c0-3.156-2.594-5.75-5.75-5.75a.72.72 0 0 1-.75-.75m0 3a.74.74 0 0 1 .75-.75A4.254 4.254 0 0 1 17 19.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75c0-1.5-1.25-2.75-2.75-2.75a.72.72 0 0 1-.75-.75M12 19c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='9efa089933a65c76aa77dfd7cb48b01e__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalMdBoldIcon);
export default ForwardRef;
