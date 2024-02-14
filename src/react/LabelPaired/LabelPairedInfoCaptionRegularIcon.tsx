import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={18}
    viewBox='0 0 5 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21q.21.212.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54M.625 7.625Q.648 7.273 1 7.25h1.5q.352.023.375.375V14h1.5q.352.023.375.375-.023.352-.375.375H.625q-.352-.023-.375-.375.023-.352.375-.375h1.5V8H1q-.352-.023-.375-.375' />
    </g>
    <defs>
      <clipPath id='d0fa67d59f9248235f5affb3c678ff64__a'>
        <path d='M0 0h5v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionRegularIcon);
export default ForwardRef;
