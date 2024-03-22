import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaCaptionFillIcon = (
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
      <path d='M1.5 5v7.875c0 .21.164.375.375.375h9.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875A1.85 1.85 0 0 1 0 12.875V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m2.25 6.75v.023a.755.755 0 0 1-.75-.75V9.055c0-.188.047-.375.164-.516L5.04 6.43a.757.757 0 0 1 1.149 0l.914 1.102a.55.55 0 0 0 .82.047l.492-.492c.305-.305.82-.305 1.102.047l1.547 1.781c.117.14.187.328.187.492V11c0 .422-.352.75-.75.75z' />
    </g>
    <defs>
      <clipPath id='828086611cd17624396b6eba72a1e61f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaCaptionFillIcon);
export default ForwardRef;
