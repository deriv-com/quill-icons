import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.484 5.734 7.5 10.422a4.993 4.993 0 0 1 5-4.922c2.734 0 5 2.266 5 5 0 2.344-1.602 4.258-3.71 4.844l10.82 8.515c.43.313.507.899.156 1.29-.313.43-.899.507-1.29.156L.353 7.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m9.844 7.696c.352.117.742.195 1.172.195a3.11 3.11 0 0 0 3.125-3.125A3.134 3.134 0 0 0 12.5 7.375 3.11 3.11 0 0 0 9.375 10.5c0 .703.195 1.328.547 1.836zm-1.015 3.984 2.343 1.836h-1.953c-2.578 0-4.687 1.914-5.039 4.375h12.578l2.266 1.797c-.156.078-.274.078-.43.078H4.883a1.134 1.134 0 0 1-1.133-1.133c0-3.71 2.89-6.758 6.563-6.953' />
    </g>
    <defs>
      <clipPath id='e0ad52ccd8e03df087511fe2e1bb8157__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashLgBoldIcon);
export default ForwardRef;
