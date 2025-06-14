import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationCaptionRegularIcon = (
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
      <path d='M.797 13.367c-.047.07-.047.14-.047.211 0 .235.188.445.422.445h9.633a.46.46 0 0 0 .445-.445q0-.105-.07-.21L6.469 5.28A.56.56 0 0 0 6 5a.57.57 0 0 0-.492.281zm-.656-.375 4.71-8.086c.235-.398.68-.656 1.149-.656.445 0 .89.258 1.125.656l4.71 8.086c.095.164.165.375.165.586a1.18 1.18 0 0 1-1.195 1.172H1.172A1.16 1.16 0 0 1 0 13.578c0-.21.047-.422.14-.586M6 7.25c.188 0 .375.188.375.375v3c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m-.562 5.25c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563' />
    </g>
    <defs>
      <clipPath id='b6c5691cbdf73e040f24dc0782c7e32f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationCaptionRegularIcon);
export default ForwardRef;
