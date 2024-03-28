import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMinimizeLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 21.75h17.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H1.25C.547 24.25 0 23.703 0 23c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='df25cf29a1885def9e8b6be3d6089f6b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeLgFillIcon);
export default ForwardRef;
