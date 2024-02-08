import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtCaptionRegularIcon = (
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
      <path d='M6 4.25q-1.476.024-2.648.727a4.9 4.9 0 0 0-1.875 1.875Q.773 8.023.75 9.5q.024 1.476.727 2.648a4.9 4.9 0 0 0 1.875 1.875q1.171.704 2.648.727.352.023.375.375-.023.352-.375.375-1.688-.024-3.023-.82A5.94 5.94 0 0 1 .82 12.523Q.024 11.188 0 9.5q.024-1.688.82-3.023A5.94 5.94 0 0 1 2.977 4.32Q4.312 3.524 6 3.5q1.688.025 3.023.82a5.95 5.95 0 0 1 2.157 2.157q.796 1.335.82 3.023v.563q-.024.867-.61 1.453-.585.585-1.453.609-.585 0-1.078-.305a1.93 1.93 0 0 1-.726-.773Q7.359 12.078 6 12.125q-1.125-.024-1.852-.773-.75-.727-.773-1.852.024-1.125.773-1.852.727-.75 1.852-.773 1.125.024 1.875.797v-.047q.023-.352.375-.375.352.023.375.375v2.438q.023.562.375.937.375.352.938.375.562-.023.937-.375.352-.375.375-.937V9.5q-.024-1.476-.727-2.648a4.9 4.9 0 0 0-1.875-1.875Q7.477 4.273 6 4.25M7.875 9.5q-.024-1.055-.937-1.617-.937-.516-1.875 0-.915.562-.938 1.617.024 1.054.938 1.617.938.516 1.875 0 .913-.562.937-1.617' />
    </g>
    <defs>
      <clipPath id='d36aae5176fce6e2d0f24f1a5187b194__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtCaptionRegularIcon);
export default ForwardRef;
