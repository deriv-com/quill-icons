import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 5H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V11q0 .328.21.54.212.21.54.21H9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5.75a.73.73 0 0 0-.21-.54A.73.73 0 0 0 9 5m-7.5 7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 11V5.75q.024-.632.445-1.055.423-.421 1.055-.445H9q.633.024 1.055.445.421.423.445 1.055V11a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H6.703L7.22 14h1.406q.352.023.375.375-.023.352-.375.375h-6.75q-.352-.023-.375-.375.023-.352.375-.375h1.43l.492-1.5zM4.078 14h2.344l-.516-1.5H4.594zm8.297-9q-.352.023-.375.375V6.5h2.25V5.375q-.023-.352-.375-.375zM12 7.25V8h2.25v-.75zm0 6.375q.023.352.375.375h1.5q.352-.023.375-.375V8.75H12zm-.75-8.25q.024-.468.328-.797.329-.304.797-.328h1.5q.469.024.797.328.304.328.328.797v8.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-1.5a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm1.875 6.563q-.516-.048-.562-.563.045-.516.562-.562.515.045.563.562-.048.515-.563.563' />
    </g>
    <defs>
      <clipPath id='d3147c2b46a5ea9296b27ddb5a54aa59__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerCaptionRegularIcon);
export default ForwardRef;
