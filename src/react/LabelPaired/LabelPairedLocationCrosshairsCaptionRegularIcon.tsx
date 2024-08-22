import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsCaptionRegularIcon = (
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
      <path d='M6 3.5c.188 0 .375.188.375.375v1.148a4.51 4.51 0 0 1 4.102 4.102h1.148c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.148A4.51 4.51 0 0 1 6.375 14v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V14A4.514 4.514 0 0 1 1.5 9.875H.375A.37.37 0 0 1 0 9.5c0-.187.164-.375.375-.375H1.5a4.51 4.51 0 0 1 4.125-4.102V3.875c0-.187.164-.375.375-.375m-3.75 6a3.73 3.73 0 0 0 1.875 3.258c1.148.68 2.578.68 3.75 0A3.78 3.78 0 0 0 9.75 9.5c0-1.336-.727-2.555-1.875-3.234a3.7 3.7 0 0 0-3.75 0A3.72 3.72 0 0 0 2.25 9.5m5.25 0c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313m-3.75 0c0-.797.422-1.523 1.125-1.945a2.27 2.27 0 0 1 2.25 0c.68.422 1.125 1.148 1.125 1.945 0 .82-.445 1.547-1.125 1.969a2.27 2.27 0 0 1-2.25 0A2.27 2.27 0 0 1 3.75 9.5' />
    </g>
    <defs>
      <clipPath id='38f98b3d89cbb0c59aa97b5c2f9b3cc7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsCaptionRegularIcon);
export default ForwardRef;
