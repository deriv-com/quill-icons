import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.375 20.5H1.5v1.25c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25V20.5zm-.078-1.25H16.5v-10c0-.664-.586-1.25-1.25-1.25H2.75c-.703 0-1.25.586-1.25 1.25v10h3.164c.313-1.406 1.563-2.5 3.086-2.5h2.5c1.484 0 2.773 1.094 3.047 2.5m-7.344 0h6.055c-.274-.703-.977-1.25-1.758-1.25h-2.5c-.82 0-1.523.547-1.797 1.25m11.797-10v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5M10.25 13c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25M9 10.5c.86 0 1.68.508 2.148 1.25.43.781.43 1.758 0 2.5C10.68 15.031 9.86 15.5 9 15.5a2.54 2.54 0 0 1-2.187-1.25c-.43-.742-.43-1.719 0-2.5C7.28 11.008 8.102 10.5 9 10.5' />
    </g>
    <defs>
      <clipPath id='9e0b77855f4d7cdfe83f563ad00987e4__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserLgRegularIcon);
export default ForwardRef;
