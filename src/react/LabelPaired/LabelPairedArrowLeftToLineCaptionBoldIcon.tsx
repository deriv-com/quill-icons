import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 13.438V5.562Q.297 5.049.813 5q.514.047.562.563v7.875q-.047.514-.562.562-.516-.047-.563-.562m3.188-4.336 3.187-3q.399-.329.773.023.329.399-.023.797L5.242 8.938h4.946q.514.045.562.562-.047.515-.562.563H5.242l2.156 2.039q.33.375.024.796-.399.33-.797.024l-3.187-3A.58.58 0 0 1 3.25 9.5a.51.51 0 0 1 .188-.398' />
    </g>
    <defs>
      <clipPath id='71c3b8ac69192b30af9144896b5b137e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionBoldIcon);
export default ForwardRef;
