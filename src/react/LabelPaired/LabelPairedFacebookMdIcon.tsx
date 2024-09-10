import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookMdIcon = (
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
      <path d='M16 12c0 4.094-3.094 7.469-7.031 7.969v-5.5h2.156L11.563 12H8.969v-.844c0-1.312.5-1.812 1.812-1.812.406 0 .719.031.906.031V7.188c-.343-.125-1.218-.22-1.718-.22-2.688 0-3.906 1.282-3.906 4V12H4.406v2.469h1.657v5.312A8.01 8.01 0 0 1 0 12c0-4.406 3.563-8 8-8 4.406 0 8 3.594 8 8' />
    </g>
    <defs>
      <clipPath id='7d0c4fddff9de8afd2dcd61119cd6cbd__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookMdIcon);
export default ForwardRef;
