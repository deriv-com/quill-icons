import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 9.875c-.71 0-1.367-.273-1.832-.71l-2.57 1.284c0 .082.027.192.027.301 0 .137-.027.219-.027.328l2.57 1.285A2.7 2.7 0 0 1 10 11.625a2.626 2.626 0 1 1-2.625 2.625v-.3l-2.57-1.286A2.67 2.67 0 0 1 3 13.375a2.626 2.626 0 0 1 0-5.25c.684 0 1.34.3 1.805.738l2.57-1.285V7.25A2.626 2.626 0 1 1 10 9.875' />
    </g>
    <defs>
      <clipPath id='45450b7f1f4fa1a8cc55be7c4fb3c5ca__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesSmFillIcon);
export default ForwardRef;
