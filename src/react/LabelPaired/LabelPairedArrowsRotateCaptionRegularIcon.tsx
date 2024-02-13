import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateCaptionRegularIcon = (
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
      <path d='M1.617 8.445h.024q-.095.282-.399.305-.398-.047-.351-.422.42-1.78 1.828-2.906Q4.102 4.297 6 4.25q1.454.024 2.625.703A5.2 5.2 0 0 1 10.5 6.805v-1.43q.023-.352.375-.375.352.023.375.375v2.25q-.023.352-.375.375h-2.25q-.352-.023-.375-.375.023-.352.375-.375h1.266a4.4 4.4 0 0 0-1.618-1.64Q7.265 5.023 6 5q-1.618.024-2.812.984-1.173.938-1.57 2.461m8.766 2.133v-.023q.07-.282.375-.305.398.047.351.422-.42 1.78-1.804 2.906Q7.898 14.703 6 14.75q-1.453-.024-2.625-.703A5.26 5.26 0 0 1 1.5 12.219v1.406q-.023.352-.375.375-.328-.023-.375-.375v-2.25q.046-.352.375-.375h2.25q.352.023.375.375-.023.352-.375.375H2.109q.586 1.031 1.618 1.64Q4.734 13.977 6 14q1.617-.024 2.813-.984 1.17-.938 1.57-2.438' />
    </g>
    <defs>
      <clipPath id='67043bdf42fff285bdae8551970c267a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateCaptionRegularIcon);
export default ForwardRef;
