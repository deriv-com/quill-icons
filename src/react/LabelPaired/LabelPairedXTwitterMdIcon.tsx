import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXTwitterMdIcon = (
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
      <path d='M12.156 5.5h2.188L9.53 11.031 15.22 18.5H10.78l-3.5-4.531L3.313 18.5h-2.22l5.157-5.875L.813 5.5h4.562L8.5 9.656zm-.781 11.688h1.219L4.719 6.75H3.406z' />
    </g>
    <defs>
      <clipPath id='a9a25286d2f3706887052f6ae8d8f6ad__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterMdIcon);
export default ForwardRef;
