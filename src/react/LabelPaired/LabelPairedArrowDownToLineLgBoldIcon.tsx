import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.063 24.25H.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h13.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937m-7.266-5.273-5-5.313a.97.97 0 0 1 .039-1.328c.39-.352.976-.352 1.328.039l3.399 3.594V7.688c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938v8.28l3.359-3.593c.351-.39.937-.39 1.328-.04.39.352.39.938.04 1.33l-5 5.312a.92.92 0 0 1-.665.273c-.273 0-.508-.078-.703-.273' />
    </g>
    <defs>
      <clipPath id='d483812e450c722e2df14968bf054e37__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineLgBoldIcon);
export default ForwardRef;
