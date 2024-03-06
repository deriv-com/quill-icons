import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.4 5.4 0 0 0-.703-2.625 5.4 5.4 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.4 5.4 0 0 0-1.922 1.922A5.4 5.4 0 0 0 .75 9.5q.024 1.43.703 2.625a5.4 5.4 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.4 5.4 0 0 0 1.922-1.922A5.4 5.4 0 0 0 11.25 9.5M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m6.094-2.625a.79.79 0 0 0-.61.258.9.9 0 0 0-.257.61L5.25 8.75h1.125q.352.023.375.375-.023.352-.375.375H5.25a3.6 3.6 0 0 1-.422 1.5h2.86q.351.023.375.375-.024.352-.376.375H4.126a.37.37 0 0 1-.328-.187.4.4 0 0 1 .023-.399l.211-.305q.423-.632.469-1.359h-.375q-.352-.023-.375-.375.023-.352.375-.375H4.5l-.023-1.008q.022-.68.468-1.148.446-.445 1.149-.469.375 0 .703.164l.492.258q.305.188.164.492-.164.305-.492.164l-.492-.234a.8.8 0 0 0-.375-.094' />
    </g>
    <defs>
      <clipPath id='c19bbbd4d71f52b92e39bd114240fe67__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingCaptionRegularIcon);
export default ForwardRef;
